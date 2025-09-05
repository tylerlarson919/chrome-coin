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

// Data for the donut chart
const tokenData = [
  { name: "Liquidity Pool", value: 45, color: "#22c55e" },
  { name: "Marketing & CEX", value: 25, color: "#63c79a" },
  { name: "NFT Airdrops", value: 15, color: "#15803d" },
  { name: "Community Treasury", value: 10, color: "#166534" },
  { name: "Team (Locked)", value: 5, color: "#14532d" },
];

// Data for the roadmap cards
const roadmapPhases = [
  {
    icon: FaRocket,
    title: "Phase 1: Bootup",
    description:
      "Fair launch on Raydium to ensure equal access for all. Ignite our community on X and Telegram, establishing the core foundation of Pixel World.",
  },
  {
    icon: FaUsers,
    title: "Phase 2: The Render",
    description:
      "Amplify our presence with strategic marketing and influencer partnerships. Secure listings on key centralized exchanges (CEX) to make $PIXEL accessible to a wider audience.",
  },
  {
    icon: FaPalette,
    title: "Phase 3: The Minting Machine",
    description:
      "Launch the first official Pixel World NFT collection. These aren't just JPEGs; they're digital artifacts that grant holders a unique identity and stake in our universe.",
  },
  {
    icon: FaGift,
    title: "Phase 4: The Treasury Unlocks",
    description:
      "Activate our rewards system. Implement airdrops for loyal token and NFT holders and empower the community treasury, giving citizens a voice in the project's future.",
  },
  {
    icon: FaChartLine,
    title: "Phase 5: World Expansion",
    description:
      "Explore the creation of pixel-based mini-games and interactive experiences. Develop the Pixel World brand into a recognized name in retro digital culture.",
  },
];

export const PixelPlan = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleTap = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section id="pixelplan" className="pt-10 md:pt-20">
      {/* Header styled like the About component */}
      <div className="text-left mb-8 md:mb-12">
        <p className="text-pixel-green font-bold tracking-widest">
          PIXELNOMICS
        </p>
        <h2 className="text-4xl font-extrabold text-zinc-800">
          THE PIXEL PLAN
        </h2>
      </div>

      {/* Donut Chart and Tokenomics Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 md:px-4 pb-6 md:pb-8">
        <div className="w-full max-w-md lg:max-w-lg">
          <DonutChart
            data={tokenData}
            activeIndex={activeIndex}
            onHover={setActiveIndex}
            onTap={handleTap}
          />
        </div>

        <div className="w-full max-w-md">
          <div className="rounded-lg border-2 border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-center text-3xl font-bold text-zinc-800">
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
                      ? "scale-[102%] bg-green-100/80"
                      : "hover:bg-zinc-100/80"
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
                      className="h-4 w-4 flex-shrink-0 rounded-sm border border-zinc-300"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-zinc-700">{item.name}</span>
                  </div>
                  <span className="font-bold text-zinc-800">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t-2 border-dashed border-zinc-300 pt-4 text-center">
              <p className="text-base text-zinc-600">Total Supply:</p>
              <p className="text-2xl font-bold tracking-wider text-zinc-800">
                1,000,000,000 $PIXEL
              </p>
            </div>
          </div>
        </div>
        
      </div>
      {/* Roadmap Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {roadmapPhases.map((phase) => (
          <div
            key={phase.title}
            className="rounded-lg border-2 border-zinc-200 bg-zinc-50/50 p-5 flex flex-col text-center transition-transform hover:scale-105 hover:-translate-y-1 shadow-sm hover:shadow-lg"
          >
            <phase.icon className="text-4xl mx-auto mb-4 text-pixel-green" />
            <h4 className="text-lg font-bold text-zinc-800">{phase.title}</h4>
            <p className="text-sm mt-2 flex-grow text-zinc-600">
              {phase.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};