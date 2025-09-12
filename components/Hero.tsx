// components/Hero.tsx
"use client";

import { Image } from "@heroui/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export const Hero = () => {
  const mintAddress = process.env.NEXT_PUBLIC_PIXEL_MINT_ADDRESS || "";
  const photonUrl = `https://www.dextools.io/app/en/solana/pair-explorer/${mintAddress}`;
  const xlink = `https://x.com/YourTwitterHandle`;

  const shopUrl = "/market";

  return (
    <section className="relative w-full h-[80vh] md:h-[70vh] bg-zinc-800 flex justify-center overflow-hidden md:items-center">
      
      <video
        src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757693995/chrome-bg_acgksq.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/60 md:to-black/0" />
                {/* Center: Absolutely positioned logo */}
                <div className="pointer-events-none absolute top-4 sm:top-8 left-1/2 -translate-x-1/2">
                  <Link href="/" aria-label="Home" className="pointer-events-auto">
                    <Image
                      src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757465008/ch-scroll_gobxyz.svg"
                      alt="Logo"
                      width={400}
                      height={40}
                      className="h-auto w-[200px] min-w-[200px] sm:w-[240px] sm:min-w-[240px] invert"
                    />
                  </Link>
                </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center gap-2 px-8 pb-14 pt-32 text-center justify-center md:py-0 pointer-events-none">
        <div className="flex flex-col items-center pb-2 w-full">
          <Image
            src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757465008/ch-scroll_gobxyz.svg"
            alt="$CHROME Logo"
            width={900}
            height={90}
            className="w-full max-w-[500px] h-auto object-contain invert"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:gap-11 w-auto sm:flex-row sm:items-center pointer-events-auto">
          <div className="text-center">
          <Link
            href={shopUrl}
            className="group relative inline-flex h-10 items-center justify-center overflow-visible"
            aria-label="Shop $CHROME"
          >
            <div 
              className="absolute -inset-7 bg-white transition-colors group-hover:bg-zinc-300"
              style={{
                maskImage: "url('/cross-stroke.svg')",
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                // This is the line to change for sizing!
                maskSize: '100% 100%' 
              }}
            ></div>
            
            <span className="relative flex items-center justify-center px-2 text-white text-sm font-bold tracking-wider uppercase">
              SHOP $CHROME
            </span>
          </Link>
        </div>

          <div className="flex gap-6 w-auto">
            <div className="text-center">
              <Link
                href={photonUrl}
                className="group relative inline-flex h-10 w-10 items-center justify-center overflow-visible"
                aria-label="View on DEXTools"
              >
                <div 
                  className="absolute -inset-2 bg-white transition-colors group-hover:bg-zinc-300"
                  style={{
                    maskImage: "url('/cross-stroke-3.svg')",
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    // This is the line to change for sizing!
                    maskSize: '100% 100%' 
                  }}
                ></div>
                <Image
                    src="/dextools.svg"
                    alt="DEXTools Logo"
                    width={20}
                    height={20}
                    className="relative"
                  />
              </Link>
            </div>
            <div className="text-center">
              <Link
                href={xlink}
                className="group relative inline-flex h-10 w-10 items-center justify-center overflow-visible"
                aria-label="View on X"
              >
                <div 
                  className="absolute -inset-2 bg-white transition-colors group-hover:bg-zinc-300"
                  style={{
                    maskImage: "url('/cross-stroke-3.svg')",
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    // This is the line to change for sizing!
                    maskSize: '100% 100%' 
                  }}
                ></div>
                <FaXTwitter className="relative size-[20px] text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};