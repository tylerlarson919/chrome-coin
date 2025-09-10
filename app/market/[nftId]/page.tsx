// app/market/[nftId]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import type { Metadata } from "next";
import { ProductPageLoader } from "./ProductPageLoader";

type Props = {
  params: Promise<{ nftId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { nftId } = resolvedParams;
  const product = products.find((p) => p.id === nftId);

  if (!product) {
    return {
      title: "NFT Not Found",
    };
  }
  return {
    title: `$CHROME - ${product.name}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const { nftId } = resolvedParams;
  const product = products.find((p) => p.id === nftId);

  if (!product) {
    notFound();
  }

  return <ProductPageLoader product={product} />;
}