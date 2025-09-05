"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type SlideshowProps = {
  images: string[];
  interval?: number;
};

export const Slideshow = ({ images, interval = 4000 }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-zinc-800">
      {/* Images for cross-fade */}
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slideshow image ${index + 1}`}
          layout="fill"
          objectFit="cover"
          priority={index === 0}
          className={`transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Circular Progress Indicator */}
      <div className="absolute bottom-4 right-4 z-10 size-6">
        <svg
          key={currentIndex} // Re-triggers the animation on change
          className="w-full h-full"
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="rgba(0, 0, 0, 0.3)"
            strokeWidth="10"
          />
          {/* Foreground progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#ffffff"
            strokeWidth="10"
            strokeDasharray={2 * Math.PI * 45}
            strokeDashoffset={2 * Math.PI * 45}
            transform="rotate(-90 50 50)"
            style={{ animation: `fill-circle ${interval / 1000}s linear` }}
          />
        </svg>
      </div>
    </div>
  );
};
