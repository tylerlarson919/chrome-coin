"use client";
import { SwapWidget } from "@/components/SwapWidget";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const steps = [
    {
        name: "1. Create a Solana Wallet",
        description: "Download a Solana-compatible wallet like Phantom or Solflare. You can get it from the app store for your phone or as a browser extension for your desktop. This wallet is your personal key to the Solana ecosystem.",
        href: "https://phantom.app/download"
    },
    {
        name: "2. Add SOL to Your Wallet",
        description: "You'll need Solana's native currency, SOL, to trade for $PIXEL and to pay for small network fees (gas). Purchase SOL on a major exchange like Coinbase or Binance and transfer it to your new wallet's public address.",
        href: "https://www.coinbase.com/how-to-buy/solana"
    },
    {
        name: "3. Swap SOL for $PIXEL",
        description: "Return to this page and connect your wallet on the swap widget. Enter the amount of SOL you wish to spend, approve the transaction, and the $PIXEL tokens will appear in your wallet. Welcome to the World!",
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
                        <div className="relative z-10 w-full p-4 bg-white border-4 border-black rounded-xl shadow-[6px_6px_0px_#63c79a] flex items-center justify-between gap-4">
                            <code className="text-sm sm:text-base text-zinc-400 truncate">
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
                    <div className="text-zinc-300">
                        <p className="font-bold text-pixel-green tracking-widest">GET STARTED</p>
                        <h1 className="text-4xl sm:text-5xl font-extrabold mt-2">How to Buy $PIXEL</h1>
                        <p className="mt-4 text-lg text-zinc-400">
                            Becoming a citizen of Pixel World is simple. Follow these three steps to mint your first $PIXEL tokens and join our 8-bit universe.
                        </p>
                        
                        <div className="mt-12 space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckBadgeIcon className="h-8 w-8 text-pixel-green flex-shrink-0 mt-1" />
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold">{step.name}</h3>
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
            </div>
        </div>
    );
}