"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { Ticker } from "@/components/Ticker";
import { NavigationArrows } from "@/components/NavigationArrows";

// Animation Variants
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
    title: "01 THE SLANG",
    topText: (
      <>
        <p className="mb-2">
          In <strong>street slang / pop culture</strong>, a <strong>“bop”</strong> is slang for:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Someone who&apos;s <strong>promiscuous</strong>.</li>
          <li>Someone who <strong>“gets around”</strong> or is seen as overly sexual or attention-seeking.</li>
        </ul>
      </>
    ),
    bottomTitle: "Example & Context",
    bottomText: (
      <p className="text-left font-comic leading-tight sm:text-lg">
        e.g., “Man, I’m tired of these bops, I want a real one.” This usage, similar to <em>thot</em> or <em>hoe</em>, has been around since the <strong>2010s</strong>.
      </p>
    ),
    imageSrc:
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1752732408/about-slide1.1_gbm6vu.webp",
  },
  {
    title: "02 THE STORY",
    topText: (
        <p>Bopcoin didn&apos;t just come outta nowhere — this meme been <strong>boppin&apos; through the culture</strong> for years. It&apos;s been in group chats, screamed in Discords, and now… it&apos;s hitting the blockchain.</p>
    ),
    bottomTitle: "From Meme to Multiverse",
    bottomText: (
        <p className="text-left font-comic leading-tight sm:text-lg">
            So we <strong>bopped so hard</strong>, we turned the chaos into a mf <strong>memecoin</strong> and a whole cartoon — <strong>a living, breathing BOPHOUSE.</strong> This is <strong>$BOPCOIN.</strong>
        </p>
    ),
    imageSrc:
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1752732410/about-slide2_ppgi7a.webp",
  },
  {
    title: "03 VIRAL REACH",
    topText: (
      <p>
        Across <strong>Twitter/X, TikTok, & Instagram</strong>, the <strong>BOP House</strong> has surpassed <strong>1 billion+ combined impressions</strong>, with dozens of videos hitting <strong>1M–10M+ views each</strong>.
      </p>
    ),
    bottomTitle: "Cultural Impact",
    bottomText: (
        <p className="text-left font-comic leading-tight sm:text-lg">
            Our content has been <strong>reposted</strong> by major influencers and crypto personalities, and <strong>remixed</strong> into viral TikTok sounds and reaction edits.
        </p>
    ),
    imageSrc:
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1752732411/about-slide3_e5br0t.webp",
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
        {/* --- Centralized Title Text --- */}
        <div className="flex justify-center pulse-scale px-6 pt-4 pb-2 sm:pt-12 sm:pb-4 lg:pb-12 md:pb-6">
          <div className="flex flex-col items-center">
            <h1
              className="w-full -rotate-3 text-center font-modak text-white text-stroke-smooth text-7xl md:text-8xl"
              data-text="What is Bopcoin?"
            >
              What is Bopcoin?
            </h1>
          </div>
        </div>

        {/* --- Main Content Area --- */}
<div className="relative flex-grow pointer-events-none">
  {/* Text Callout Section (Top Box) */}
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
              <div className=" px-8 py-2 bg-[#ea88ea] border-4 border-black rounded-lg -mx-[12px] md:-mx-[16px]">
                <h2 className="px-4 text-2xl font-bold tracking-wide [text-shadow:2px_2px_0_white] sm:text-3xl font-luckiest">
                  {currentCallout.title}
                </h2>
              </div>
              <div className="-mt-[4px] rounded-b-lg border-4 border-black bg-white px-6 py-4">
                <div className="text-left font-comic text-regular leading-tight text-lg lg:leading-tight">
                  {currentCallout.topText}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </div>

  {/* Image Section (Contains Bottom Box) */}
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
            <Image
              src={aboutContent[subSlide].imageSrc}
              alt={aboutContent[subSlide].title}
              width={500}
              height={833}
              className="h-full lg:h-[70dvh] max-h-[70dvh] w-auto lg:translate-x-1/3 z-10"
              priority
            />
            {/* THIS IS THE UPDATED BOTTOM BOX */}
            <div className="px-6 sm:px-0 lg:mr-4 mb-20 sm:mb-36 lg:mb-36 lg:ml-10 lg:relative w-full max-w-[500px] lg:max-w-[600px] min-h-[200px] sm:min-h-[160px]">
              <div className="rounded-lg border-[3px] border-[#ea88ea] bg-black/60 p-5 text-white backdrop-blur-sm shadow-[8px_8px_0_#5b2359] flex flex-col gap-2 pointer-events-auto">
                <h2 className="text-center -rotate-2 font-modak text-4xl text-white [text-shadow:2px_2px_0_#000]">
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
          // The page prop is used to show/hide arrows
          page={subSlide}
          // isLastStep will be true when subSlide is 2
          isLastStep={subSlide === aboutContent.length - 1}
          // Add a prop to indicate the first step
          isFirstStep={subSlide === 0}
        />
      </div>
    </div>
  );
}

// NOTE: You might need to update the NavigationArrows component
// to accept an `isFirstStep` prop to hide the "back" arrow correctly.