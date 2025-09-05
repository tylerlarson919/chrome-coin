"use client";

import { Image } from "@heroui/image";
import { FaXTwitter } from "react-icons/fa6";

export const Hero = () => {
  const mintAddress = process.env.NEXT_PUBLIC_PIXEL_MINT_ADDRESS || "";
  const photonUrl = `https://www.dextools.io/app/en/solana/pair-explorer/${mintAddress}`;
  const xlink = `https://www.dextools.io/app/en/solana/pair-explorer/${mintAddress}`;

  const shopSectionId = "#how-to-buy"; 

  // Reusable class strings for the pixelated buttons
  const primaryButtonClasses = "h-14 px-8 flex items-center justify-center text-white font-bold tracking-wider border-4 border-black shadow-[4px_4px_0px_#000000] bg-pixel-green hover:bg-green-600 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-150";
  const secondaryButtonClasses = "h-14 px-4 flex items-center justify-center text-white font-bold tracking-wider border-4 border-black shadow-[4px_4px_0px_#000000] bg-zinc-700 hover:bg-zinc-600 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-150";

  return (
    <section className="relative w-full h-[80vh] md:h-[70vh] bg-zinc-800 flex justify-center overflow-hidden md:items-end">
      {/* Background video */}
      <video
        src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757031116/-8652648916557767945_kcfia3.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/60 md:to-black/0" />

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between gap-6 px-8 pb-14 pt-32 text-center md:h-auto md:w-auto md:justify-center md:p-0 md:pb-24">
        
        {/* Top Content (Logo & Subtitle) */}
        <div className="flex flex-col items-center">
            <Image
              src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757019941/px-white_2x_juk2c6.png"
              alt="Pixel World Logo"
              width={600}
              height={60}
              className="w-full max-w-[600px] h-auto object-contain"
            />
        </div>

        {/* Bottom Content (Buttons) */}
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          {/* Primary CTA Button (No changes) */}
          <a
            href={shopSectionId}
            className={`w-full sm:w-auto ${primaryButtonClasses}`}
          >
            Buy $PIXEL
          </a>

          {/* NEW: Wrapper for the two icon buttons */}
          <div className="flex w-full gap-4 sm:w-auto">
            {/* DEXTools Button */}
            <a
              href={photonUrl}
              target="_blank"
              rel="noopener noreferrer"
              // CHANGE: Use flex-1 for mobile width, keep sm:w-auto for desktop
              className={`flex-1 sm:w-auto flex items-center justify-center ${secondaryButtonClasses}`}
              aria-label="View on DEXTools"
            >
              <Image
                src="/dextools.svg"
                alt="DEXTools Logo"
                width={28}
                height={28}
              />
            </a>

            {/* Twitter Button */}
            <a
              href={xlink}
              target="_blank"
              rel="noopener noreferrer"
              // CHANGE: Use flex-1 for mobile width, keep sm:w-auto for desktop
              className={`flex-1 sm:w-auto flex items-center justify-center ${secondaryButtonClasses}`}
              aria-label="View on X/Twitter"
            >
              <FaXTwitter className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};