"use client";
import { SwapWidget } from "@/components/SwapWidget";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const steps = [
    {
        name: "1. Get a Solana Wallet",
        description: "Download a Solana-compatible wallet like Phantom or Solflare from the app store or as a browser extension. This is your gateway to the Solana ecosystem.",
        href: "https://phantom.app/download"
    },
    {
        name: "2. Fund Your Wallet with SOL",
        description: "Buy SOL from a major exchange (like Coinbase or Binance) and send it to your new Solana wallet address. You'll need SOL for the swap and for transaction fees (gas).",
        href: "https://www.coinbase.com/how-to-buy/solana"
    },
    {
        name: "3. Swap for $PIXEL",
        description: "Return to this page, connect your wallet using the widget, enter the amount of SOL you wish to swap, and confirm the transaction. Welcome to Pixel World!",
        href: "#"
    }
];

export default function HowToBuyPage() {
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
        <div className="bg-pixel-bg pb-20 sm:pb-28 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side: Swap Widget */}
                    <div className="flex justify-center flex-col gap-4">
                        <div className="relative z-10 w-full p-4 bg-white border-4 border-black rounded-xl shadow-[6px_6px_0px_#16a34a] flex items-center justify-between gap-4">
                            <code className="text-sm sm:text-base text-zinc-600 truncate">
                                {contractAddress}
                            </code>
                            <button 
                                onClick={handleCopy} 
                                className="text-zinc-500 hover:text-zinc-900 transition-colors text-lg"
                                aria-label="Copy contract address"
                            >
                                {isCopied ? <FaCheck className="text-pixel-green" /> : <FaCopy />}
                            </button>
                        </div>
                       <SwapWidget />
                    </div>

                    {/* Right Side: Instructions */}
                    <div className="text-zinc-800">
                        <p className="font-bold text-pixel-green tracking-widest">GET STARTED</p>
                        <h1 className="text-4xl sm:text-5xl font-extrabold mt-2">How to Buy $PIXEL</h1>
                        <p className="mt-4 text-lg text-zinc-600">
                            Joining the Pixel World community is easy. Follow these three simple steps to acquire your first $PIXEL tokens and become part of our 8-bit universe.
                        </p>
                        
                        <div className="mt-12 space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckBadgeIcon className="h-8 w-8 text-pixel-green flex-shrink-0 mt-1" />
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold">{step.name}</h3>
                                        <p className="mt-1 text-zinc-600">{step.description}</p>
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
            </div>
        </div>
    );
}