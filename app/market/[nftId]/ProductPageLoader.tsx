// app/market/[nftId]/ProductPageLoader.tsx
"use client";

import dynamic from "next/dynamic";
import { products } from "@/data/products";

type Product = (typeof products)[0];
interface LoaderProps {
  product: Product;
}

const ProductPageSkeleton = () => (
  <div className="min-h-screen bg-black pt-24">
    <div className="container mx-auto max-w-7xl px-4">
      <div className="flex animate-pulse flex-col gap-12 lg:flex-row">
        <div className="w-full lg:w-3/5">
          <div className="h-[500px] w-full rounded-lg bg-neutral-800"></div>
        </div>
        <div className="hidden h-fit w-full lg:block lg:w-2/5">
          <div className="h-[700px] w-full rounded-lg bg-neutral-800"></div>
        </div>
      </div>
    </div>
  </div>
);

const DynamicProductClientPage = dynamic(
  () => import("./ProductClientPage").then((mod) => mod.ProductClientPage),
  {
    ssr: false,
    loading: () => <ProductPageSkeleton />,
  }
);

export function ProductPageLoader({ product }: LoaderProps) {
  return <DynamicProductClientPage product={product} />;
}