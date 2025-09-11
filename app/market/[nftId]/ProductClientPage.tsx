"use client";

import { products } from "@/data/products";
import { ModelViewer } from "@/components/ModelViewer";
import Link from "next/link";
import Image from "next/image";

// Update the type to include the optional modelUrl
type Product = (typeof products)[0] & { modelUrl?: string };

interface ProductClientPageProps {
  product: Product;
}

const BuyWidget = ({ product }: { product: Product }) => (
  <button
    className="group relative inline-flex items-center justify-center overflow-visible"
    aria-label="Mint Now"
  >
    <div
      className="absolute -inset-4 bg-white transition-colors group-hover:bg-zinc-300"
      style={{
        maskImage: "url('/cross-stroke.svg')",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "100% 100%",
      }}
    ></div>
    <span className="relative flex h-10 items-center justify-center px-2 text-white text-sm font-bold tracking-wider uppercase">
      MINT FOR {product.price} SOL
    </span>
  </button>
);

export function ProductClientPage({ product }: ProductClientPageProps) {
  // This component now renders the 3D model for direct interaction.
  const NFTDisplay = () => {
    return product.modelUrl ? (
      <div className="relative h-[60vh] w-full rounded-lg border border-neutral-800 bg-zinc-900/50">
        <ModelViewer product={product} />
        <div className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
          Click to interact
        </div>
      </div>
    ) : null;
  };

  return (
    <div className="min-h-screen bg-black text-white pb-16 lg:pb-12 pt-24 sm:pt-32">
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
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 lg:gap-12 lg:flex-row">
          {/* Left Column: NFT Display */}
          <div className="w-full lg:w-3/5">
            <NFTDisplay />
          </div>

          {/* Right Column: Product Details (Visible on all screen sizes) */}
          <div className="w-full h-full lg:sticky lg:top-24 lg:w-2/5">
            <div className="flex flex-col space-y-4 rounded-lg p-6 backdrop-blur-sm h-full">
              <div>
                <p className="text-lg text-gray-400">{product.collection}</p>
                <h1 className="text-3xl font-bold md:text-4xl">
                  {product.name}
                </h1>
              </div>
              <p className="text-2xl font-bold text-purple-400">
                {product.price} SOL
              </p>
              <div className="border-t border-neutral-800 pt-4">
                <h2 className="mb-3 text-xl font-semibold">Description</h2>
                <p className="text-gray-300">{product.description}</p>
              </div>
              <div className="border-t border-neutral-800 pt-4">
                <h2 className="mb-3 text-xl font-semibold">Details</h2>
                <ul className="list-disc space-y-1.5 pl-5 text-gray-300">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-base">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full justify-center pt-4">
                <BuyWidget product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}