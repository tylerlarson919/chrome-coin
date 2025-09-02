// components/loading-screen/ClientLoaderWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/loading-screen/Loader";

export default function ClientLoaderWrapper({
  onLoaded,
  onExitComplete,
}: {
  onLoaded: (startLoaderExit: () => void) => void; // Signature updated
  onExitComplete?: () => void;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Pass a function to onLoaded that allows the parent to control when the loader disappears
      onLoaded(() => setIsLoading(false));
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [onLoaded]);

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isLoading && <Loader />}
    </AnimatePresence>
  );
}