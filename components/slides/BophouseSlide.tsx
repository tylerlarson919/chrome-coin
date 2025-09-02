import { motion } from "framer-motion";
import { slideVariants } from "./slideVariants";
import { VideoPlayer } from "../VideoPlayer";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SlideProps {
  direction: number;
}


export const BophouseSlide = ({ direction }: SlideProps) => {
  const router = useRouter();

  return (
    <motion.div
      key="bophouse"
      custom={direction}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative flex w-full h-full justify-start flex-col lg:absolute lg:inset-0 mt-4 md:mt-0 pointer-events-none"
    >
      <div className="relative flex justify-center px-8 gap-4 text-center lg:translate-y-[10%]">
        {/* Video Card */}
        <div className="flex justify-center lg:justify-end w-full h-full max-w-[950px]">
          <div className="relative w-full max-w-lg p-4 bg-white border-4 border-black rounded-lg shadow-lg hover-tilt-zoom pointer-events-auto">
            {/* "Ep. 1" Sticker */}
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

                {/* 1. NEW BUTTON: Added a new link styled like the sticker */}
                <button
                  onClick={() => router.push("/watch")}
                  className="flex items-center justify-center gap-1 px-3 py-1 text-base text-black transition-all bg-yellow-400 border-2 border-black rounded-md shadow-md font-luckiest hover:bg-yellow-500 active:scale-95"
                  aria-label="Watch full series on YouTube"
                >
                  Season 1
                  <ChevronRightIcon strokeWidth={4} className="h-4 w-4 "/>
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
    </motion.div>
  );
};