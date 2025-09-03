// app/rentals/[carId]/ProductClientPage.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { BookWidget } from "@/components/BookWidget";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/solid";

type Car = (typeof products)[0];

interface ProductClientPageProps {
  car: Car;
}

export function ProductClientPage({ car }: ProductClientPageProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Animation variants for the drawer
  const drawerVariants = {
    hidden: { y: "100%" },
    visible: { y: "0%" },
    exit: { y: "100%" },
  };

  const MobileDrawerContent = () => (
    <div className="flex flex-col">
      <div>
        <p className="text-lg text-gray-400">{car.brand}</p>
      </div>
      <p className="text-2xl font-bold text-orange-500">
        ${car.price}
        <span className="ml-1 text-sm font-normal text-gray-400">/ day</span>
      </p>
      <div className="border-t border-neutral-800 pt-4">
        <h2 className="mb-3 text-xl font-semibold text-white">Details</h2>
        <ul className="list-disc space-y-1.5 pl-5 text-gray-300">
          {car.details.map((detail, index) => (
            <li key={index} className="text-base">
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-4">
        <BookWidget car={car} />
      </div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-black text-white md:pb-32 lg:pb-12 pt-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Left Column: Images (Unchanged) */}
            <div className="w-full lg:w-3/5">
              <div className="flex flex-col">
                {car.images.map((src, index) => (
                  <div key={index} className="relative w-full">
                    <Image
                      src={src}
                      alt={`${car.name} view ${index + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      objectFit="cover"
                      priority={index < 2}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: DESKTOP VIEW ONLY */}
            <div className="hidden lg:block w-full lg:w-2/5 lg:sticky lg:top-24 h-fit">
              <div className="flex flex-col space-y-4 rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
                <div>
                  <p className="text-lg text-gray-400">{car.brand}</p>
                  <h1 className="text-3xl font-bold md:text-4xl">
                    {car.name}
                  </h1>
                </div>
                <p className="text-2xl font-bold text-orange-500">
                  ${car.price}
                  <span className="ml-1 text-sm font-normal text-gray-400">
                    / day
                  </span>
                </p>
                <div className="border-t border-neutral-800 pt-4">
                  <h2 className="mb-3 text-xl font-semibold">Details</h2>
                  <ul className="list-disc space-y-1.5 pl-5 text-gray-300">
                    {car.details.map((detail, index) => (
                      <li key={index} className="text-base">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <BookWidget car={car} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE UI: Sticky Bottom Bar & Drawer */}
      <div className="lg:hidden">
        {/* Sticky Bar */}
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between gap-4 border-t border-neutral-700 bg-neutral-900 p-3 z-40">
          <div>
            <h2 className="font-bold text-white">{car.name}</h2>
            <p className="text-orange-500 font-semibold">
              ${car.price}{" "}
              <span className="text-sm font-normal text-gray-400">/ day</span>
            </p>
          </div>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 whitespace-nowrap rounded-md bg-mer-orange px-4 py-2 text-base font-semibold text-black"
          >
            Book Now <ChevronUpIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer */}
        <AnimatePresence>
          {isDrawerOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex flex-col bg-black pt-24" // Added pt-24 here
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              <div className="flex-shrink-0 flex items-center justify-between border-b border-neutral-700 bg-neutral-900 p-4">
                <h2 className="text-xl font-bold text-white">{car.name}</h2>
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