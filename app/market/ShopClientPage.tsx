// app/market/ShopClientPage.tsx
"use client";

import Image from "next/image";
import { Ticker } from "@/components/Ticker";
import { ShopProductGrid } from "@/components/ShopProductGrid";
import { HeroCarousel } from "@/components/HeroCarousel"; // 1. Import the new component
import Link from "next/link";

const shopCategories = [
  {
    title: "Genesis Collection",
    description:
      "The inaugural NFT drop from $CHROME. A curated selection of 48 rare, high-detail digital assets that define the intersection of luxury streetwear and Web3.",
  },
];

export function ShopClientPage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="relative z-[4] flex w-full flex-col">
        {/* Hero Section */}
        {/* 2. Adjusted layout to be a flex column and provide vertical space */}
        <section className="relative flex w-full flex-col items-center justify-center pt-28 pb-12 text-center md:min-h-[800px] overflow-hidden">
          <video
            src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757695786/bgggmp4_yheg5u.webm"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                {/* Center: Absolutely positioned logo */}
                <div className="pointer-events-none absolute top-4 sm:top-8 left-1/2 -translate-x-1/2">
                  <Link href="/" aria-label="Home" className="pointer-events-auto">
                    <Image
                      src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757700304/chrome-coin-logo_nfnanc.svg"
                      alt="Logo"
                      width={400}
                      height={40}
                      className="h-auto w-[200px] min-w-[200px] sm:w-[240px] sm:min-w-[240px] invert"
                    />
                  </Link>
                </div>
          <div className="relative z-10 container mx-auto flex flex-col items-center px-4 sm:mb-60">
            {/* 3. Kept the title and subtitle */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-300 mt-2">
              NFTs
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-gray-200 md:text-lg">
              YOUR ALL ACCESS PASS
            </p>
            
            {/* 4. Added the new HeroCarousel component */}
            
          </div>
        </section>

        {/* Ticker */}
        <div className="z-[19] w-full">
          <Ticker className="relative z-20" />
        </div>

        {/* Main Content */}
        <main className="w-full pb-16 pt-4 md:pb-24 md:pt-8">
          <div className="space-y-20 md:space-y-28">
            {shopCategories.map((category) => (
              <section key={category.title}>
                <div className="container mx-auto max-w-7xl px-4">
                  <div className="mb-8 flex flex-col items-start gap-6 md:mb-10 md:flex-row md:items-center md:gap-8">
                    <div>
                      <h3 className="text-left text-3xl font-bold md:text-4xl">
                        {category.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-left text-gray-400 md:text-lg">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
                <ShopProductGrid />
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}