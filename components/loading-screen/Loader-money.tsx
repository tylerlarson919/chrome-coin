"use client";

import { motion, Variants } from "framer-motion";

// Variants for the main container fade-out
const containerVariants: Variants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, delay: 1.0 },
  },
};

export default function Loader() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center"
      variants={containerVariants}
      initial="initial"
      exit="exit"
      style={{ mixBlendMode: 'screen' }}
    >
      <video
        src="/money-loader.webm"
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}