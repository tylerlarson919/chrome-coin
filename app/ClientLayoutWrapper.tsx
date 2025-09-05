"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
// import WelcomeModules from "@/components/first-time-visitors/WelcomeModules";
import { Providers } from "./providers";
import { LoadingContext } from "@/context/LoadingContext";

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div
        className="transition-opacity duration-700 ease-in-out"
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        <Providers>
          <LoadingContext.Provider value={{ isBackgroundVisible }}>
            {/* <WelcomeModules /> */}
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                <div className="h-full w-full">{children}</div>
              </main>
            </div>
            <Footer />
          </LoadingContext.Provider>
        </Providers>
      </div>
    </>
  );
}