"use client";
import { useState } from "react";
import { SwapWidget } from "@/components/SwapWidget";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { FaCopy, FaCheck } from "react-icons/fa";

const steps = [
  {
    name: "1. Create Wallet",
    description: "Download a Solana wallet like Phantom to get started.",
    href: "https://phantom.app/download",
    cta: "Get Phantom",
  },
  {
    name: "2. Get SOL",
    description: "Buy SOL from an exchange and send it to your new wallet address.",
    href: "https://www.coinbase.com/how-to-buy/solana",
    cta: "Buy SOL",
  },
  {
    name: "3. Swap for $PIXEL",
    description: "Use the swap widget or CA to trade your SOL for $PIXEL tokens.",
    href: "#", // No link needed as the widget is present
    cta: "Welcome to the World!",
  },
];

export const HowToBuy = () => {
  const [isCopied, setIsCopied] = useState(false);
  const contractAddress = process.env.NEXT_PUBLIC_PIXEL_MINT_ADDRESS || "CA not available";

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contractAddress);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset icon after 2 seconds
    }
  };

  return (
    <section id="how-to-buy" className="pt-10 md:pt-20 mb-24 ">
      {/* Header styled like other homepage sections */}
      <div className="text-left mb-8 md:mb-12">
        <p className="text-pixel-green font-bold tracking-widest">
          GET STARTED
        </p>
        <h2 className="text-4xl font-extrabold text-zinc-300">
          HOW TO BUY $PIXEL
        </h2>
      </div>

       <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Side: Swap Widget */}
                <div className="flex justify-center flex-col gap-4">
                    {/* CA Copy Box with new dark styles */}
                    <div className="relative z-10 w-full p-4 bg-zinc-900/80 border-2 border-zinc-700 rounded-lg backdrop-blur-sm flex items-center justify-between gap-4">
                        <code className="text-sm sm:text-base text-zinc-300 truncate">
                            {contractAddress}
                        </code>
                        <button 
                            onClick={handleCopy} 
                            className="text-zinc-400 hover:text-white transition-colors text-lg"
                            aria-label="Copy contract address"
                        >
                            {isCopied ? <FaCheck className="text-pixel-green" /> : <FaCopy />}
                        </button>
                    </div>
                    <SwapWidget />
                </div>

                {/* Right Side: Instructions */}                    
                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start">
                            <CheckBadgeIcon className="h-8 w-8 text-pixel-green flex-shrink-0 mt-1" />
                            <div className="ml-4">
                                <h3 className="text-xl font-bold text-zinc-300">{step.name}</h3>
                                <p className="mt-1 text-zinc-400">{step.description}</p>
                                <a 
                                    href={step.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm font-bold text-pixel-green hover:underline mt-2 inline-block"
                                >
                                    Learn More &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};