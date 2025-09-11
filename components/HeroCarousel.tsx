"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { CarouselCard } from "./CarouselCard";

// Constants to control the 3D layout
const CARD_OFFSET = 80;
const SCALE_FACTOR = 0.1;
const ROTATION_FACTOR = 20;

export const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Only use the first three products for the carousel
  const carouselProducts = products.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update index to loop through the three products
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselProducts.length]);

  return (
    <div className="relative flex h-[450px] w-full max-w-5xl items-center justify-center [perspective:1000px] scale-80">
      <div className="relative h-full w-[300px] [transform-style:preserve-3d]">
        {carouselProducts.map((product, index) => {
          // Logic now operates on the array of 3 products
          let relativeIndex = index - activeIndex;
          const half = Math.floor(carouselProducts.length / 2);
          if (relativeIndex > half) {
            relativeIndex -= carouselProducts.length;
          } else if (relativeIndex < -half) {
            relativeIndex += carouselProducts.length;
          }

          const zIndex = 10 - Math.abs(relativeIndex);
          const xOffset = relativeIndex * CARD_OFFSET;
          const rotationY = -relativeIndex * ROTATION_FACTOR;
          const opacity = Math.abs(relativeIndex) > 2 ? 0 : 1;
          const isCenter = relativeIndex === 0;

          const scale = isCenter
            ? 1.2
            : 1 - Math.abs(relativeIndex) * SCALE_FACTOR;
          const yOffset = isCenter ? 0 : 10;
          const zOffset = isCenter ? 80 : 0;

          return (
            <motion.div
              key={product.id}
              className="absolute flex h-full w-full items-center justify-center"
              animate={{
                transform: `translateX(${xOffset}%) translateY(${yOffset}%) translateZ(${zOffset}px) scale(${scale}) rotateY(${rotationY}deg)`,
                zIndex,
                opacity,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <CarouselCard
                product={product}
                isCenter={index === activeIndex}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};