// app/ClientLayoutWrapper.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { LoadingContext } from "@/context/LoadingContext";

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
  
  // Ref to hold the audio element and track if music has started
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasMusicStarted = useRef(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleFirstInteraction = () => {
      // Exit if music has already been started
      if (hasMusicStarted.current) return;
      hasMusicStarted.current = true;

      const audio = new Audio(
        "https://res.cloudinary.com/dqedckeaa/video/upload/v1757629146/robert-miles-children-audio_fhfcbm.mp3"
      );
      audioRef.current = audio;
      audio.loop = true;
      audio.volume = 0; // Start at 0 volume for the fade-in

      audio.play().catch((error) => {
        // Autoplay can sometimes be blocked
        console.error("Audio playback failed:", error);
        // Reset the flag to allow another interaction attempt
        hasMusicStarted.current = false;
      });
      
      // --- Fade-in Logic ---
      let volume = 0;
      const targetVolume = 0.4; // Set a target volume (e.g., 40%)
      const fadeDuration = 2500; // 2.5 seconds
      const fadeInterval = 50;   // Update every 50ms
      const volumeStep = targetVolume / (fadeDuration / fadeInterval);

      const fadeInInterval = setInterval(() => {
        volume += volumeStep;
        if (volume >= targetVolume) {
          audio.volume = targetVolume;
          clearInterval(fadeInInterval);
        } else {
          audio.volume = volume;
        }
      }, fadeInterval);

      // Clean up this event listener after it runs once
      document.removeEventListener("click", handleFirstInteraction);
    };

    // Add event listener for the first click
    document.addEventListener("click", handleFirstInteraction);

    // Cleanup function to remove listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleFirstInteraction);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <div
        className="transition-opacity duration-700 ease-in-out"
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        <Providers>
          <LoadingContext.Provider value={{ isBackgroundVisible }}>
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