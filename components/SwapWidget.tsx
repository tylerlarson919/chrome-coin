'use client';
import { useState, useMemo, useEffect } from 'react';
import { Input } from "@heroui/input";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { VersionedTransaction, PublicKey } from '@solana/web3.js';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useAppWallet } from '@/app/hooks/useAppWallet'; 
import { useConnection } from '@solana/wallet-adapter-react';
import { WalletIcon as HeroWalletIcon } from "@heroicons/react/24/outline";

const WalletIcon = ({ src, alt }: { src: string, alt: string }) => (
    <img src={src} alt={alt} className="w-8 h-8 rounded-[8px]" />
);

// Constants
const PIXEL_MINT = new PublicKey(process.env.NEXT_PUBLIC_PIXEL_MINT_ADDRESS!);
const SOL_MINT = new PublicKey('So11111111111111111111111111111111111111112');

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
    if (error instanceof Error && !errorMessage.includes('RPC') && errorMessage.length < 100) {
        return errorMessage;
    }
    return "An unknown error occurred. Please try again.";
};

export const SwapWidget = () => {
    const { publicKey, sendTransaction, wallet, disconnect, pixelBalance, fetchBalance } = useAppWallet();
    const { connection } = useConnection();
    const [isClient, setIsClient] = useState(false);
    const [activeTab, setActiveTab] = useState('SOL'); // Logic preserved
    const [payAmount, setPayAmount] = useState('0');
    const [prices, setPrices] = useState({ solPrice: 0, pixelPrice: 0 });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        setIsClient(true);
    }, []);

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
        const interval = setInterval(fetchPrices, 30000);
        return () => clearInterval(interval);
    }, []);

    const receiveAmount = useMemo(() => {
        const amount = parseFloat(payAmount) || 0;
        if (amount === 0 || prices.pixelPrice === 0) return '0';

        let amountInUsd;
        if (activeTab === 'SOL') {
            amountInUsd = amount * prices.solPrice;
        } else { // 'CARD' logic preserved
            amountInUsd = amount;
        }
        
        const pixelAmount = amountInUsd / prices.pixelPrice;
        return pixelAmount.toLocaleString('en-US', { maximumFractionDigits: 0 });
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
                    outputMint: PIXEL_MINT.toBase58(),
                    amount: amount,
                    slippageBps: 50,
                }),
            });

            // Original nested try/catch for API error parsing is preserved
            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                } catch {
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
            setStatusMessage('Swap successful! Welcome to Pixel World.');
            fetchBalance();
        } catch (error) {
            console.error('Swap failed:', error);
            setStatus('error');
            setStatusMessage(getFriendlyErrorMessage(error));
        } finally {
            setIsLoading(false);
        }
    };
    
    // Preserved card payment placeholder
    const handleCardPayment = () => {
        alert("Card payments coming soon! We're working with our partners to enable this feature.");
    };

    const ActionButton = () => {
        // Default styles for buttons within this widget
        const defaultButtonClasses = "h-12 py-3 px-4 font-bold text-base tracking-wider";

        if (!publicKey) {
            return (
                <WalletMultiButton 
                    className={`!w-full !flex !items-center !justify-center !space-x-2 active:!scale-95 ${defaultButtonClasses}`}
                    style={{ justifyContent: 'center' }}
                >
                    <HeroWalletIcon className="h-6 w-6" />
                    <span className="ml-2 whitespace-nowrap">Connect Wallet</span>
                </WalletMultiButton>
            );
        }

        if (isLoading) {
            return (
                <button disabled className={`w-full text-white bg-zinc-400 rounded-md ${defaultButtonClasses}`}>
                    Processing...
                </button>
            );
        }
        
        const actionText = activeTab === 'CARD' ? 'Buy with Card' : `Swap SOL for $PIXEL`;
        const actionHandler = activeTab === 'CARD' ? handleCardPayment : handleSwap;
        
        return (
            <button
                onClick={actionHandler}
                className={`w-full text-white bg-pixel-green rounded-md hover:bg-opacity-80 transition-all ${defaultButtonClasses}`}
            >
                {actionText}
            </button>
        );
    };

    return (
        <div className="relative z-10 w-full max-w-xl mx-auto font-montserrat">
            <div className="relative z-10 w-full p-6 bg-white border-4 border-black rounded-xl shadow-[8px_8px_0px_#63c79a]">
                <h2 className="text-2xl lg:text-3xl font-bold text-center text-black">
                    Swap SOL for $PIXEL
                </h2>
                {isClient && publicKey && wallet && (
                    <div className="flex items-center justify-center gap-4 p-2 mt-4 bg-green-100/80 border border-green-400 rounded-lg">
                        <div className="flex items-center gap-2">
                            <img src={wallet.adapter.icon} alt={wallet.adapter.name} className="w-5 h-5" />
                            <p className="font-mono text-xs font-bold text-green-900">
                                {publicKey.toBase58().slice(0, 10)}...{publicKey.toBase58().slice(-4)}
                            </p>
                        </div>
                        <button 
                            onClick={disconnect} 
                            title="Disconnect Wallet"
                            className="text-red-500 transition-transform duration-200 hover:text-red-700 hover:scale-110 active:scale-95"
                        >
                            <XCircleIcon className="w-6 h-6" />
                        </button>
                    </div>
                )}

                <div className="mt-4 text-center">
                    <p className="text-zinc-700 font-bold">YOUR $PIXEL ≈ {pixelBalance.toLocaleString()}</p>
                    <p className="text-sm text-zinc-500">
                        1 $PIXEL ≈ ${prices.pixelPrice > 0 ? prices.pixelPrice.toPrecision(4) : '...'}
                    </p>
                </div>

                <div className="space-y-4 py-6">
                    <Input
                        type="number"
                        label={`Pay with ${activeTab === 'SOL' ? 'SOL' : 'USD'}`}
                        value={payAmount}
                        onValueChange={setPayAmount}
                        variant="bordered"
                        endContent={<img src="https://res.cloudinary.com/dqedckeaa/image/upload/v1752807739/sol-logo_qufbpd.webp" alt="$SOL" className="w-8 h-8 rounded-lg" />}
                        classNames={{
                            label: "text-sm font-bold text-zinc-800",
                            input: "text-xl font-bold",
                            inputWrapper: "border-2 border-black bg-zinc-100 data-[hover=true]:bg-zinc-200 group-data-[focus=true]:border-pixel-green",
                        }}
                    />
                    <Input
                        isReadOnly
                        label="Receive $PIXEL"
                        value={receiveAmount}
                        variant="bordered"
                        endContent={<div className="w-8 h-8 rounded-lg bg-pixel-green text-white font-bold flex items-center justify-center text-lg">P</div>}
                        classNames={{
                            label: "text-sm font-bold text-zinc-800",
                            input: "text-xl font-bold",
                            inputWrapper: "border-2 border-black bg-zinc-100",
                        }}
                    />
                </div>
                
                {isClient ? <ActionButton /> : <div className="w-full h-[52px] bg-zinc-200 border-2 border-black rounded-md animate-pulse" />}

                {statusMessage && (
                    <div className={`mt-4 p-2 text-center rounded-md text-sm font-bold ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {statusMessage}
                    </div>
                )}
                
                {/* Preserved wallet links and icons */}
                <div className="flex items-center justify-between mt-4">
                    <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="text-sm underline text-zinc-600 hover:text-pixel-green">
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