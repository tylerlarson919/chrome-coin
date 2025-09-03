// app/rentals/[carId]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import type { Metadata } from "next";
import { ProductClientPage } from "./ProductClientPage";

// Define a dedicated type for the page props
type Props = {
  params: { carId: string };
};

// Apply the Props type to generateMetadata
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

// Apply the Props type to the page component
export default async function ProductPage({ params }: Props) {
  const car = products.find((p) => p.id === params.carId);

  if (!car) {
    notFound();
  }

  return <ProductClientPage car={car} />;
}