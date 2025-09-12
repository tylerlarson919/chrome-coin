// components/Shop.tsx
"use client";

import Link from "next/link";
import { ProductGrid } from "./ProductGrid";

export const Shop = () => {
  return (
    <section id="shop" className="relative overflow-hidden pb-12 md:pb-20">
      <div className="mx-auto pt-12 md:pt-20">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-purple-400 font-bold tracking-widest text-lg md:text-xl">
            48 RARE NFTs
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-300 mt-2">
            NFTs
          </h2>
        </div>

        {/* Product Grid Component */}
        <ProductGrid />

<div className="mt-12 text-center">
  <Link
    href="/market"
    className="group relative inline-flex items-center justify-center overflow-visible"
    aria-label="View Full Collection"
  >
    {/* The mask is now controlled by the inline 'style' attribute.
      The previous mask classes have been removed.
    */}
    <div 
      className="absolute -inset-4 bg-white transition-colors group-hover:bg-zinc-300"
      style={{
        maskImage: "url('/cross-stroke.svg')",
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        // This is the line to change for sizing!
        maskSize: '100% 100%' 
      }}
    ></div>
    
    <span className="relative flex h-10 items-center justify-center px-2 text-white text-sm font-bold tracking-wider uppercase">
      View Full Collection
    </span>
  </Link>
</div>
      </div>
    </section>
  );
};