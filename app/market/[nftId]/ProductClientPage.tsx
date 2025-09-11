"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ModelViewer } from "@/components/ModelViewer";

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // State for 3D zoom modal has been removed.

  const drawerVariants = {
    hidden: { y: "100%" },
    visible: { y: "0%" },
    exit: { y: "100%" },
  };

  const MobileDrawerContent = () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-lg text-gray-400">{product.artist}</p>
      </div>
      <p className="text-2xl font-bold text-purple-400">{product.price} SOL</p>
      <div className="border-t border-neutral-800 pt-4">
        <h2 className="mb-3 text-xl font-semibold text-white">Details</h2>
        <ul className="list-disc space-y-1.5 pl-5 text-gray-300">
          {product.details.map((detail, index) => (
            <li key={index} className="text-base">
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-neutral-800 pt-4">
        <h2 className="mb-3 text-xl font-semibold text-white">Description</h2>
        <p className="text-gray-300">{product.description}</p>
      </div>
      <div className="pt-4 w-full flex justify-start pl-4">
        <BuyWidget product={product} />
      </div>
    </div>
  );

  // This component now renders the 3D model for direct interaction without a lightbox.
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
    <>
      <div className="min-h-screen bg-black text-white md:pb-32 lg:pb-12 pt-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Left Column: NFT Display */}
            <div className="w-full lg:w-3/5">
              <NFTDisplay />
            </div>

            {/* Right Column: DESKTOP VIEW ONLY */}
            <div className="hidden h-fit lg:sticky lg:top-24 lg:block lg:w-2/5">
              <div className="flex flex-col space-y-4 rounded-lg border border-neutral-800 bg-zinc-900/80 p-6 backdrop-blur-sm">
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

      <div className="lg:hidden">
        {/* Sticky Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-[200] flex items-center justify-between gap-4 border-t border-neutral-700 bg-neutral-900 p-3 pr-8">
          <div>
            <h2 className="font-bold text-white">{product.name}</h2>
            <p className="font-semibold text-purple-400">
              {product.price} SOL
            </p>
          </div>
          <button onClick={() => setIsDrawerOpen(true)} className="group relative inline-flex items-center justify-center overflow-visible">
            <div
              className="absolute -inset-4 bg-white transition-colors group-hover:bg-zinc-300"
              style={{
                maskImage: "url('/cross-stroke.svg')",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "100% 100%",
              }}
            ></div>

            <span className="relative flex h-10 items-center justify-center whitespace-nowrap px-5 text-sm font-bold uppercase tracking-wider text-white">
              MINT NOW <ChevronUpIcon className="h-5 w-5" />
            </span>
          </button>
        </div>

        {/* Drawer */}
        <AnimatePresence>
          {isDrawerOpen && (
            <motion.div
              className="fixed inset-0 z-[199] flex flex-col bg-black"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              <div className="flex-shrink-0 flex items-center justify-between border-b border-neutral-700 bg-neutral-900 p-4">
                <h2 className="text-xl font-bold text-white">{product.name}</h2>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1 text-white"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-grow overflow-y-auto p-6">
                <MobileDrawerContent />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3D MODEL ZOOM MODAL has been removed. */}
    </>
  );
}