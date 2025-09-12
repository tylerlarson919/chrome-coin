// components/HowToBuy.tsx
"use client";
import { useState } from "react";
import { SwapWidget } from "@/components/SwapWidget";
import { FaCopy, FaCheck } from "react-icons/fa";
import { ArrowLongDownIcon } from "@heroicons/react/24/solid";

const steps = [
  {
    name: "Create Wallet",
    description: "Download a Solana wallet like Phantom to get started.",
    href: "https://phantom.app/download",
    cta: "Get Phantom Wallet",
  },
  {
    name: "Get Some SOL",
    description: "Buy SOL from an exchange and send it to your new wallet address.",
    href: "https://www.coinbase.com/how-to-buy/solana",
    cta: "Buy SOL on Coinbase",
  },
  {
    name: "Swap for $CHROME",
    description: "Use the swap widget below or the CA to trade your SOL for $CHROME.",
    href: "#",
    cta: "Welcome to the Crew!",
  },
];

export const HowToBuy = () => {
  const [isCopied, setIsCopied] = useState(false);
  const contractAddress = process.env.NEXT_PUBLIC_PIXEL_MINT_ADDRESS || "CA not available";

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contractAddress);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <section id="how-to-buy" className="pb-18 sm:pb-20 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Arrow and Swap Widget Section */}
        <div className="flex flex-col items-center">

          <div className="mt-8 w-full max-w-lg mx-auto flex flex-col gap-4">
            {/* Contract Address */}
            <div className="w-full p-4 backdrop-blur-lg rounded-lg flex items-center justify-between gap-4">
              <span className="text-sm font-mono text-zinc-400">CA</span>
              <div className="flex items-center gap-3">
                <code className="text-sm sm:text-base text-zinc-100 truncate">
                  {contractAddress}
                </code>
                <button
                  onClick={handleCopy}
                  className="text-zinc-400 hover:text-white transition-colors text-lg flex-shrink-0"
                  aria-label="Copy contract address"
                >
                  {isCopied ? <FaCheck className="text-purple-400" /> : <FaCopy />}
                </button>
              </div>
            </div>
            
            {/* Swap Widget */}
            <SwapWidget />
          </div>
        </div>
      </div>
    </section>
  );
};