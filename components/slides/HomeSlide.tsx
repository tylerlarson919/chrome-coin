import { motion } from "framer-motion";
import { slideVariants } from "./slideVariants"; // Assuming variants are externalized
import { BuyWidget } from "@/components/BuyWidget";

interface SlideProps {
  direction: number;
}

export const HomeSlide = ({ direction }: SlideProps) => {
  return (
    <motion.div
      key="home"
      custom={direction}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      // Use flexbox to push image to the bottom
      className="relative flex-grow"
    >
      <div className="flex flex-col lg:flex-row px-6 lg:px-14 gap-8 lg:gap-16 items-center lg:items-start justify-center">
        {/* --- NEW CALLOUT --- */}
        <div className="hover-tilt-zoom relative max-w-xl lg:max-w-md text-black shadow-lg mt-0 lg:mt-6 pointer-events-auto">
          <div className="px-8 py-2 bg-[#ea88ea] border-4 border-black rounded-lg -mx-[12px] md:-mx-[16px]">
            <h2 className="text-3xl tracking-wide font-luckiest font-bold [text-shadow:2px_2px_0_white]">
              CHOOSE RICH. BUY $BOPCOIN!
            </h2>
          </div>
          <div className="px-8 py-4 bg-white rounded-b-lg border-4 border-black -mt-[4px]">
            <p className="text-xl font-comic text-left">
              Where chaos meets comedy in an animated universe. Join the revolution that
              started as a meme and became a movement.
            </p>
          </div>
        </div>
          {/* --- Collapsible BuyWidget container --- */}
            <div className="w-full max-w-xl lg:max-w-md pointer-events-auto">
              <BuyWidget />
            </div>
      </div>
    </motion.div>
  );
};