import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { NavigationArrows } from "./NavigationArrows";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const ProductGrid = () => {
  // 1. Initialize Embla Carousel. 'align: "start"' makes it snap to the beginning of each card.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  // 2. State to track if we can scroll to the previous or next slide.
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // 3. Simple callbacks to control the carousel.
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // 4. This effect listens to Embla's events to update the arrow states.
  useEffect(() => {
    if (!emblaApi) return;

    const onUpdate = (api: typeof emblaApi) => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    emblaApi.on("select", onUpdate);
    emblaApi.on("reInit", onUpdate);
    onUpdate(emblaApi); // Set initial state

    return () => {
      emblaApi.off("select", onUpdate);
      emblaApi.off("reInit", onUpdate);
    };
  }, [emblaApi]);

  return (
     <div className="relative mx-auto w-full max-w-7xl sm:max-w-none">
      <NavigationArrows
        onNext={scrollNext}
        onPrev={scrollPrev}
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
      />
      {/* This outer div with 'overflow-hidden' is the main viewport for the carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex pb-4 -ml-4 sm:-ml-6">
          {products.map((product) => (
            // Each child is a slide with a fixed width, preventing it from shrinking
            <div
              key={product.id}
              className="relative flex-shrink-0 basis-5/6 pl-4 sm:basis-80 sm:pl-6"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};