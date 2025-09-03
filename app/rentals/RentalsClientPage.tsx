// app/rentals/RentalsClientPage.tsx
"use client";

import Image from "next/image";
import { Ticker } from "@/components/Ticker";
import { ProductGrid } from "@/components/ProductGrid";

const rentalCategories = [
  {
    title: "Exotic Car Fleet",
    description:
      "From the raw power of a Lamborghini to the timeless elegance of a Rolls-Royce, our fleet is curated for the ultimate driving thrill.",
  },
];

export function RentalsClientPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white font-poppins">
      <div className="relative z-[4] flex w-full flex-col">
        {/* Hero Section */}
        <section className="relative flex h-[500px] w-full items-center justify-center text-center md:h-[600px] mt-16 md:mt-0">
          <Image
            src="https://res.cloudinary.com/dqedckeaa/image/upload/v1756832291/bg_1_b1nbci.webp"
            alt="luxury background"
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            className="brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold drop-shadow-xl md:text-7xl">
              The Ultimate Luxury Experience
            </h1>
            <p className="mx-auto max-w-3xl text-gray-200 md:text-lg">
              $MER isn&apos;t just a token—it&apos;s your all-access pass.
              Holders receive exclusive discounts, priority booking, and access
              to a curated collection of luxury assets. Explore the
              possibilities below.
            </p>
          </div>
        </section>
        {/* Ticker */}
        <div className="z-[19] w-full">
          <Ticker className="relative z-20" />
        </div>
        {/* Main Content */}
        <main className="container mx-auto w-full max-w-7xl px-4 pb-10 pt-4 md:pb-16 md:pt-8">
          <div className="space-y-20 md:space-y-28">
            {rentalCategories.map((category) => (
              <section key={category.title}>
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
                {/* SHOP CONTENT - NOW USES PRODUCT GRID */}
                <ProductGrid />
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}