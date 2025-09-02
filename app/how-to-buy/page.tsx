"use client";

import Image from "next/image";
import { Ticker } from "@/components/Ticker";
import { BuyWidget } from "@/components/BuyWidget";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const steps = [
  {
    title: "SET UP YOUR WALLET",
    description: "Download Phantom or another Solana-compatible wallet. Make sure it's secure and you have your seed phrase safe!",
  },
  {
    title: "GET SOME SOL",
    description: "Buy Solana ($SOL) on a centralized exchange (like Coinbase, Kraken, or Binance) and transfer it to your wallet address.",
  },
  {
    title: "GO TO DEX",
    description: "Head over to a decentralized exchange like Raydium or Jupiter. Connect your wallet and prepare for the bop.",
  },
  {
    title: "SWAP FOR $BOP",
    description: "Paste the official $BOPCOIN contract address below, enter your amount, and confirm the transaction. Now you're boppin'!",
  },
];

export default function HowToBuyPage() {
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
        
        {/* --- Centralized Title Text --- */}
        <div className="flex justify-center pulse-scale px-6 py-8 md:py-12">
          <h1
            className="w-full -rotate-3 text-center font-modak text-white text-stroke-smooth text-7xl md:text-8xl"
            data-text="HOW TO BUY"
          >
            HOW TO BUY
          </h1>
        </div>

        {/* --- Steps Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-8 px-6 container mx-auto max-w-7xl">
          {steps.map((step, index) => (
             <div key={index} className="relative">
                <div className="absolute -top-5 -left-5 z-10 flex h-12 w-12 items-center justify-center rounded-md border-3 border-black bg-[#ea88ea] shadow-md">
                    <span className="font-luckiest text-2xl text-white">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>
                <div className="h-full rounded-lg border-4 border-black bg-white p-6 shadow-[8px_8px_0px_#000000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#ea88ea]">
                    <h2 className="font-luckiest text-2xl lg:text-3xl text-black tracking-wider mb-2">{step.title}</h2>
                    <p className="font-comic text-md text-gray-800">{step.description}</p>
                </div>
             </div>
          ))}
        </div>

        {/* --- Bop Character Image --- */}
        <div className="relative w-full mt-12 lg:mt-16 flex justify-center pointer-events-none">
            <Image
                src="https://res.cloudinary.com/dqedckeaa/image/upload/v1752730248/bop-girls-transparent_mwxrt3.webp"
                alt="Bop Characters"
                width={700}
                height={350}
                className="h-auto w-[100%] sm:w-[70%] md:sm:w-[50%] lg:sm:w-[30%] "
            />
        </div>

        {/* --- Contract Address --- */}
        <div className="container mx-auto max-w-4xl px-6 w-full">
            <div className="rounded-lg border-4 border-black bg-yellow-400 p-4 text-center">
                <h3 className="font-luckiest text-2xl text-black">OFFICIAL $BOPCOIN ADDRESS</h3>
                <div className="mt-2 flex items-center justify-center gap-2 sm:gap-4 bg-black/20 rounded-md p-2">
                    <p className="font-mono text-white text-xs sm:text-base break-all">{contractAddress}</p>
                    <button onClick={handleCopy} className="flex-shrink-0 p-2 rounded-md bg-[#ea88ea] text-white border-2 border-black active:scale-95 transition-transform">
                        {copied ? "Copied!" : <ClipboardDocumentIcon className="w-6 h-6"/>}
                    </button>
                </div>
            </div>
        </div>

        {/* --- Buy Widget Section --- */}
        <div id="buy-widget-section" className="w-full pt-12 md:pt-16 pb-28 scroll-mt-28">
            <h2 className="mb-8 w-full -rotate-2 text-center font-modak text-5xl md:text-6xl text-white text-stroke-smooth" data-text="...OR THE EASY WAY">
             ...OR THE EASY WAY
            </h2>
            <div className="px-4">
                <BuyWidget />
            </div>
        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 z-[19] w-full">
        <Ticker className="relative z-20" />
      </div>
    </div>
  );
}