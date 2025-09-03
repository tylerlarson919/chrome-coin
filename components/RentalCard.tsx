// components/RentalCard.tsx
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

interface RentalCardProps {
  product: (typeof products)[0];
}

export const RentalCard = ({ product }: RentalCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border-2 border-white bg-black shadow-lg">
      <div className="relative aspect-[3/2] w-full">
        <Image
          src={product.images[0]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h4 className="text-xl font-bold leading-tight md:text-2xl">
            {product.name}
          </h4>
          <p className="text-sm text-gray-400">{product.brand}</p>
        </div>
        <div className="mt-4 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="w-full text-lg font-bold text-mer-orange md:text-left md:text-xl">
            ${product.price}
            <span className="ml-1 text-sm text-gray-400">/day</span>
          </p>
          <Link
            href={`/rentals/${product.id}`}
            className="whitespace-nowrap w-full rounded-md bg-mer-orange px-4 py-2 text-center text-lg font-semibold text-black shadow-[2px_2px_0px_#fff] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none md:w-auto "
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};