"use client";

import Image from "next/image";
import { ClaimNft } from "./ClaimNft";

export const Shop = () => {
  return (
    <section id="shop" className="relative pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 md:px-12 pt-12 md:pt-20">
        
        {/* Main layout container
          - Default: Single-column grid for mobile stacking.
          - Desktop ('md:'): 2x2 grid.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* --- Block 1: Main Video (Square) --- */}
          {/* On Mobile: 'order-1' places it at the top. */}
          {/* On Desktop: It naturally flows to the bottom-right cell. */}
          <div className="order-1 md:col-start-2 md:row-start-2">
             <div className="mx-auto relative w-full max-w-xl aspect-square border-4 border-transparent rounded-xl bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-400 [mask-composite:exclude_padding] [mask:linear-gradient(white_0_0)] overflow-hidden">
              <video
                src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757102714/4080777719242116802_1_ckcfj3.webm"
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
                <Image
                  src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757109618/lock_1_lfxkud.png"
                  alt="Locked NFT" width={100} height={100}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
            </div>
          </div>

          {/* --- Block 2: Text Content --- */}
          {/* On Mobile: 'order-2' places it below the main video. */}
          {/* On Desktop: It naturally flows to the top-left cell. */}
          <div className="order-1 md:order-none text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-200 tracking-tight">
              THE COLLECTION IS RENDERING
            </h2>
            <p className="mt-4 md:text-lg text-zinc-400 max-w-xl mx-auto md:mx-0">
              We will be releasing 200 NFTs on the Solana Blockchain soon.
            </p>
          </div>

          {/* --- Block 3: Claim Component --- */}
          {/* On Mobile: 'order-3' places it below the text. */}
          {/* On Desktop: It naturally flows to the top-right cell. This container aligns it right. */}
          <div className="order-2 md:order-none w-full flex flex-col items-center md:items-end">
            <ClaimNft />
          </div>
          
          {/* --- Block 4: Sneak Peek Video --- */}
          {/* On Mobile: 'order-4' places it at the bottom. */}
          {/* On Desktop: It naturally flows to the bottom-left cell. */}
          <div className="order-4 md:order-none">
            <div className="mx-auto w-full max-w-xl relative aspect-square border-4 border-transparent rounded-xl bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-400 [mask-composite:exclude_padding] [mask:linear-gradient(white_0_0)] overflow-hidden">
              <video
                src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757031113/-6403127588060313866_jkuyuo.webm"
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
                <Image
                  src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757109618/lock_1_lfxkud.png"
                  alt="Locked NFT" width={100} height={100}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain mb-2"
                />
                <p className="text-white text-lg md:text-xl font-bold mt-2">
                  Sneak Peek NFT
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};