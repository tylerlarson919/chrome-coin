// app/rentals/[carId]/ProductPageLoader.tsx
"use client"; // This is now a Client Component

import dynamic from "next/dynamic";
import { products } from "@/data/products";

// Define the type for the 'car' prop
type Car = (typeof products)[0];
interface LoaderProps {
  car: Car;
}

// Define the skeleton component for the loading state
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

// Dynamically import the main client page INSIDE the new client component
const DynamicProductClientPage = dynamic(
  () => import("./ProductClientPage").then((mod) => mod.ProductClientPage),
  {
    ssr: false, // This is allowed here because we are in a Client Component
    loading: () => <ProductPageSkeleton />,
  }
);

// The loader component simply passes the props through to the dynamic component
export function ProductPageLoader({ car }: LoaderProps) {
  return <DynamicProductClientPage car={car} />;
}