"use client";
import { useState } from "react";
import { DonutChart } from "@/components/DonutChart"; // Assuming DonutChart is in components
import { FaPalette, FaUsers, FaLock, FaChartLine, FaGift, FaRocket } from 'react-icons/fa';

const tokenData = [
  { name: "Liquidity Pool", value: 45, color: "#22c55e" },      // green-500
  { name: "Marketing & CEX", value: 25, color: "#63c79a" },     // green-600
  { name: "NFT Airdrops", value: 15, color: "#15803d" },        // green-700
  { name: "Community Treasury", value: 10, color: "#166534" }, // green-800
  { name: "Team (Locked)", value: 5, color: "#14532d" },        // green-900
];

const roadmapPhases = [
    {
        icon: FaRocket,
        title: "Phase 1: Bootup",
        description: "Fair launch on Raydium to ensure equal access for all. Ignite our community on X and Telegram, establishing the core foundation of Pixel World.",
    },
    {
        icon: FaUsers,
        title: "Phase 2: The Render",
        description: "Amplify our presence with strategic marketing and influencer partnerships. Secure listings on key centralized exchanges (CEX) to make $PIXEL accessible to a wider audience.",
    },
    {
        icon: FaPalette,
        title: "Phase 3: The Minting Machine",
        description: "Launch the first official Pixel World NFT collection. These aren't just JPEGs; they're digital artifacts that grant holders a unique identity and stake in our universe.",
    },
    {
        icon: FaGift,
        title: "Phase 4: The Treasury Unlocks",
        description: "Activate our rewards system. Implement airdrops for loyal token and NFT holders and empower the community treasury, giving citizens a voice in the project's future.",
    },
    {
        icon: FaChartLine,
        title: "Phase 5: World Expansion",
        description: "Explore the creation of pixel-based mini-games and interactive experiences. Develop the Pixel World brand into a recognized name in retro digital culture.",
    },
];

export default function PixelnomicsPage() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleTap = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden  ">
      <div className="relative z-[4] flex w-full flex-col pb-20 md:pb-20">

        <div className="flex justify-center px-6 pt-4 pb-2 sm:pt-12 sm:pb-4">
          <h1
            className="w-full text-center font-montserrat  text-4xl sm:text-6xl font-bold tracking-wider"
          >
            PIXELNOMICS
          </h1>
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 py-8">
          <div className="w-full max-w-md lg:max-w-lg sticky top-28">
            <DonutChart
              data={tokenData}
              activeIndex={activeIndex}
              onHover={setActiveIndex}
              onTap={handleTap}
            />
          </div>

          <div className="w-full max-w-md">
            <div className="rounded-lg border-4 border-black bg-white/95 p-6 text-black backdrop-blur-sm shadow-[8px_8px_0_#63c79a]">
              <h2 className="text-center font-montserrat text-4xl font-bold text-black">
                Token Distribution
              </h2>
              <div className="mt-4 space-y-2">
                {tokenData.map((item, index) => (
                  <div
                    key={item.name}
                    role="button"
                    tabIndex={0}
                    className={`flex items-center justify-between rounded-md p-2 -m-2 font-montserrat text-lg cursor-pointer transition-all duration-300 ${activeIndex === index ? "scale-[103%] bg-green-200/50 shadow-md" : "hover:bg-zinc-200/50"}`}
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
                        className="h-5 w-5 flex-shrink-0 rounded-sm border-2 border-black"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-bold">{item.value}%</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t-4 border-dashed border-black pt-4 text-center">
                <p className="font-montserrat text-lg">Total Supply:</p>
                <p className="font-montserrat text-3xl font-bold tracking-wider">
                  1,000,000,000 $PIXEL
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 md:mt-24">
            <div className="flex justify-center px-6 pb-12">
                <h2
                    className="w-full text-center font-montserrat  text-4xl sm:text-6xl font-bold"
                >
                    The Pixel Plan
                </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {roadmapPhases.map((phase) => (
                    <div key={phase.title} className="rounded-lg border-4 border-black bg-white/95 p-5 backdrop-blur-sm shadow-[6px_6px_0_#63c79a] flex flex-col text-center transition-transform hover:scale-105 hover:-translate-y-2">
                       <phase.icon className="text-5xl mx-auto mb-4 text-pixel-green"/>
                       <h4 className="font-montserrat text-xl font-bold text-black">{phase.title}</h4>
                       <p className="font-montserrat text-sm mt-2 flex-grow text-zinc-700">{phase.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}