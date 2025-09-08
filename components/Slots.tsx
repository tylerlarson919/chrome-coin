"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slotImages = [
  "https://res.cloudinary.com/dqedckeaa/image/upload/v1757009987/Christopher_jlwbyh.jpg",
  "https://res.cloudinary.com/dqedckeaa/image/upload/v1757009987/Anna_pxmf81.jpg",
  "https://res.cloudinary.com/dqedckeaa/image/upload/v1757009987/Alex_erccfc.jpg",
  "https://res.cloudinary.com/dqedckeaa/image/upload/v1757009986/Zephyr_mnfquu.jpg",
];

const lockImageUrl =
  "https://res.cloudinary.com/dqedckeaa/image/upload/v1757281521/DEX_PAID_ivgczy.png";

interface SlotsProps {
  isClaimed?: boolean;
}

export const Slots = ({ isClaimed = false }: SlotsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slotImages.length);
    }, 200);
    return () => clearInterval(cycleInterval);
  }, []);

  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-xl border-4 border-transparent bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-400 [mask-composite:exclude_padding] [mask:linear-gradient(white_0_0)] md:h-[28rem] md:w-[28rem] md:aspect-auto">
      <Image
        src={slotImages[currentIndex]}
        alt="Pixel character"
        layout="fill"
        objectFit="cover"
        key={currentIndex}
        className="transition-opacity duration-100"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[1px]">
        <div className="relative h-2/3 w-2/3">
          {/* Lock Image */}
          <Image
            src={lockImageUrl}
            alt="Locked Padlock"
            layout="fill"
            objectFit="contain"
            className={`transform-gpu transition-all duration-500 ease-in-out ${
              isClaimed ? "scale-50 opacity-0" : "scale-100 opacity-100"
            }`}
          />
          {/* Checkmark SVG Icon */}
          <div
            className={`absolute inset-0 transform-gpu p-8 text-pixel-green transition-all duration-500 ease-in-out ${
              isClaimed ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-full w-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};