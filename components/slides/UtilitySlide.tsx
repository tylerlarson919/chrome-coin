import { motion } from "framer-motion";
import { slideVariants } from "./slideVariants";

interface UtilitySlideProps {
  direction: number;
}

export const UtilitySlide = ({ direction }: UtilitySlideProps) => {
  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center text-white font-poppins"
      custom={direction}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        $MER Token Utility
      </h2>
      <p className="text-lg md:text-xl text-center max-w-md">
        Swap SOL for $MER to access discounts on exotic cars, yachts, and houses. Enjoy seamless Web3 rentals!
      </p>
      <div className="mt-6 rounded-lg bg-gray-800">
        <div className="placeholder-image text-white">Placeholder for Utility Graphic - 700x700</div>
      </div>
    </motion.div>
  );
};