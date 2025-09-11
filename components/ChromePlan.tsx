// components/ChromePlan.tsx
"use client";
import { useState } from "react";
import { DonutChart } from "@/components/DonutChart";
import { FaUsers, FaChartLine, FaRocket } from "react-icons/fa";
import Image from "next/image";

const tokenData = [
  { name: "Liquidity Pool", value: 88, color: "#9333ea" }, // purple-600
  { name: "Marketing & CEX", value: 5, color: "#a855f7" }, // purple-500
  { name: "NFT Airdrops", value: 4, color: "#7e22ce" }, // purple-700
  { name: "Team (Locked)", value: 3, color: "#6b21a8" }, // purple-800
];

const roadmapPhases = [
  {
    icon: FaRocket,
    title: "Phase 1: Genesis",
    description:
      "Launch of the $CHROME token and the Genesis NFT collection. Establishing a core community through a fair launch, with a focus on organic growth and authentic engagement.",
  },
  {
    icon: FaUsers,
    title: "Phase 2: The Forge",
    description:
      "Community-driven design contests and collaborations. Holders get exclusive access to vote on future designs and collections, shaping the future of the $CHROME brand.",
  },
  {
    icon: FaChartLine,
    title: "Phase 3: The Gallery",
    description:
      "Expansion into high-end digital galleries and metaverse integrations. Collaborations with major streetwear influencers and brands to bridge the gap between digital and physical collectibles.",
  },
];

export const ChromePlan = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleTap = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  
  const vineUrl = "https://res.cloudinary.com/dqedckeaa/image/upload/v1757106626/vines_qw6nl9.png";

  return (
    <section id="chromeplan" className="pt-10 md:pt-20">
      <div className="text-left mb-8 md:mb-12">
        <p className="text-purple-400 font-bold tracking-widest text-lg md:text-xl">
          CHROMENOMICS
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-300 mt-2">
          THE $CHROME PLAN
        </h2>
      </div>

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
              alt="$CHROME Character"
              width={200}
              height={200}
              unoptimized
              className="h-[170px] w-[170px] md:h-[200px] md:w-[200px]"
            />
          </div>
        </div>

        <div className="w-full max-w-md">
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
                      ? "scale-[102%] bg-purple-900/50"
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
                120,000,000 $CHROME
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-16 gap-x-6 pt-12">
        {roadmapPhases.map((phase) => (
          <div key={phase.title} className="relative">
            <div className="h-full bg-zinc-900/80 backdrop-blur-sm rounded-lg border-2 border-zinc-700 p-5 flex flex-col text-center transition-colors duration-300 hover:border-purple-400 ">
              <h4 className="text-2xl font-bold text-white tracking-wider">{phase.title}</h4>
              <p className="text-md mt-2 flex-grow text-zinc-300 tracking-wider">
                {phase.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};