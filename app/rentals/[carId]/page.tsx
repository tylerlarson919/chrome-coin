// app/rentals/[carId]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import type { Metadata } from "next";
import dynamic from "next/dynamic"; // 1. Import dynamic

// 2. Create a loading component skeleton
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

// 3. Dynamically import ProductClientPage with SSR turned off
const ProductClientPage = dynamic(
  () => import("./ProductClientPage").then((mod) => mod.ProductClientPage),
  {
    ssr: false,
    loading: () => <ProductPageSkeleton />,
  }
);

type Props = {
  params: { carId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = products.find((p) => p.id === params.carId);
  if (!car) {
    return { title: "Product Not Found" };
  }
  return { title: `Rent - ${car.name}` };
}

export default async function ProductPage({ params }: Props) {
  const car = products.find((p) => p.id === params.carId);

  if (!car) {
    notFound();
  }

  // 4. The return statement remains the same, but now renders the dynamic component
  return <ProductClientPage car={car} />;
}