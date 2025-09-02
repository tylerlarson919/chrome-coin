// app/page.tsx
"use client";
import { useState, useCallback } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { Ticker } from "@/components/Ticker";
import { HomeSlide } from "@/components/slides/HomeSlide";
import { BophouseSlide } from "@/components/slides/BophouseSlide";
import { GiveawaySlide } from "@/components/slides/GiveawaySlide";
import { NavigationArrows } from "@/components/NavigationArrows";

const titleVariants: Variants = {
  hidden: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.17,
    },
  }),
};
const imageVariants: Variants = {
  hidden: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 250, damping: 30 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.17 },
  }),
};

// 1. NEW: Add these variants for the cross-fade effect
const crossfadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

const slideTitles = [
  {
    key: "home",
    alt: "BOPCOIN",
  },
  {
    key: "giveaway",
    alt: "10,000 Creator Giveaway",
  },
  {
    key: "bophouse",
    alt: "The Bophouse",
  },
];


export default function HomePage() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

   // 3. WRAP navigation handlers in useCallback
    // REPLACE THE EXISTING handleNext AND handlePrev
  const handleNext = useCallback(() => {
    if (isInitialLoad) setIsInitialLoad(false);
    setDirection(1);
    setPage((prevPage) => (prevPage + 1) % slideTitles.length);
  }, [isInitialLoad]);

  const handlePrev = useCallback(() => {
    if (isInitialLoad) setIsInitialLoad(false);
    setDirection(-1);
    setPage((prevPage) => (prevPage - 1 + slideTitles.length) % slideTitles.length);
  }, [isInitialLoad]);
    const isLastStep = false;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-[4] flex min-h-screen w-full flex-col pt-28 pointer-events-none">
        {/* --- Centralized Title Text --- */}
        <div className="flex justify-center pulse-scale px-6 pt-4 pb-2 sm:pt-12 sm:pb-4 lg:pb-12 md:pb-6">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={slideTitles[page].key}
              variants={titleVariants}
              custom={direction}
              initial={isInitialLoad ? false : "hidden"}
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col items-center">
                <h1
                  className={`w-full -rotate-3 text-center font-modak text-white text-stroke-smooth ${
                    page === 0
                      ? "-mt-2 sm:-mt-6 lg:mt-0 lg:-mb-6 text-[5rem] md:text-9xl"
                      : "text-7xl md:text-8xl"
                  }`}
                  data-text={slideTitles[page].alt}
                >
                  {slideTitles[page].alt}
                </h1>

                {/* Conditionally render the subtitle for the last slide */}
                {page === 1 && (
                  <h2 className="mt-2 -rotate-3 text-center font-comic text-xl tracking-wide text-white lg:text-2xl [text-shadow:0_0_4px_black,0_0_4px_black,0_0_4px_black,0_0_4px_black]">
                    💸 Calling all meme lords and content creators! 💸
                  </h2>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide content container */}
        <div className="relative flex-grow">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            {page === 0 && <HomeSlide key="home" direction={direction} />}
            {page === 1 && <GiveawaySlide key="giveaway" direction={direction} />}
            {page === 2 && <BophouseSlide key="bophouse" direction={direction} />}
          </AnimatePresence>
        </div>

        {/* 2. REFACTORED: Unified slide images section */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={page}
            variants={imageVariants}
            custom={direction}
            initial={isInitialLoad ? false : "hidden"}
            animate="visible"
            exit="exit"
            className="pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-0 h-full"
          >
            <div className="relative mx-auto flex h-full max-w-[1100px] items-end">
              {page === 0 && (
                <div className="flex h-full w-full items-end justify-center lg:justify-start">
                  <Image
                    src="https://res.cloudinary.com/dqedckeaa/image/upload/v1752730248/bop-girls-transparent_mwxrt3.webp"
                    alt="Home Characters"
                    width={650}
                    height={300}
                    className="w-screen h-auto md:w-auto md:h-full md:max-h-[47vh] md:translate-x-[50px]"
                  />
                </div>
              )}
              {page === 1 && (
                <div className="flex h-full w-full items-end justify-center lg:justify-end -translate-y-[10%] lg:translate-y-0 lg:-translate-x-[8%]">
                  <Image
                    src="https://res.cloudinary.com/dqedckeaa/image/upload/ar_1:1,c_crop,g_north/v1752732410/about-slide2_ppgi7a.webp"
                    alt="Giveaway Character"
                    width={700}
                    height={700}
                    className="w-auto h-full max-h-[44vh]"
                  />
                </div>
              )}
              {page === 2 && (
                <div className="flex h-full w-full items-end justify-center lg:justify-start -translate-y-[10%] lg:translate-y-0">
                  <Image
                    src="https://res.cloudinary.com/dqedckeaa/image/upload/v1752730248/bop-girls-transparent_mwxrt3.webp"
                    alt="Bophouse Characters"
                    width={700}
                    height={300}
                    className="h-auto w-screen max-w-[600px] md:w-[65vw] lg:max-w-[650px]"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="pointer-events-auto">
        <NavigationArrows
          onNext={handleNext}
          onPrev={handlePrev}
          page={page}
          isLastStep={isLastStep}
        />
      </div>
            <div className="absolute inset-x-0 bottom-0 w-full pointer-events-none z-[19]">
        <Ticker className="relative z-20"/>          
      </div>
    </div>
  );
}