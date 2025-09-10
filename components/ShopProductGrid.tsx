// components/ShopProductGrid.tsx
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export const ShopProductGrid = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};