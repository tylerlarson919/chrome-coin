"use client";

import { useEffect, useState } from "react";
import { VideoPlayer } from "@/components/VideoPlayer"; // Make sure path is correct

export default function VideoLibraryPage() {
  // Video data updated to use 'src' for video URLs
  const videos = [
    {
      src: "https://res.cloudinary.com/dqedckeaa/video/upload/v1756248835/BOPCOIN-EP1_wumc6z.webm",
      title: "The Beginning Of Bop",
      description: "Where it all started",
    },
    {
      src: "https://res.cloudinary.com/dqedckeaa/video/upload/v1756248839/BOPCOIN-EP2_jtjfh0.webm",
      title: "The Day The Bop Stood Still",
      description: "The bophouse runs into a major problem",
    },
    {
      src: null,
      title: "Ep. 3",
      description: "Coming Soon...",
    },
    {
      src: null,
      title: "Ep. 4",
      description: "Coming Soon...",
    },
    {
      src: null,
      title: "Ep. 5",
      description: "Coming Soon...",
    },
  ];

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-[4] flex min-h-screen w-full flex-col pt-28 pointer-events-auto">
        <div className="flex justify-center px-6 pt-4 pb-12 sm:pt-12 sm:pb-16">
          <div className="flex flex-col items-center">
            <h1
              className="w-full -rotate-3 text-center font-modak text-white text-stroke-smooth text-6xl md:text-7xl"
              data-text="BOPCOIN SEASON 1"
            >
              BOPCOIN SEASON 1
            </h1>
          </div>
        </div>

        <main className="container mx-auto px-4 w-full max-w-5xl flex-grow pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`w-full rounded-xl overflow-hidden transition-all duration-300 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                style={{ transition: "opacity 0.5s ease-in-out" }}
              >
                <div className="relative w-full aspect-video rounded-t-xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg">
                  {video.src ? (
                    <VideoPlayer src={video.src} controls loop />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 bg-white rounded-b-xl border border-t-0 border-gray-300">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    {video.title}
                  </h2>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}