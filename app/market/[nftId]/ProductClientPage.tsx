// app/market/[nftId]/ProductClientPage.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/solid";

type Product = (typeof products)[0];

interface ProductClientPageProps {
  product: Product;
}

const BuyWidget = ({ product }: { product: Product }) => (

    <button
      className="group relative inline-flex items-center justify-center overflow-visible"
      aria-label="Mint Now"
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
        MINT FOR {product.price} SOL
      </span>
    </button>
);


export function ProductClientPage({ product }: ProductClientPageProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <p className="text-2xl font-bold text-purple-400">
        {product.price} SOL
      </p>
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

  return (
    <>
      <div className="min-h-screen bg-black text-white md:pb-32 lg:pb-12 pt-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Left Column: Images */}
            <div className="w-full lg:w-3/5">
              <div className="flex flex-col gap-4">
                {product.images.map((src, index) => (
                  <div key={index} className="relative w-full">
                    <Image
                      src={src}
                      alt={`${product.name} view ${index + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="rounded-lg"
                      priority={index < 2}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: DESKTOP VIEW ONLY */}
            <div className="hidden lg:block w-full lg:w-2/5 lg:sticky lg:top-24 h-fit">
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
                <div className="pt-4 w-full flex justify-center">
                  <BuyWidget product={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE UI: Sticky Bottom Bar & Drawer */}
      <div className="lg:hidden">
        {/* Sticky Bar */}
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between gap-4 border-t border-neutral-700 bg-neutral-900 p-3 z-[200] pr-8">
          <div>
            <h2 className="font-bold text-white">{product.name}</h2>
            <p className="text-purple-400 font-semibold">
              {product.price} SOL
            </p>
          </div>
          <button
            className="group relative inline-flex items-center justify-center overflow-visible"
          >
            {/* The mask is now controlled by the inline 'style' attribute.
              The previous mask classes have been removed.
            */}
            <div 
              onClick={() => setIsDrawerOpen(true)}
              className="absolute -inset-4 bg-white transition-colors group-hover:bg-zinc-300"
              style={{
                maskImage: "url('/cross-stroke.svg')",
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                // This is the line to change for sizing!
                maskSize: '100% 100%' 
              }}
            ></div>
            
            <span className="relative flex h-10 items-center justify-center px-5 text-white text-sm font-bold tracking-wider uppercase whitespace-nowrap">
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
                <button onClick={() => setIsDrawerOpen(false)} className="p-1 text-white">
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
    </>
  );
}