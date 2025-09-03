// app/rentals/[carId]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import type { Metadata } from "next";
import { ProductClientPage } from "./ProductClientPage";

export async function generateMetadata({
  params,
}: {
  params: { carId: string };
}): Promise<Metadata> {
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

export default async function ProductPage({
  params,
}: {
  params: { carId: string };
}) {
  const car = products.find((p) => p.id === params.carId);

  if (!car) {
    notFound();
  }

  return <ProductClientPage car={car} />;
}