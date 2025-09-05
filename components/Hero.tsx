"use client";

import { Image } from "@heroui/image";

export const Hero = () => {
  const mintAddress = process.env.NEXT_PUBLIC_PIXEL_MINT_ADDRESS || "";
  const photonUrl = `https://photon-sol.tinyastro.io/en/lp/${mintAddress}`;
  
  // The ID of your shop/swap section. Make sure it matches.
  const shopSectionId = "#how-to-buy"; 

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] bg-zinc-800 flex justify-center overflow-hidden md:items-end">
      {/* Background video */}
      <video
        src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757031116/-8652648916557767945_kcfia3.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/60 md:to-black/0" />

      {/* Content Container - Modified for new mobile layout */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between gap-4 px-8 py-14 text-center md:h-auto md:w-auto md:justify-center md:p-0 md:pb-24">
        
        {/* Top Content (Logo & Subtitle) */}
        <div className="flex flex-col items-center">
            <Image
              src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757019941/px-white_2x_juk2c6.png"
              alt="Pixel World Logo"
              width={600}
              height={60}
              className="w-full max-w-[600px] h-auto object-contain"
            />
            <p className="sm:mt-2 text-lg md:text-xl text-white/90 font-semibold drop-shadow-md">
              Build our universe, one block at a time.
            </p>
        </div>

        {/* Bottom Content (Buttons) */}
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          
          {/* Primary CTA Button */}
          <a
            href={shopSectionId}
            className="w-full sm:w-auto tracking-wider font-montserrat text-white font-bold bg-pixel-green py-3 px-8 rounded-md hover:bg-opacity-80 active:scale-95 transition-all duration-150 text-center"
          >
            Buy $PIXEL
          </a>

          {/* Secondary CTA Button */}
          <a
            href={photonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto tracking-wider font-montserrat text-white font-bold bg-transparent border-2 border-white/80 py-3 px-8 rounded-md hover:bg-white/10 active:scale-95 transition-all duration-150 text-center backdrop-blur-sm"
          >
            View Chart
          </a>
        </div>
      </div>
    </section>
  );
};