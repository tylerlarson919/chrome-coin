"use client";
import type { Product } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { CardModelViewer } from "./CardModelViewer";
import { useInView } from "react-intersection-observer";

interface CarouselCardProps {
  product: Product;
  isCenter: boolean;
}

export const CarouselCard = ({ product, isCenter }: CarouselCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`relative h-[450px] w-[300px] overflow-hidden rounded-3xl border-2 bg-zinc-900 transition-all duration-500 ${
        isCenter
          ? "border-purple-500 shadow-2xl shadow-purple-500/30"
          : "border-white/10 shadow-lg shadow-black/50"
      }`}
    >
      <div className="absolute inset-0">
        {/* Copied logic: Only mount viewer when card is in view */}
        {inView && product.modelUrl && (
          <CardModelViewer
            modelUrl={product.modelUrl}
            isHovered={isCenter} // Keeps the active card spinning
            margin={product.viewerMargin}
            brightness={product.brightness}
            yMovement={product.yMovement}
          />
        )}
      </div>

      {/* Bottom Overlay */}
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
              target="_blank"
              rel="noopener noreferrer"
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