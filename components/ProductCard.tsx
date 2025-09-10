// components/ProductCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/market/${product.id}`}
      // Combines original hover effects with the new styling from CarouselCard
      className="group relative block overflow-hidden rounded-3xl border-2 border-white/10 bg-zinc-900 shadow-lg shadow-black/50 transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30"
    >
      {/* The image now fills the entire card background */}
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={product.images[0]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="z-0 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Bottom "frosted glass" overlay for product details */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-col items-end justify-between rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-md">
        <div className="w-full">
          <h3 className="truncate text-md font-bold text-white">{product.name}</h3>
        </div>
        <div className="flex-shrink-0 text-right flex flex-row items-center w-full justify-between">
          <p className="text-xs text-gray-400 -mb-1">{product.collection}</p>
          <p className="text-lg font-semibold text-purple-400">
            {product.price} SOL
          </p>
        </div>
      </div>
    </Link>
  );
};