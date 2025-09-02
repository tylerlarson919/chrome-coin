import { motion } from "framer-motion";
import { slideVariants } from "./slideVariants";

interface RentalsSlideProps {
  direction: number;
}

export const RentalsSlide = ({ direction }: RentalsSlideProps) => {
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
        Exotic Rentals with $MER
      </h2>
      <p className="text-lg md:text-xl text-center max-w-md">
        Unlock premium rentals of exotic cars, luxury yachts, and stunning houses using $MER.
      </p>
      <div className="mt-6 rounded-lg bg-gray-800">
        <div className="placeholder-image text-white">Placeholder for Exotic Cars - 700x300</div>
      </div>
    </motion.div>
  );
};