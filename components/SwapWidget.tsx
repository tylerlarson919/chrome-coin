// app/components/BuyWidget.tsx
'use client';
import { useState, useMemo, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Input } from '@heroui/input';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { VersionedTransaction, PublicKey } from '@solana/web3.js';
import { usePathname } from 'next/navigation';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useAppWallet } from '@/app/hooks/useAppWallet'; 
import { useConnection } from '@solana/wallet-adapter-react';
const WalletIcon = ({ src, alt }: { src: string, alt: string }) => (
    <img src={src} alt={alt} className="w-8 h-8 rounded-[8px]" />
);

// Constants
const MER_MINT = new PublicKey(process.env.NEXT_PUBLIC_BOPCOIN_MINT_ADDRESS!);
const SOL_MINT = new PublicKey('So11111111111111111111111111111111111111112'); // Wrapped SOL

const getFriendlyErrorMessage = (error: any): string => {
 const errorMessage = error?.message || "";
 if (errorMessage.includes("insufficient lamports")) {
     return "Not enough SOL for transaction fees.";
 }
 if (errorMessage.includes("0x1771") || errorMessage.includes("Insufficient funds")) {
     return "Not enough funds for this swap. Please check your SOL balance.";
 }
 if (errorMessage.includes("is not tradable")) {
     return "Token is not currently available for trading. Please try again later.";
 }
 if (errorMessage.includes("Unexpected end of JSON input") || errorMessage.includes("Failed to fetch")) {
     return "Error communicating with the server. Please try again.";
 }
 // Check for a specific user-facing error from your API, if applicable
 if (error instanceof Error && !errorMessage.includes('RPC') && errorMessage.length < 100) {
     return errorMessage;
 }
 return "An unknown error occurred. Please try again.";
};

export const SwapWidget = () => {
    const { publicKey, sendTransaction, wallet, disconnect, merBalance, fetchBalance } = useAppWallet();
    const { connection } = useConnection();
    const [isClient, setIsClient] = useState(false);
    const [activeTab, setActiveTab] = useState('SOL');
    const [payAmount, setPayAmount] = useState('0');
    const [prices, setPrices] = useState({ solPrice: 0, merPrice: 0 });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(''); // 'success', 'error', or ''
    const [statusMessage, setStatusMessage] = useState('');
    const pathname = usePathname();
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Fetch token prices on component mount
    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const res = await fetch('/api/prices');
                const data = await res.json();
                if (res.ok) {
                    setPrices(data);
                }
            } catch (error) {
                console.error("Failed to fetch prices:", error);
            }
        };
        fetchPrices();
        const interval = setInterval(fetchPrices, 30000); // Refresh every 30 seconds
        return () => clearInterval(interval);
    }, []);

    const receiveAmount = useMemo(() => {
        const amount = parseFloat(payAmount) || 0;
        if (amount === 0 || prices.merPrice === 0) return '0';

        let amountInUsd;
        if (activeTab === 'SOL') {
            amountInUsd = amount * prices.solPrice;
        } else { // 'CARD'
            amountInUsd = amount;
        }
        
        const merAmount = amountInUsd / prices.merPrice;
        return merAmount.toLocaleString('en-US', { maximumFractionDigits: 0 });
    }, [payAmount, activeTab, prices]);

    const handleSwap = async () => {
     if (!publicKey || !wallet) {
         setStatus('error');
         setStatusMessage('Please connect your wallet first.');
         return;
     }
     const amount = parseFloat(payAmount);
     if (isNaN(amount) || amount <= 0) {
         setStatus('error');
         setStatusMessage('Please enter a valid amount.');
         return;
     }

     setIsLoading(true);
     setStatus('');
     setStatusMessage('');

     try {
         const response = await fetch('/api/swap', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
                 userPublicKey: publicKey.toBase58(),
                 inputMint: SOL_MINT.toBase58(),
                 outputMint: process.env.NEXT_PUBLIC_BOPCOIN_MINT_ADDRESS,
                 amount: amount,
                 slippageBps: 50,
             }),
         });

         if (!response.ok) {
             let errorData;
             try {
                 // Try to parse a JSON error from the API
                 errorData = await response.json();
             } catch {
                 // If parsing fails, the response was not JSON.
                 throw new Error('Failed to get swap transaction. Server returned an error.');
             }
             throw new Error(errorData.error || 'Failed to get swap transaction.');
         }

         const { swapTransaction } = await response.json();
         const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
         const transaction = VersionedTransaction.deserialize(swapTransactionBuf);
         const signature = await sendTransaction(transaction, connection);
         
         setStatusMessage(`Transaction sent! Confirming...`);
         const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
         await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature }, 'confirmed');

         setStatus('success');
         setStatusMessage('Swap successful! Welcome to the MER Army.');
         fetchBalance();
     } catch (error) {
         console.error('Swap failed:', error);
         setStatus('error');
         setStatusMessage(getFriendlyErrorMessage(error));
     } finally {
        setIsLoading(false);
     }
    };
    
    // Placeholder for card payments
    const handleCardPayment = () => {
        alert("Card payments coming soon! We're working with our partners to enable this feature.");
    };

    const ActionButton = () => {
        if (!publicKey) {
            return (
                <WalletMultiButton
                    className="w-full !py-3 !text-2xl !font-bangers !tracking-wider !text-white !bg-mer-orange !border-2 !border-black !rounded-md !shadow-[4px_4px_0px_#000000] hover:!shadow-none hover:!translate-x-1 hover:!translate-y-1 !transition-all"
                    style={{ justifyContent: 'center' }}
                />
            );
        }

        if (isLoading) {
            return (
                <button disabled className="w-full py-3 text-2xl font-bangers tracking-wider text-white bg-gray-400 border-2 border-black rounded-md">
                    Processing...
                </button>
            );
        }
        
        const actionText = activeTab === 'CARD' ? 'Buy with Card' : `Swap SOL for $MER`;
        const actionHandler = activeTab === 'CARD' ? handleCardPayment : handleSwap;
        
        return (
            <button
                onClick={actionHandler}
                className="w-full py-3 font-bold text-2xl font-bangers tracking-wider text-white bg-mer-orange border-2 border-black rounded-md shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
                {actionText}
            </button>
        );
    };
    

    return (
        <div className="relative z-10 w-full max-w-md mx-auto">
            <div className="relative z-10 w-full p-6 bg-white border-4 border-black rounded-xl shadow-[8px_8px_0px_#000000]">
                <h2 className="text-2xl lg:text-3xl font-bold font-poppins text-center text-black">
                    Swap SOL for $MER
                </h2>
                {isClient && publicKey && wallet && (
                    <div className="flex items-center justify-center gap-4 p-2 mt-4 bg-green-100/80 border-1 border-green-400 rounded-lg">
                        <div className="flex items-center gap-2">
                            <img src={wallet.adapter.icon} alt={wallet.adapter.name} className="w-5 h-5" />
                            <p className="font-mono text-xs font-bold text-green-900">
                                {publicKey.toBase58().slice(0, 10)}...{publicKey.toBase58().slice(-4)}
                            </p>
                        </div>
                        <button 
                            onClick={() => disconnect()} 
                            title="Disconnect Wallet"
                            className="text-red-500 transition-transform duration-200 hover:text-red-700 hover:scale-110 active:scale-95"
                        >
                            <XCircleIcon className="w-6 h-6" />
                        </button>
                    </div>
                )}

                <div className="mt-4 text-center">
                    <p className="text-gray-700 font-bold">YOUR $MER ≈ {merBalance.toLocaleString()}</p>
                    <p className="font-poppins text-sm text-gray-500">
                      1 $MER ≈ ${prices.merPrice > 0 ? prices.merPrice.toPrecision(4) : '...'}
                    </p>
                </div>         

                <div className="space-y-4 py-6">
                    <Input
                        type="number"
                        label={`Pay with SOL`}
                        value={payAmount}
                        onValueChange={setPayAmount}
                        variant="bordered"
                        endContent={<img src="https://res.cloudinary.com/dqedckeaa/image/upload/v1752807739/sol-logo_qufbpd.webp" alt="$SOL" className="w-8 h-8 mb-[2px] rounded-[8px]" />
                        }
                        classNames={{
                            label: "text-sm font-bold text-gray-800 mb-2",
                            input: "text-xl font-bold",
                            inputWrapper: ["dark bg-[#1a1a1a] text-white border-2 border-black shadow-none rounded-md group-data-[focus=true]:border-mer-orange data-[hover=true]:border-mer-orange transition-colors"],
                        }}
                    />
                    <Input
                        isReadOnly
                        label="Receive $MER"
                        value={receiveAmount}
                        variant="bordered"
                        endContent={<img src="https://res.cloudinary.com/dqedckeaa/image/upload/v1756841267/mer-logo-dark_asz8kr.png" alt="$MER" className="w-8 h-8 mb-[2px] rounded-[8px]" />}
                        classNames={{
                            label: "text-sm font-bold text-gray-800 mb-2",
                            input: "text-xl font-bold",
                            inputWrapper: ["dark bg-[#1a1a1a] text-white border-none shadow-none rounded-md data-[hover=true]:border-black transition-colors"],
                        }}
                    />
                </div>
                
                {isClient ? (
                    <ActionButton />
                ) : (
                    <div className="w-full h-[48px] bg-gray-200 border-2 border-black rounded-md animate-pulse" />
                )}

                {statusMessage && (
                  <div className={`mt-4 p-2 text-center rounded-md text-sm font-bold ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {statusMessage}
                  </div>
                )}
                
                <div className="flex items-center justify-between mt-4">
                    <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="text-sm underline text-gray-600 hover:text-mer-orange">
                        Don&apos;t have a Solana wallet?
                    </a>
                    <div className="flex items-center space-x-2">
                        <WalletIcon src="https://res.cloudinary.com/dqedckeaa/image/upload/v1752805802/phantom-logo_retn2j.webp" alt="Phantom Wallet" />
                        <WalletIcon src="https://res.cloudinary.com/dqedckeaa/image/upload/v1752805802/solflare-logo_qy2ndn.webp" alt="Solflare Wallet" />
                    </div>
                </div>
            </div>
        </div>
    );
};