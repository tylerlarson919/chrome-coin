"use client";
import Image from "next/image";
import { Ticker } from "@/components/Ticker";
import { VideoPlayer } from "@/components/VideoPlayer";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function BophousePage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-[4] flex min-h-screen w-full flex-col pt-28 pointer-events-none">
        {/* --- Centralized Title Text --- */}
        <div className="flex justify-center pulse-scale px-6 pt-4 pb-2 sm:pt-12 sm:pb-4 lg:pb-12 md:pb-6">
          <div className="flex flex-col items-center">
            <h1
              className="w-full -rotate-3 text-center font-modak text-white text-stroke-smooth text-7xl md:text-8xl"
              data-text="The Bophouse"
            >
              The Bophouse
            </h1>
          </div>
        </div>

        {/* --- Main Content Area --- */}
        <div className="relative flex-grow flex flex-col justify-between">
          {/* Content */}
          <div className="relative flex w-full h-full justify-start flex-col lg:absolute lg:inset-0 mt-4 md:mt-0">
            <div className="relative flex justify-center px-8 gap-4 text-center lg:translate-y-[10%]">
              <div className="flex justify-center lg:justify-end w-full h-full max-w-[950px]">
                <div className="relative w-full max-w-lg p-4 bg-white border-4 border-black rounded-lg shadow-lg hover-tilt-zoom pointer-events-auto">
                  <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 -rotate-12">
                    <div className="px-3 py-1 bg-yellow-400 border-2 border-black rounded-md shadow-md">
                      <span className="text-xl text-black font-luckiest">Ep. 1</span>
                    </div>
                  </div>
                  <div className="w-full aspect-video">
                    <VideoPlayer
                      src="https://res.cloudinary.com/dqedckeaa/video/upload/v1756248835/BOPCOIN-EP1_wumc6z.webm"
                      loop
                      controls
                      className="rounded-md"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <h3 className="text-2xl font-luckiest">The Beginning of Bop</h3>
                    <div className="flex items-center justify-center w-full gap-4 mt-1">
                      <p className="font-comic">Where it all started</p>
                      <button
                        onClick={() => router.push("/watch")}
                        className="flex items-center justify-center gap-1 px-3 py-1 text-base text-black transition-all bg-yellow-400 border-2 border-black rounded-md shadow-md font-luckiest hover:bg-yellow-500 active:scale-95"
                        aria-label="Watch full series on YouTube"
                      >
                        Season 1
                        <ChevronRightIcon strokeWidth={4} className="h-4 w-4 " />
                      </button>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute -bottom-[35%] inset-x-0 w-fit pointer-events-none -translate-x-1/2 left-1/2">
                    <Image
                    src="https://res.cloudinary.com/dqedckeaa/image/upload/v1752787646/up-2_pi77bv.svg"
                    alt="Decorative Arrow"
                    width={878}
                    height={1606}
                    className="w-28 lg:w-20 h-auto pulse-scale"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div className="pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-0 h-full">
            <div className="relative mx-auto flex h-full max-w-[1100px] items-end">
              <div className="flex h-full w-full items-end justify-center lg:justify-start -translate-y-[10%] lg:translate-y-0">
                <Image
                  src="https://res.cloudinary.com/dqedckeaa/image/upload/v1752730248/bop-girls-transparent_mwxrt3.webp"
                  alt="Bophouse Characters"
                  width={700}
                  height={300}
                  className="h-auto w-screen max-w-[600px] md:w-[65vw] lg:max-w-[650px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[19] w-full">
        <Ticker className="relative z-20" />
      </div>
    </div>
  );
}