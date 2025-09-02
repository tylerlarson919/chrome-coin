"use client";
import Image from "next/image";
import { Ticker } from "@/components/Ticker";
// No longer need framer-motion or navigation for this simpler design
// import { useState, useCallback, useRef, useEffect } from "react";
// import { AnimatePresence, motion, Variants } from "framer-motion";
// import { NavigationArrows } from "@/components/NavigationArrows";

// Removed crossfadeVariants and calloutVariants as sliders are gone

const aboutContent = [
  {
    title: "THE UTILITY",
    description: (
      <>
        <p className="mb-4">
          $MER is a utility token for <strong>Miami Exotic Rents</strong>, enabling exclusive access to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
          <li>Exotic car rentals.</li>
          <li>Luxury yacht charters.</li>
          <li>Premium house rentals.</li>
        </ul>
      </>
    ),
    imageSrc: "https://res.cloudinary.com/dqedckeaa/image/upload/v1756825797/MER-Lambo-exchange_yzyvin.jpg",
    imageAlt: "Luxury car exchange",
  },
  {
    title: "THE VISION",
    description: (
      <>
        <p className="mb-4">
          $MER transforms rental experiences, integrating Web3 into luxury lifestyles.
        </p>
        <p className="text-lg leading-relaxed">
          Planned expansions include global rental networks and new $MER utilities.
        </p>
      </>
    ),
    imageSrc: "https://res.cloudinary.com/dqedckeaa/image/upload/v1756825797/MER-night-ride_ijrgnv.jpg",
    imageAlt: "Night ride with exotic car",
  },
  {
    title: "MARKET REACH",
    description: (
      <>
        <p className="mb-4">
          $MER aims to tap into the growing Web3 rental market, targeting <strong>1M+ users</strong> by 2026.
        </p>
        <p className="text-lg leading-relaxed">
          Join a community driving luxury rentals with crypto innovation.
        </p>
      </>
    ),
    imageSrc: "https://res.cloudinary.com/dqedckeaa/image/upload/v1756829414/MER-peaceful-crib_ipkb9p.jpg",
    imageAlt: "Peaceful luxury house",
  },
];

export default function AboutPage() {
  // Removed state and handlers for slides

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      {/* Main content wrapper with padding */}
      <div className="relative z-[4] flex w-full flex-col pt-28 pb-16">

        {/* Hero Section - Title and Main Image */}
        <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden mb-16">
          <Image
            src="https://res.cloudinary.com/dqedckeaa/image/upload/v1756825797/MER-Parking-Garage_w7nxkt.jpg"
            alt="What is $MER?"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="brightness-[0.7]" // Slightly darken the image
          />
          <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay for readability */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="font-poppins text-white text-5xl md:text-6xl font-bold text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)]"
              data-text="What is $MER?" // For potential future styling
            >
              What is $MER?
            </h1>
          </div>
        </div>

        {/* About Content Sections */}
        <main className="container mx-auto px-4 w-full max-w-6xl">
          {aboutContent.map((section, index) => (
            <div
              key={section.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 mb-24 md:mb-32`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2 text-left">
                <h2 className="font-poppins text-4xl md:text-5xl font-bold text-mer-orange mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                  {`0${index + 1} ${section.title}`}
                </h2>
                <div className="font-poppins text-gray-200 text-xl md:text-2xl leading-relaxed">
                  {section.description}
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-[12px_12px_0_#ff6600] border-4 border-mer-orange">
                <Image
                  src={section.imageSrc}
                  alt={section.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* Ticker at the bottom */}
      <div className="absolute inset-x-0 bottom-0 z-[19] w-full">
        <Ticker className="relative z-20" />
      </div>

      {/* Navigation Arrows removed */}
    </div>
  );
}