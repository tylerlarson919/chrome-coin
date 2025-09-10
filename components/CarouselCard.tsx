// components/CarouselCard.tsx
import Image from "next/image";
import type { Product } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselCardProps {
  product: Product;
  isCenter: boolean;
}

export const CarouselCard = ({ product, isCenter }: CarouselCardProps) => {
  return (
    // Main card container with rounded corners and a subtle border
    <div
      className={`relative h-[450px] w-[300px] overflow-hidden rounded-3xl border-2 border-white/10 transition-shadow duration-500 bg-zinc-900 ${
        isCenter ? "shadow-2xl shadow-purple-500/30" : "shadow-lg shadow-black/50"
      }`}
    >
    <Image
        src={product.images[0]}
        alt={product.name}
        layout="fill"
        objectFit="cover"
        className="z-0"
      />


      {/* Bottom Overlay: Bid Info (renders only if `isCenter` is true) */}
      <AnimatePresence>
        {isCenter && (
          <motion.div
            className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div>
              <p className="text-xs text-white/70">Feature Bid</p>
              <p className="text-xl font-bold text-white">{product.price} ETH</p>
            </div>
            <a
              href={`/market/${product.id}`}
              className="text-sm font-bold text-green-400 transition-opacity hover:opacity-80"
            >
              MORE ▸
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};