// app/rentals/[carId]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import type { Metadata } from "next";
import { ProductPageLoader } from "./ProductPageLoader"; // Import the new loader component

type Props = {
  params: { carId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = products.find((p) => p.id === params.carId);
  if (!car) {
    return {
      title: "Product Not Found",
    };
  }
  return {
    title: `Rent - ${car.name}`,
  };
}

export default async function ProductPage({ params }: Props) {
  const car = products.find((p) => p.id === params.carId);

  if (!car) {
    notFound();
  }

  // Render the loader component, which will handle the dynamic import
  return <ProductPageLoader car={car} />;
}