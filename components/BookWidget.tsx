// components/BookWidget.tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Transaction, PublicKey } from "@solana/web3.js";
import { createTransferInstruction, getAssociatedTokenAddress, createAssociatedTokenAccountInstruction } from "@solana/spl-token";
import { useAppWallet } from "@/app/hooks/useAppWallet";
import { useConnection } from "@solana/wallet-adapter-react";
import { Input } from "@heroui/input";
import { XCircleIcon } from "@heroicons/react/24/outline";

// Helper function to format prices.
const formatPrice = (price: number) => {
  return price.toLocaleString('en-US', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
};

const getFriendlyErrorMessage = (error: any): string => {
  const errorMessage = error?.message || "";
  if (errorMessage.includes("insufficient lamports")) return "Not enough SOL for transaction fees.";
  if (errorMessage.includes("0x1771") || errorMessage.includes("Insufficient funds")) return "Not enough funds. Please check your token balance.";
  if (error instanceof Error && !errorMessage.includes('RPC') && errorMessage.length < 100) return errorMessage;
  return "An unknown error occurred. Please try again.";
};

interface BookWidgetProps {
  car: {
    id: string;
    name: string;
    price: number;
  };
}

export const BookWidget = ({ car }: BookWidgetProps) => {
  const { publicKey, sendTransaction, wallet, disconnect, merBalance, fetchBalance } = useAppWallet();
  const { connection } = useConnection();
  const [email, setEmail] = useState("");
  const [days, setDays] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [prices, setPrices] = useState({ solPrice: 0, merPrice: 0 });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch("/api/prices");
        if (res.ok) setPrices(await res.json());
      } catch (error) {
        console.error("Failed to fetch prices:", error);
      }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  const totalUSD = useMemo(() => car.price * days, [car.price, days]);
  const totalMER = useMemo(() => prices.merPrice > 0 ? totalUSD / prices.merPrice : 0, [totalUSD, prices.merPrice]);

  const handleBook = async () => {
    if (!publicKey || !wallet) {
      setStatusMessage("Please connect your wallet first.");
      return;
    }
    if (!email || !email.includes("@")) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }
    if (merBalance < totalMER) {
      setStatusMessage("Insufficient $MER balance for this rental.");
      return;
    }

    setIsLoading(true);
    setStatus("");
    setStatusMessage("Preparing transaction...");

    try {
      let signature: string;

      // The TESTING_MODE flag in your .env is 'false', so this block will run
      if (process.env.NEXT_PUBLIC_TESTING_MODE === 'true') {
        console.warn("--- TESTING MODE ACTIVE ---");
        setStatusMessage("Processing test booking...");
        await new Promise(resolve => setTimeout(resolve, 1500));
        signature = `TEST_MODE_TRANSACTION_${Date.now()}`;
      } else {
        // --- PRODUCTION LOGIC ---
        const MER_MINT = new PublicKey(process.env.NEXT_PUBLIC_BOPCOIN_MINT_ADDRESS!);
        const businessWallet = new PublicKey(process.env.NEXT_PUBLIC_BUSINESS_WALLET_ADDRESS!);
        
        // --- FIX IS HERE: Changed from 9 decimals to 6 decimals ---
        const amountInSmallestUnit = Math.floor(totalMER * 1_000_000); // 6 zeros for 6 decimals

        const userMerAta = await getAssociatedTokenAddress(MER_MINT, publicKey);
        const businessMerAta = await getAssociatedTokenAddress(MER_MINT, businessWallet);

        // We need to add an instruction to create the business's token account if it doesn't exist
        const instructions = [];
        const businessAtaInfo = await connection.getAccountInfo(businessMerAta);
        if (!businessAtaInfo) {
            instructions.push(
                createAssociatedTokenAccountInstruction(publicKey, businessMerAta, businessWallet, MER_MINT)
            );
        }
        
        // Add the transfer instruction
        instructions.push(
            createTransferInstruction(userMerAta, businessMerAta, publicKey, amountInSmallestUnit)
        );
        
        const transaction = new Transaction().add(...instructions);
        transaction.feePayer = publicKey;
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

        setStatusMessage("Please approve the transaction in your wallet...");
        const realSignature = await sendTransaction(transaction, connection);

        setStatusMessage("Confirming transaction on the blockchain...");
        await connection.confirmTransaction(realSignature, "confirmed");
        signature = realSignature;
      }

      // --- SHARED LOGIC ---
      setStatusMessage("Saving booking details...");
      
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          carId: car.id,
          carName: car.name,
          walletAddress: publicKey.toBase58(),
          email: email,
          days: days,
          merCost: totalMER,
          transactionId: signature,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save booking.");
      }
      
      await fetchBalance();
      setStatus("success");
      setStatusMessage(`Booking confirmed! A confirmation will be sent to ${email}.`);
    } catch (error) {
      console.error("Booking failed:", error);
      setStatus("error");
      setStatusMessage(getFriendlyErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const ActionButton = () => {
    if (!publicKey) {
      return <WalletMultiButton className="!h-[48px] w-full !rounded-md !bg-mer-orange !text-lg !font-semibold !text-black transition-opacity hover:!opacity-80" style={{ justifyContent: "center" }} />;
    }
    if (isLoading) {
      return (
        <button disabled className="flex h-[48px] w-full items-center justify-center rounded-md bg-mer-orange/50 text-lg font-semibold text-black">
          Processing...
        </button>
      );
    }
    return (
      <button onClick={handleBook} className="h-[48px] w-full rounded-md bg-mer-orange text-lg font-semibold text-black transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50" disabled={isLoading || merBalance < totalMER}>
        Book with $MER
      </button>
    );
  };

  return (
    <div className="relative z-10 mx-auto w-full max-w-md">
      <div className="relative z-10 w-full space-y-4 rounded-lg bg-black p-5">
        <h2 className="text-center text-xl font-bold text-white">Book {car.name}</h2>
        {publicKey && (
          <div className="flex items-center justify-between gap-4 rounded-md bg-neutral-800 p-2">
            <div className="flex items-center gap-2">
              <img src={wallet!.adapter.icon} alt={wallet!.adapter.name} className="h-5 w-5" />
              <p className="font-mono text-xs font-medium text-neutral-300">
                {publicKey.toBase58().slice(0, 6)}...{publicKey.toBase58().slice(-4)}
              </p>
            </div>
            <button onClick={() => disconnect()} title="Disconnect Wallet" className="text-neutral-400 transition-colors hover:text-red-500">
              <XCircleIcon className="h-5 w-5" />
            </button>
          </div>
        )}
        <div className="text-center">
          <p className="text-sm font-semibold text-neutral-200">YOUR $MER ≈ {merBalance.toLocaleString()}</p>
          <p className="text-xs text-neutral-400">1 $MER ≈ ${prices.merPrice > 0 ? prices.merPrice.toPrecision(4) : "..."}</p>
        </div>
        <div className="space-y-4">
          <Input type="email" label="Email Address" value={email} onValueChange={setEmail} variant="bordered" classNames={{ label: "text-xs font-semibold text-neutral-300", inputWrapper: "border-neutral-700 bg-neutral-900", input: "text-white text-[16px]" }} />
          <Input type="number" label="Rental Duration (Days)" value={days.toString()} onValueChange={(val) => setDays(Number(val) > 0 ? Number(val) : 1)} variant="bordered" endContent={<span className="text-sm text-neutral-500">Days</span>} classNames={{ label: "text-xs font-semibold text-neutral-300", input: "text-[16px] text-white font-semibold", inputWrapper: "border-neutral-700 bg-neutral-900", }} />
          <div className="flex flex-col items-center gap-1 rounded-md bg-mer-orange/10 p-3 font-semibold text-white">
            <p className="text-sm">Total Cost: ${formatPrice(totalUSD)}</p>
            <p className="text-sm">Total $MER: {formatPrice(totalMER)}</p>
          </div>
        </div>
        {publicKey && merBalance < totalMER && (<p className="text-center text-xs font-semibold text-red-500">Warning: Insufficient $MER balance for this rental.</p>)}
        <ActionButton />
        {statusMessage && (<div className={`mt-4 rounded-md p-2 text-center text-xs font-bold ${status === "success" ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"}`}>{statusMessage}</div>)}
      </div>
    </div>
  );
};