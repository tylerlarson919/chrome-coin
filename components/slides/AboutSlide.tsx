// FILE: app/slides/AboutSlide.tsx

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants, calloutVariants } from "./slideVariants";

interface AboutSlideProps {
  direction: number;
  subSlideIndex: number;
}

// 1. UPDATED: Added imageSrc to each object and exported the array
export const aboutContent = [
  {
    title: "01 CULTURE ORIGINS",
    text: "It all started in the depths of internet culture, where 'bop' became more than just a word - it became a lifestyle. The community rallied around the chaos, the randomness, and the pure energy that only a true bop could bring.",
    imageSrc:
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1752732408/about-slide1.1_gbm6vu.webp",
  },
  {
    title: "02 MEME TO BLOCKCHAIN",
    text: "What started as viral memes evolved into something bigger. The community demanded a token that represented their chaotic energy, and $BOPCOIN was born on the Solana blockchain - fast, efficient, and ready to bop.",
    imageSrc:
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1752732410/about-slide2_ppgi7a.webp",
  },
  {
    title: "03 THE CARTOON UNIVERSE",
    text: "But we didn't stop there. $BOPCOIN transcended into BOPHOUSE - a 5-episode animated series that brings the meme to life. Characters, storylines, and pure bop energy in animated form.",
    imageSrc:
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1752732411/about-slide3_e5br0t.webp",
  },
];

// This is kept for the parent component's navigation logic
export const aboutCallouts = aboutContent.map(({ title, text }) => ({
  title,
  text,
}));

export const AboutSlide = ({
  direction,
  subSlideIndex = 0,
}: AboutSlideProps) => {
  const currentCallout = aboutContent[subSlideIndex];

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      // 2. UPDATED: Simplified layout to center the callout card, fixing mobile overflow
      className="lg:absolute lg:inset-0 flex h-fit w-full items-start justify-center mt-4 lg:mt-0 px-6 sm:px-0 lg:items-center"
    >
      <div className="flex justify-center lg:justify-end w-full max-w-[850px]">
        {/* Callout section */}
        <div className="relative w-full max-w-[500px] min-h-[283px] sm:min-h-[207px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={subSlideIndex}
              custom={direction}
              variants={calloutVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              // 3. UPDATED: Removed transform class that caused mobile layout issues
            >
              <div className="text-black shadow-lg hover-tilt-zoom ">
                <div className="px-8 py-2 bg-[#ea88ea] border-4 border-black rounded-lg -mx-[12px] md:-mx-[16px]">
                  <h2 className="px-4 text-2xl font-bold tracking-wide [text-shadow:2px_2px_0_white] sm:text-3xl font-luckiest">
                    {currentCallout.title}
                  </h2>
                </div>
                <div className="-mt-[4px] rounded-b-lg border-4 border-black bg-white px-6 py-4">
                  <p className="text-left font-comic text-regular leading-tight text-lg lg:leading-tight">
                    {currentCallout.text}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* 4. REMOVED: The Image component and its container are no longer here */}
    </motion.div>
  );
};