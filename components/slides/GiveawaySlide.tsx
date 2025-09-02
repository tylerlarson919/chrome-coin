import { motion } from "framer-motion";
import { slideVariants } from "./slideVariants";
import { FaLink } from "react-icons/fa";
import { IoIosRedo } from "react-icons/io";
import { useRouter } from "next/navigation";


interface SlideProps {
  direction: number;
}
// Data for the "How to Enter" steps based on the reference image
const giveawaySteps = [
  {
    number: "01",
    title: "Make Content",
    text: "Create memes, videos, or any content about $BOPCOIN.",
  },
  {
    number: "02",
    title: "Tag & Hashtag",
    text: "Use #BOPCOIN and tag @bopcoin.fun on Instagram and Tiktok, or @bopcoinxyz on X.",
  },
  {
    number: "03",
    title: "Submit Form",
    text: "Click to fill out the form with your submission.",
    icon: <IoIosRedo />,
  },
];


export const GiveawaySlide = ({ direction }: SlideProps) => {
const router = useRouter();

  return (
    <motion.div
      key="giveaway"
      custom={direction}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative flex h-full w-full flex-col items-center justify-start gap-10 px-4 lg:absolute lg:inset-0 lg:flex-row lg:items-start lg:justify-center lg:gap-12"
    >
      {/* "How to Enter" Column */}
      <div className="flex flex-col items-center gap-4 pointer-events-auto">
        <div className="mb-4">
          <h2 className="-rotate-3 rounded-md bg-[#ea88ea] px-6 py-1 font-modak text-4xl text-white [text-shadow:2px_2px_0_#000]">
            How to Enter
          </h2>
        </div>
        <div className="flex w-full max-w-md flex-col gap-8">
          {giveawaySteps.map((step) => (
            <div key={step.number} className="relative text-black shadow-lg hover-tilt-zoom">
              {/* Pink number tab */}
              <div className="absolute -left-1 -top-2 z-10 -translate-x-2 -translate-y-4 rounded-md border-3 border-black bg-[#ea88ea] px-4 py-1 text-xl font-bold text-white font-comic">
                {step.number}
              </div>
              {/* White content box */}
              <div 
                className={`w-full rounded-lg border-4 border-black bg-white p-4 ${step.number === "03" ? "cursor-pointer" : ""}`}
                onClick={() => step.number === "03" && router.push("/giveaway#giveaway-form")}
              >
                <div className="flex items-center justify-start gap-4 w-full">
                  <h3 className="font-luckiest text-left text-2xl font-bold tracking-wide text-black sm:text-3xl">
                    {step.title}
                  </h3>
                  {step.icon && <div className="text-3xl -translate-y-[2px] text-black">{step.icon}</div>}
                </div>
                <p className="mt-1 font-comic text-left text-lg leading-tight text-regular lg:leading-tight">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* "Bonus Giveaway" Column */}
      <div className="w-full max-w-md pointer-events-auto lg:max-w-lg lg:self-start lg:pb-12">
        <div className="mb-10 lg:mb-0 flex flex-col gap-2 rounded-lg border-[3px] border-[#ea88ea] bg-black/60 p-5 text-white backdrop-blur-sm shadow-[8px_8px_0_#5b2359]">
          <h2 className="-rotate-2 text-center font-modak text-4xl text-white [text-shadow:2px_2px_0_#000]">
            Bonus Giveaway
          </h2>
          <p className="text-center font-bold tracking-wider sm:text-lg">
            $50K at $10M Market Cap
          </p>
            <div className="text-center font-comic leading-tight sm:text-lg">
                When we reach $10M market cap, we&apos;re dropping an additional $50K in
                prizes including:
              <div className="mt-2 flex flex-row flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2">
                <span className="font-bold">🥊 Meme Battles</span>
                <span className="font-bold">🎲 Random Drops</span>
                <span className="font-bold">🏆 Epic Rewards</span>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};