"use client";

import Image from "next/image"; // Import the Image component

export const Shop = () => {
  return (
    <section
      id="shop"
      className="relative pb-12 md:pb-20 overflow-hidden"
    >
      <div className="max-w-8xl px-4 md:px-12 pt-12 md:pt-20">
        {/* Main layout container */}
        {/* CHANGE #1: Changed md:items-stretch to md:items-start to prevent columns from growing too tall */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-end justify-center gap-10 md:gap-16">
          {/* Left Side: Text Content */}
          <div className="flex-1 text-center md:text-left">
  <h2 className="text-4xl lg:text-5xl font-bold text-zinc-200 tracking-tight">
    THE COLLECTION IS RENDERING
  </h2>
  <p className="mt-4 md:text-lg text-zinc-400 max-w-xl mx-auto md:mx-0">
    We will be releasing 200 NFTs to the Solana Blockchain.
  </p>

  {/* CHANGE: Classes updated to correctly handle mobile spacing */}
  <div className="mt-8 mx-auto md:mx-0 w-full max-w-sm lg:max-w-xl relative border-4 border-[#72408a] rounded-xl overflow-hidden">
    <video
      src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757031113/-6403127588060313866_jkuyuo.webm"
      autoPlay
      loop
      muted
      playsInline
      // CHANGE: Width is now handled by the parent container
      className="w-full md:h-full md:object-cover"
    />
    {/* Lock Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
      <Image
        src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757109618/lock_1_lfxkud.png"
        alt="Locked NFT"
        width={100}
        height={100}
        className="w-24 h-24 md:w-32 md:h-32 object-contain mb-2"
      />
      <p className="text-white text-lg md:text-xl font-bold mt-2">
        Sneak Peek NFT
      </p>
    </div>
  </div>
</div>

          {/* Right Side: Main Video */}
          <div className="flex-1 flex justify-center md:justify-end">
            {/* CHANGE #2: Removed md:h-full and re-added width constraints to control the square's size */}
            <div className="relative w-full max-w-sm lg:max-w-xl aspect-square border-4 border-[#72408a] rounded-xl overflow-hidden">
              <video
                src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757102714/4080777719242116802_1_ckcfj3.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Lock Overlay (without text) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
                <Image
                  src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757109618/lock_1_lfxkud.png"
                  alt="Locked NFT"
                  width={100}
                  height={100}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};