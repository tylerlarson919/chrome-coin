// PixelPlan.tsx

"use client";
import { useState } from "react";
import { DonutChart } from "@/components/DonutChart";
import {
  FaPalette,
  FaUsers,
  FaChartLine,
  FaGift,
  FaRocket,
} from "react-icons/fa";
import Image from "next/image";

// Data for the donut chart (no changes)
const tokenData = [
  { name: "Liquidity Pool", value: 85, color: "#22c55e" },
  { name: "Marketing & CEX", value: 7, color: "#55a07eff" },
  { name: "NFT Airdrops", value: 5, color: "#15803d" },
  { name: "Team (Locked)", value: 3, color: "#166534" },
];

// Data for the roadmap cards (no changes)
const roadmapPhases = [
  {
    icon: FaRocket,
    title: "Phase 1: Bootup",
    description:
      "I would like to present an NFT project called Pixel World. The coin will launch on the 7th of September, 2025. We're doing a fair launch for Pixel World where there will be just 12% of the total supply set aside for the team and marketing. You get in early if you get in early.",
  },
  {
    icon: FaUsers,
    title: "Phase 2: The Render",
    description:
      "Good organic volume is what we want. So first, we need to pre-purchase the DEX. Then, if the project is popular, people will ape. The project will exceed bonding. Then, we need to have good volume and at least sustain $1M+ volume in the first 24 hours so that we can get listed on listings like CoinMarketCap, Moonshot, etc.",
  },
  {
    icon: FaChartLine,
    title: "Phase 3: World Expansion",
    description:
      "Once we are listed on large platforms like Moonshot, CoinGecko, and CoinMarketCap, then we will receive the exposure that we need in order to make headway. Then, we can move forward to get listed on centralized exchanges like MEXC and BitUnix. Upon receiving these listings, it should provide even more exposure for Pixel World. That is when we can then spend some funds on marketing to continue promoting the project. We still want to keep it as authentic as possible — no KOL collaboration with payments. We're aiming for authentic promotion in the real world — maybe having our NFTs featured in big, high-end restaurants or collaborating with biggest stars.",
  },
];

export const PixelPlan = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleTap = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  
  const vineUrl = "https://res.cloudinary.com/dqedckeaa/image/upload/v1757106626/vines_qw6nl9.png";

  return (
    <section id="pixelplan" className="pt-10 md:pt-20">
      {/* Header */}
      <div className="text-left mb-8 md:mb-12">
        <p className="text-pixel-green font-bold tracking-widest text-lg md:text-xl">
          PIXELNOMICS
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-300 mt-2">
          THE PIXEL PLAN
        </h2>
      </div>

      {/* Donut Chart and Tokenomics Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-28 md:px-4 pb-4 md:pb-8">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <DonutChart
            data={tokenData}
            activeIndex={activeIndex}
            onHover={setActiveIndex}
            onTap={handleTap}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
                src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757103951/5472274962897794227-min_omhhxs.gif"
                alt="Pixel Character"
                width={200}
                height={200}
                unoptimized
                className="h-[170px] w-[170px] md:h-[200px] md:w-[200px]"
              />
          </div>
        </div>

        <div className="w-full max-w-md">
          {/* FONT CHANGE: Added 'font-pixel' to this card */}
          <div className="rounded-lg border-2 border-zinc-700 bg-zinc-900/80 backdrop-blur-sm p-6 tracking-wider">
            <h3 className="text-center text-3xl font-bold text-zinc-200">
              Token Distribution
            </h3>
            <div className="mt-4 space-y-2">
              {tokenData.map((item, index) => (
                <div
                  key={item.name}
                  role="button"
                  tabIndex={0}
                  className={`flex items-center justify-between rounded-md p-2 -m-2 text-base cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? "scale-[102%] bg-green-900/50"
                      : "hover:bg-zinc-800/60"
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(-1)}
                  onClick={() => handleTap(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleTap(index);
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-4 w-4 flex-shrink-0 rounded-sm border border-zinc-600"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-zinc-100">{item.name}</span>
                  </div>
                  <span className="font-bold text-white text-2xl">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t-2 border-dashed border-zinc-700 pt-4 text-center">
              <p className="text-base text-zinc-200">Total Supply:</p>
              <p className="text-2xl font-bold tracking-wider text-zinc-200">
                120,000,000 $PIXEL
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Roadmap Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-16 gap-x-6 pt-12">
        {roadmapPhases.map((phase) => (
          <div key={phase.title} className="relative">
            <Image
              src={vineUrl}
              alt=""
              width={60}
              height={60}
              className="absolute -top-16 left-1/2 -translate-x-1/2 h-16 w-auto pointer-events-none"
            />
            {/* FONT CHANGE: Added 'font-pixel' to the phase cards */}
            <div className="h-full bg-zinc-900/80 backdrop-blur-sm border-4 border-zinc-700 p-5 flex flex-col text-center transition-colors duration-300 hover:border-pixel-green ">
              <h4 className="text-2xl font-bold text-white font-pixelify tracking-wider">{phase.title}</h4>
              <p className="text-md mt-2 flex-grow text-zinc-300 font-pixelify tracking-wider">
                {phase.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};