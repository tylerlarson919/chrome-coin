"use client"; // This component now needs to be a client component to detect screen size

import { useState, useEffect } from "react";

// A simple hook to determine the current breakpoint based on screen width
const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Tailwind's 'sm' breakpoint
        setBreakpoint("mobile");
      } else if (window.innerWidth < 1024) { // Tailwind's 'lg' breakpoint
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    };

    handleResize(); // Set initial value on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};


export const Shop = () => {
  const breakpoint = useBreakpoint();

  // Determine the number of items to render based on the current breakpoint
  let itemCount: number;
  if (breakpoint === 'desktop') {
    itemCount = 5;
  } else if (breakpoint === 'tablet') {
    itemCount = 3;
  } else { // mobile
    itemCount = 2;
  }

  const cardItems = Array(itemCount).fill(0);

  return (
    <section id="shop" className="py-4 md:py-10 bg-pixel-bg">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col justify-center mb-4 md:mb-6">
          <h2 className="text-3xl font-bold text-zinc-800">THE SHOP</h2>
          <p className="mt-2 md:mt-4 md:text-lg text-zinc-600">
            A new dimension of 8-bit art is rendering. The official Pixel World NFT collection is coming soon, offering unique, verifiable ownership of a piece of our universe.
          </p>
        </div>

        {/* Updated grid classes for the new layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6">
          {cardItems.map((_, index) => (
            // Grid Item Container: Holds both the card and the text below it
            <div key={index}>
              {/* Interactive Card with Hover Effect */}
              <div
                className="group relative bg-white rounded-lg shadow-md p-4 flex items-center justify-center aspect-square border border-zinc-200 overflow-hidden"
              >
                {/* SOON Chip */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  SOON
                </div>

                {/* Floating Diamond */}
                <div className="animate-float text-6xl sm:text-7xl">💎</div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl md:text-xl font-bold text-zinc-800 tracking-wider">
                    COMING SOON
                  </span>
                </div>
              </div>

              {/* Floating Text Below the Card */}
              <div className="mt-4">
                <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                  Pixel World NFT's
                </p>
                <h3 className="mt-1 text-base font-bold text-zinc-800">
                  COMING SOON
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};