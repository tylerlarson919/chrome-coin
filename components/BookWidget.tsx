// components/BookWidget.tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import { usePathname } from "next/navigation";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { VersionedTransaction, PublicKey } from "@solana/web3.js";
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

interface BookWidgetProps {
  car: {
    id: string;
    name: string;
    price: number;
  };
}

export const BookWidget = ({ car }: BookWidgetProps) => {
  const { publicKey, sendTransaction, wallet, disconnect, merBalance } = useAppWallet();
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

  const totalUSD = useMemo(() => car.price * days, [car.price, days]);
  const totalMER = useMemo(() => {
    if (prices.merPrice === 0) return 0;
    return totalUSD / prices.merPrice;
  }, [totalUSD, prices.merPrice]);

  const handleBook = async () => {
    if (!publicKey || !wallet) {
      setStatus("error");
      setStatusMessage("Please connect your wallet first.");
      return;
    }

    if (!email || !email.includes("@")) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setStatus("");
    setStatusMessage("");

    try {
      // Step 1: Get Jupiter quote for MER -> SOL
      const MER_MINT = new PublicKey(
        process.env.NEXT_PUBLIC_BOPCOIN_MINT_ADDRESS!,
      );
      const SOL_MINT = new PublicKey(
        "So11111111111111111111111111111111111111112",
      );
      const amountLamports = Math.floor(totalMER * 1000000000);

      const response = await fetch("/api/rental-swap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userPublicKey: publicKey.toBase58(),
          inputMint: MER_MINT.toBase58(),
          outputMint: SOL_MINT.toBase58(), // This needs to be MER->business wallet, not MER->SOL
          amount: amountLamports,
        }),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          throw new Error("Failed to get swap transaction. Server returned an error.");
        }
        throw new Error(errorData.error || "Failed to get swap transaction.");
      }

      const { swapTransaction } = await response.json();
      const swapTransactionBuf = Buffer.from(swapTransaction, "base64");
      const transaction = VersionedTransaction.deserialize(
        swapTransactionBuf,
      );

      // Step 2: Send transaction to user's wallet
      const signature = await sendTransaction(transaction, connection);

      setStatusMessage("Transaction sent! Confirming...");
      const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
      await connection.confirmTransaction(
        { blockhash, lastValidBlockHeight, signature },
        "confirmed",
      );

      // Step 3: Call API to save booking details
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          carId: car.id,
          email: email,
          days: days,
          merCost: totalMER,
          transactionId: signature,
        }),
      });

      setStatus("success");
      setStatusMessage(`Booking for ${car.name} is confirmed! A confirmation email will be sent to ${email}.`);
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
      return (
        <WalletMultiButton
          className="w-full !rounded-md !bg-mer-orange !py-2.5 !text-lg !font-semibold !text-black transition-opacity hover:!opacity-80"
          style={{ justifyContent: "center" }}
        />
      );
    }

    if (isLoading) {
      return (
        <button
          disabled
          className="w-full py-3 text-2xl font-bangers tracking-wider text-white bg-gray-400 border-2 border-black rounded-md"
        >
          Processing...
        </button>
      );
    }

    return (
      <button
        onClick={handleBook}
        className="w-full rounded-md bg-mer-orange py-2.5 text-lg font-semibold text-black transition-opacity hover:opacity-80 disabled:opacity-50"
        disabled={isLoading || merBalance < totalMER}
      >
        Book with $MER
      </button>
    );
  };

  return (
    // The main container and internal elements have updated styles
    <div className="relative z-10 w-full max-w-md mx-auto">
      <div className="relative z-10 w-full space-y-4 rounded-lg bg-black p-5">
        <h2 className="text-xl font-bold text-center text-white">
          Book {car.name}
        </h2>

        {publicKey && (
          <div className="flex items-center justify-between gap-4 rounded-md bg-neutral-800 p-2">
            <div className="flex items-center gap-2">
              <img
                src={wallet!.adapter.icon}
                alt={wallet!.adapter.name}
                className="w-5 h-5"
              />
              <p className="font-mono text-xs font-medium text-neutral-300">
                {publicKey.toBase58().slice(0, 6)}...
                {publicKey.toBase58().slice(-4)}
              </p>
            </div>
            <button
              onClick={() => disconnect()}
              title="Disconnect Wallet"
              className="text-neutral-400 transition-colors hover:text-red-500"
            >
              <XCircleIcon className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="text-center">
          <p className="text-sm font-semibold text-neutral-200">
            YOUR $MER ≈ {merBalance.toLocaleString()}
          </p>
          <p className="text-xs text-neutral-400">
            1 $MER ≈ ${prices.merPrice > 0 ? prices.merPrice.toPrecision(4) : "..."}
          </p>
        </div>

        <div className="space-y-4">
          <Input
            type="email"
            label="Email Address"
            value={email}
            onValueChange={setEmail}
            variant="bordered"
            classNames={{
              label: "text-xs font-semibold text-neutral-300",
              inputWrapper: "border-neutral-700 bg-neutral-900",
              input: "text-white"
            }}
          />
          <Input
            type="number"
            label="Rental Duration (Days)"
            value={days.toString()}
            onValueChange={(val) => setDays(Number(val) > 0 ? Number(val) : 1)}
            variant="bordered"
            endContent={<span className="text-neutral-500 text-sm">Days</span>}
            classNames={{
              label: "text-xs font-semibold text-neutral-300",
              input: "text-white font-semibold",
              inputWrapper: "border-neutral-700 bg-neutral-900",
            }}
          />
          <div className="flex flex-col items-center gap-1 rounded-md bg-mer-orange/10 p-3 font-semibold text-white">
            <p className="text-sm">
              Total Cost: ${formatPrice(totalUSD)}
            </p>
            <p className="text-sm">
              Total $MER: {formatPrice(totalMER)}
            </p>
          </div>
        </div>

        {publicKey && merBalance < totalMER && (
          <p className="text-center text-xs font-semibold text-red-500">
            Warning: Insufficient $MER balance for this rental.
          </p>
        )}

        <ActionButton />

        {statusMessage && (
          <div
            className={`mt-4 rounded-md p-2 text-center text-xs font-bold ${
              status === "success"
                ? "bg-green-900/50 text-green-300"
                : "bg-red-900/50 text-red-300"
            }`}
          >
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
};