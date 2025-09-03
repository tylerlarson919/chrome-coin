"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import WelcomeModules from "@/components/first-time-visitors/WelcomeModules";
import { Providers } from "./providers";
import { LoadingContext } from "@/context/LoadingContext";

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  return (
    <>
      <div
        className="transition-opacity duration-700 ease-in-out"
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        <Providers>
          <LoadingContext.Provider value={{ isBackgroundVisible }}>
            <WelcomeModules />
            <div className="relative flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                <div className="w-full h-full">{children}</div>
              </main>
            </div>
            <Footer />
          </LoadingContext.Provider>
        </Providers>
      </div>
    </>
  );
}