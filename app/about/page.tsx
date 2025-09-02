"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Ticker } from "@/components/Ticker";
import { NavigationArrows } from "@/components/NavigationArrows";

const crossfadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

const calloutVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

const aboutContent = [
  {
    title: "01 THE UTILITY",
    topText: (
      <>
        <p className="mb-2">
          $MER is a utility token for <strong>Miami Exotic Rents</strong>, enabling exclusive access to:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Exotic car rentals.</li>
          <li>Luxury yacht charters.</li>
          <li>Premium house rentals.</li>
        </ul>
      </>
    ),
    bottomTitle: "How It Works",
    bottomText: (
      <p className="text-left font-poppins leading-tight sm:text-lg">
        Swap SOL for $MER and use it to book rentals with discounts and perks.
      </p>
    ),
    imageSrc: "https://res.cloudinary.com/dqedckeaa/image/upload/v1752732408/about-slide1.1_gbm6vu.webp", // Placeholder until replaced
  },
  {
    title: "02 THE VISION",
    topText: (
        <p>$MER transforms rental experiences, integrating Web3 into luxury lifestyles.</p>
    ),
    bottomTitle: "Future Growth",
    bottomText: (
        <p className="text-left font-poppins leading-tight sm:text-lg">
            Planned expansions include global rental networks and new $MER utilities.
        </p>
    ),
    imageSrc: "https://res.cloudinary.com/dqedckeaa/image/upload/v1752732410/about-slide2_ppgi7a.webp", // Placeholder
  },
  {
    title: "03 MARKET REACH",
    topText: (
      <p>
        $MER aims to tap into the growing Web3 rental market, targeting <strong>1M+ users</strong> by 2026.
      </p>
    ),
    bottomTitle: "Community Impact",
    bottomText: (
        <p className="text-left font-poppins leading-tight sm:text-lg">
            Join a community driving luxury rentals with crypto innovation.
        </p>
    ),
    imageSrc: "https://res.cloudinary.com/dqedckeaa/image/upload/v1752732411/about-slide3_e5br0t.webp", // Placeholder
  },
];

export default function AboutPage() {
  const [subSlide, setSubSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentCallout = aboutContent[subSlide];

  const handleNext = useCallback(() => {
    setDirection(1);
    if (subSlide < aboutContent.length - 1) {
      setSubSlide((prev) => prev + 1);
    }
  }, [subSlide]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    if (subSlide > 0) {
      setSubSlide((prev) => prev - 1);
    }
  }, [subSlide]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-[4] flex min-h-screen w-full flex-col pt-28 pointer-events-none">
        <div className="flex justify-center pulse-scale px-6 pt-4 pb-2 sm:pt-12 sm:pb-4 lg:pb-12 md:pb-6">
          <div className="flex flex-col items-center">
            <h1
              className="w-full text-center font-poppins text-white text-5xl md:text-6xl font-bold"
              data-text="What is $MER?"
            >
              What is $MER?
            </h1>
          </div>
        </div>

        <div className="relative flex-grow pointer-events-none">
          <div className="lg:absolute lg:inset-0 flex h-fit w-full items-start justify-center mt-4 lg:mt-0 px-6 sm:px-0 lg:items-center">
            <div className="flex justify-center lg:justify-end w-full max-w-[850px]">
              <div className="relative w-full max-w-[500px] min-h-[203px] sm:min-h-[207px] pointer-events-auto">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={subSlide}
                    custom={direction}
                    variants={calloutVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                  >
                    <div className="text-black shadow-lg hover-tilt-zoom">
                      <div className="px-8 py-2 bg-mer-orange border-4 border-black rounded-lg -mx-[12px] md:-mx-[16px]">
                        <h2 className="px-4 text-2xl font-bold tracking-wide [text-shadow:2px_2px_0_white] sm:text-3xl font-poppins">
                          {currentCallout.title}
                        </h2>
                      </div>
                      <div className="-mt-[4px] rounded-b-lg border-4 border-black bg-white px-6 py-4">
                        <div className="text-left font-poppins text-regular leading-tight text-lg lg:leading-tight">
                          {currentCallout.topText}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-0 h-full">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={`about-image-${subSlide}`}
                variants={crossfadeVariants}
                custom={direction}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="h-full"
              >
                <div className="relative mx-auto flex h-full max-w-[1100px] items-end">
                  <div className="flex flex-col lg:flex-row h-full w-full items-center justify-end lg:items-end lg:justify-center lg:justify-start">
                    <div className="placeholder-image bg-gray-800 text-white h-full lg:h-[70dvh] max-h-[70dvh] w-auto lg:translate-x-1/3 z-10">Placeholder for Utility Image - 500x833</div>
                    <div className="px-6 sm:px-0 lg:mr-4 mb-20 sm:mb-36 lg:mb-36 lg:ml-10 lg:relative w-full max-w-[500px] lg:max-w-[600px] min-h-[200px] sm:min-h-[160px]">
                      <div className="rounded-lg border-[3px] border-mer-orange bg-black/60 p-5 text-white backdrop-blur-sm shadow-[8px_8px_0_#5b2359] flex flex-col gap-2 pointer-events-auto">
                        <h2 className="text-center font-poppins text-4xl text-white [text-shadow:2px_2px_0_#000]">
                          {currentCallout.bottomTitle}
                        </h2>
                        {currentCallout.bottomText}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[19] w-full">
        <Ticker className="relative z-20" />
      </div>

      <div className="pointer-events-auto">
        <NavigationArrows
          onNext={handleNext}
          onPrev={handlePrev}
          page={subSlide}
          isLastStep={subSlide === aboutContent.length - 1}
          isFirstStep={subSlide === 0}
        />
      </div>
    </div>
  );
}