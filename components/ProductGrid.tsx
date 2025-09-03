// components/ProductGrid.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { RentalCard } from "./RentalCard";
import { products } from "@/data/products";
import { motion } from "framer-motion";

const INITIAL_LOAD = 9; // Shows 3 rows on a large screen
const LOAD_MORE_COUNT = 6; // Loads 2 more rows at a time

export const ProductGrid = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const visibleProducts = products.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When the sentinel comes into view and there are more products to load
        if (entries[0].isIntersecting && visibleCount < products.length) {
          setVisibleCount((prevCount) => prevCount + LOAD_MORE_COUNT);
        }
      },
      { threshold: 1.0 }, // Trigger when the sentinel is fully visible
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [visibleCount]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08 }} // Controls the delay between each card animating in
      >
        {visibleProducts.map((product) => (
          <motion.div key={product.id} variants={cardVariants}>
            <RentalCard product={product} />
          </motion.div>
        ))}
      </motion.div>
      {/* This invisible div acts as a trigger to load more items */}
      {visibleCount < products.length && (
        <div ref={loadMoreRef} className="h-10" />
      )}
    </>
  );
};