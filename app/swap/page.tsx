"use client";

import { Ticker } from "@/components/Ticker";
import { SwapWidget } from "@/components/SwapWidget";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const steps = [
  {
    title: "Set up your wallet",
    description: "Download Phantom or another Solana-compatible wallet. Secure it with your seed phrase!",
  },
  {
    title: "Get some SOL",
    description: "Buy Solana ($SOL) on an exchange (e.g., Coinbase) and transfer to your wallet.",
  },
  {
    title: "Go to DEX",
    description: "Use a DEX like Raydium or Jupiter, or swap directly on this site to get $MER.",
  },
  {
    title: "Swap for $MER",
    description: "Enter your SOL amount, confirm the transaction, and unlock rentals with $MER!",
  },
];

export default function SwapPage() {
    const [copied, setCopied] = useState(false);
    const contractAddress = process.env.NEXT_PUBLIC_BOPCOIN_MINT_ADDRESS || "";

    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-[4] flex min-h-screen w-full flex-col items-center pt-20 sm:pt-28 pointer-events-auto">
        
        <div className="flex justify-center pulse-scale px-6 py-8 md:py-12">
          <h1
            className="w-full text-center font-poppins text-white text-5xl md:text-6xl font-bold"
            data-text="HOW TO SWAP"
          >
            HOW TO SWAP
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-8 px-6 container mx-auto max-w-7xl">
          {steps.map((step, index) => (
             <div key={index} className="relative">
                <div className="absolute -top-5 -left-5 z-10 flex h-12 w-12 items-center justify-center rounded-md border-3 border-black bg-mer-orange shadow-md">
                    <span className="font-poppins text-2xl text-white">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>
                <div className="h-full rounded-lg border-4 border-black bg-white p-6 shadow-[8px_8px_0px_#000000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#ff6600]">
                    <h2 className="font-poppins text-2xl lg:text-3xl font-semibold text-black mb-2">{step.title}</h2>
                    <p className="font-poppins text-md text-gray-800">{step.description}</p>
                </div>
             </div>
          ))}
        </div>

        <div className="container mx-auto max-w-4xl px-6 w-full mt-14">
            <div className="p-4 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Official $MER Contract Address</h2>
                <div className="inline-flex items-center bg-[#1a1a1a] p-4 rounded-lg">
                  <p className="text-sm md:text-base break-all mr-4 text-white">{contractAddress}</p>
                  <button onClick={handleCopy} className="bg-mer-orange p-2 rounded-md hover:bg-mer-orange/80 transition-all">
                    {copied ? "Copied!" : <ClipboardDocumentIcon className="w-6 h-6 text-white" />}
                  </button>
                </div>
            </div>
        </div>

        <div id="swap-widget-section" className="w-full pt-12 md:pt-4 pb-28 scroll-mt-28">
            <h2 className="mb-8 w-full text-center font-poppins text-5xl md:text-6xl text-white font-bold" data-text="...OR THE EASY WAY">
             ...OR THE EASY WAY
            </h2>
            <div className="px-4">
                <SwapWidget />
            </div>
        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 z-[19] w-full">
        <Ticker className="relative z-20" />
      </div>
    </div>
  );
}