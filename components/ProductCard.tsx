"use client";
import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/data/products";
import { CardModelViewer } from "./CardModelViewer";
import { useInView } from "react-intersection-observer";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Link
      ref={ref}
      href={`/market/${product.id}`}
      className="group relative block h-[400px] overflow-hidden rounded-3xl border-2 border-white/10 bg-zinc-900 shadow-lg shadow-black/50 transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30"
      onMouseEnter={() => {
        if (inView) setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 right-0 bottom-14">
        {/* The viewer is only mounted when the card is visible. */}
        {/* It handles its own snapshot and animation logic internally. */}
        {inView && product.modelUrl && (
          <CardModelViewer
            modelUrl={product.modelUrl}
            isHovered={isHovered}
            margin={product.viewerMargin}
            brightness={product.brightness}
            yMovement={product.yMovement}
          />
        )}
      </div>

      {/* Bottom overlay for product details */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-col items-end justify-between rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-md">
        <div className="w-full">
          <h3 className="truncate text-md font-bold text-white">{product.name}</h3>
        </div>
        <div className="flex w-full items-center justify-between text-right">
          <p className="text-xs text-gray-400 -mb-1">{product.collection}</p>
          <p className="text-lg font-semibold text-purple-400">
            {product.price} SOL
          </p>
        </div>
      </div>
    </Link>
  );
};