"use client";
import { Ticker } from "@/components/Ticker";
import { SwapWidget } from "@/components/SwapWidget";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const contractAddress = process.env.NEXT_PUBLIC_BOPCOIN_MINT_ADDRESS || "";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white font-poppins mt-24">
      {/* Hero Section - Now full-width */}
      <section
        className="relative w-full flex items-center justify-center text-center min-h-[500px] md:min-h-[600px]"
      >
        <Image
          src="https://res.cloudinary.com/dqedckeaa/image/upload/v1756825797/MER-night-ride_ijrgnv.jpg"
          alt="Exotic car driving at night"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="brightness-[0.8]"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Drive the dream. Pay with crypto.</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Experience the thrill of driving Miami's most exclusive vehicles, now available for rent using cryptocurrency.
          </p>
        </div>
      </section>
      
      {/* Container for the rest of the page content */}
      <div className="container mx-auto px-4 md:py-24"> 
        {/* This div was empty, content will be added below */}
      </div>
      <div className="w-full pointer-events-none z-[19]">
        <Ticker className="relative z-20" />
      </div>
      {/* $MER Advantage Section */}
      <section
        className="relative w-full py-20 md:py-32 bg-cover bg-center mb-16"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dqedckeaa/image/upload/v1756825797/MER-Lambo-exchange_yzyvin.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-left md:text-center">
          {/* New Header */}
          <div className="max-w-2xl mb-12 mx-auto">
            <span className="text-lg text-mer-orange uppercase tracking-widest font-semibold">
              The $MER Advantage
            </span>
            <h2 className="mt-2 text-3xl md:text-[40px] font-semibold text-white">
              Unlock a New Standard of Luxury
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Using the $MER token isn't just a transaction; it's your key to a world of exclusive benefits, efficiency, and security.
            </p>
          </div>
          
          {/* New Card Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Feature 1 */}
            <div className="p-6 bg-white/5 rounded-lg border-2 border-mer-orange/40 backdrop-blur-sm">
              <svg xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-mer-orange mb-4 mx-auto md:mx-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-white">Seamless & Secure</h3>
              <p className="text-gray-300">Fast, secure, and transparent transactions on the Solana blockchain.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white/5 rounded-lg border-2 border-mer-orange/40 backdrop-blur-sm">
              <svg xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-mer-orange mb-4 mx-auto md:mx-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-white">Exclusive Access</h3>
              <p className="text-gray-300">Choose from Miami&apos;s most exclusive fleet of exotic cars, each meticulously maintained for a premium driving experience.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white/5 rounded-lg border-2 border-mer-orange/40 backdrop-blur-sm">
              <svg xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-mer-orange mb-4 mx-auto md:mx-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-white">Time & Cost Efficiency</h3>
              <p className="text-gray-300">Minimize traditional rental delays and fees with direct crypto transactions.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="/rentals" className="mt-8 bg-mer-orange text-white px-6 py-3 rounded-sm hover:bg-mer-orange/80 transition-all flex items-center font-bold text-lg">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Two-Step Rental Process Section */}
      {/* Two-Step Rental Process Section */}
      <section className="container mx-auto px-4 mb-24">
        {/* Contract Address - Full Width */}
        <div className="text-center mb-8 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Official $MER Contract Address</h2>
          <div className="flex items-center bg-[#1a1a1a] p-3 rounded-lg w-full shadow-lg">
            <p className="text-sm md:text-base break-all mr-3 flex-grow text-left font-mono">{contractAddress}</p>
            <button onClick={handleCopy} className="bg-mer-orange p-2 rounded-md hover:bg-mer-orange/80 transition-all flex-shrink-0">
              {copied ? "Copied!" : <ClipboardDocumentIcon className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Steps Grid - Centered and responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-start lg:items-stretch justify-items-center">
          
          {/* Step 1: Get $MER */}
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <span className="text-mer-orange font-bold">STEP 1</span>
              <h2 className="text-3xl font-bold">Get $MER Tokens</h2>
              <p className="text-gray-400 mt-2">Swap SOL to get the utility token for all your rentals.</p>
            </div>
            <SwapWidget />
          </div>

          {/* Step 2: Choose Your Car */}
          <div className="w-full max-w-md flex flex-col"> {/* Changed: Added flex and flex-col */}
          <div className="text-center mb-8">
            <span className="text-mer-orange font-bold">STEP 2</span>
            <h2 className="text-3xl font-bold">Choose Your Car</h2>
            <p className="text-gray-400 mt-2">Browse our exclusive fleet and book your dream ride.</p>
          </div>
          
          {/* Card container that stretches to match sibling height */}
          <div className="bg-[#fff] rounded-lg overflow-hidden w-full max-w-md flex flex-col flex-grow min-h-[424px]"> {/* Changed: Removed fixed height, added flex-grow */}
            <div className="h-[280px] w-full flex-shrink-0">
              <Image
                src="https://res.cloudinary.com/dqedckeaa/image/upload/v1756843903/photo_2025-08-14_17-00-55_sfmttl.jpg"
                alt="Exotic car ready for rental"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 text-center flex flex-col flex-grow justify-center gap-2">
              <p className="text-gray-500">
                Your journey begins now. Select from our curated collection of supercars.
              </p>
              <Link href="/rentals" className="wallet-adapter-button wallet-adapter-button-trigger flex justify-center">
                Browse Rentals
              </Link>
            </div>
          </div>
        </div>

      </div>
      </section>
    </div>
  );
}