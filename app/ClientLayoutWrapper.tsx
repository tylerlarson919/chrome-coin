// ClientLayoutWrapper.tsx
"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer"; // 1. Import the Footer
import WelcomeModules from "@/components/first-time-visitors/WelcomeModules";
import { Providers } from "./providers";
import ClientLoaderWrapper from "@/components/loading-screen/ClientLoaderWrapper";
import { LoadingContext } from "@/context/LoadingContext";
import { Background } from "@/components/Background";

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  return (
    <>
      <ClientLoaderWrapper
        onLoaded={(startLoaderExit) => {
          // 1. Trigger background to appear
          setIsBackgroundVisible(true);
          // 2. Wait 300ms
          setTimeout(() => {
            // 3. Trigger content fade-in
            setIsLoaded(true);
            // 4. Trigger loader exit animation
            startLoaderExit();
          }, 300);
        }}
      />

      <div
        className="transition-opacity duration-700 ease-in-out"
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        <Providers>
          <LoadingContext.Provider value={{ isBackgroundVisible }}>
            <WelcomeModules />
            <div className="relative flex flex-col min-h-screen">
              <Navbar />
              {isBackgroundVisible && <Background />}
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