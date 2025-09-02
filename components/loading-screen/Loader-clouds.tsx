"use client";

import { motion, Variants } from "framer-motion";

// Main settings for the cloud animations
const numCenterClouds = 14;
const numSideClouds = 5;
const frameRadius = 60; // How far the center clouds travel
const coverRadius = 10; 

// Variants for the main container fade-out
const containerVariants: Variants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, delay: 1.0 },
  },
};

// Variants for the central "burst" of clouds
const centerCloudVariants: Variants = {
  initial: (i: number) => {
    const angle = (i / numCenterClouds) * 2 * Math.PI;
    return {
      x: `calc(-50% + ${Math.cos(angle) * coverRadius}vmax)`,
      y: `calc(-50% + ${Math.sin(angle) * coverRadius}vmax)`,
      scale: 1,
    };
  },
  exit: (i: number) => {
    const angle = (i / numCenterClouds) * 2 * Math.PI;
    return {
      x: `calc(-50% + ${Math.cos(angle) * frameRadius}vmax)`,
      y: `calc(-50% + ${Math.sin(angle) * frameRadius}vmax)`,
      scale: 1.2,
      transition: { duration: 1.0, ease: "easeInOut" },
    };
  },
};

// Base variant for side clouds to reduce repetition
const sideCloudBaseVariant: Variants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 1.0, ease: "easeIn" },
  },
};

export default function Loader() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100] bg-transparent"
      variants={containerVariants}
      initial="initial"
      exit="exit"
      style={{
        maskImage: "radial-gradient(ellipse, black 65%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse, black 65%, transparent 100%)",
      }}
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Center Clouds */}
        {[...Array(numCenterClouds)].map((_, i) => (
          <motion.img
            key={`center-cloud-${i}`}
            src="https://res.cloudinary.com/dqedckeaa/image/upload/v1752693700/cloud1_i0xhb0.webp"
            alt="Loading cloud"
            custom={i}
            variants={centerCloudVariants}
            className="absolute left-1/2 top-1/2"
            style={{ width: "50vmax", willChange: "transform" }}
          />
        ))}
      </div>
    </motion.div>
  );
}