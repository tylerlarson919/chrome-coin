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
import Image from "next/image"; // Import the Image component

// Data for the donut chart (no changes)
const tokenData = [
  { name: "Liquidity Pool", value: 45, color: "#22c55e" },
  { name: "Marketing & CEX", value: 25, color: "#63c79a" },
  { name: "NFT Airdrops", value: 15, color: "#15803d" },
  { name: "Community Treasury", value: 10, color: "#166534" },
  { name: "Team (Locked)", value: 5, color: "#14532d" },
];

// Data for the roadmap cards (no changes)
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
  
  // Self-contained SVG for the pixel vine decoration
  const vineSvg = `data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2363c79a'%3E%3Crect x='28' y='0' width='4' height='40' shape-rendering='crispEdges'/%3E%3Crect x='24' y='12' width='4' height='4' shape-rendering='crispEdges'/%3E%3Crect x='32' y='20' width='8' height='4' shape-rendering='crispEdges'/%3E%3Crect x='20' y='28' width='8' height='4' shape-rendering='crispEdges'/%3E%3Crect x='32' y='36' width='4' height='4' shape-rendering='crispEdges'/%3E%3C/g%3E%3C/svg%3E`;

  return (
    <section id="pixelplan" className="pt-10 md:pt-20">
      {/* Header */}
      <div className="text-left mb-8 md:mb-12">
        <p className="text-pixel-green font-bold tracking-widest">
          PIXELNOMICS
        </p>
        <h2 className="text-4xl font-extrabold text-zinc-300">
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
          {/* UPDATED: Token Distribution card with dark theme */}
          <div className="rounded-lg border-2 border-zinc-700 bg-zinc-900/80 backdrop-blur-sm p-6">
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
                    <span className="text-zinc-300">{item.name}</span>
                  </div>
                  <span className="font-bold text-white">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t-2 border-dashed border-zinc-700 pt-4 text-center">
              <p className="text-base text-zinc-400">Total Supply:</p>
              <p className="text-2xl font-bold tracking-wider text-zinc-200">
                1,000,000,000 $PIXEL
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* UPDATED: Roadmap Cards Section with Pixel Art Style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-16 gap-x-6 pt-12">
        {roadmapPhases.map((phase) => (
          <div key={phase.title} className="relative">
            {/* Pixel Vine Decoration */}
            <Image
              src={vineSvg}
              alt=""
              width={60}
              height={60}
              className="absolute -top-12 left-1/2 -translate-x-1/2 h-16 w-auto pointer-events-none"
            />
            {/* Pixelated Card */}
            <div className="h-full bg-zinc-900/80 backdrop-blur-sm border-4 border-zinc-700 p-5 flex flex-col text-center transition-colors duration-300 hover:border-pixel-green">
              <phase.icon className="text-4xl mx-auto mb-4 text-pixel-green" />
              <h4 className="text-lg font-bold text-white">{phase.title}</h4>
              <p className="text-sm mt-2 flex-grow text-zinc-300">
                {phase.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};