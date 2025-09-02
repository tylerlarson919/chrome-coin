"use client";
import { useState } from "react";
import { Ticker } from "@/components/Ticker";
import { DonutChart } from "@/components/DonutChart";
import { FaBullhorn, FaUsers, FaFileUpload, FaMoneyBillWave, FaVoteYea, FaRocket } from 'react-icons/fa';

const tokenData = [
  { name: "Liquidity Pool", value: 40, color: "#ff8c00" }, // orange-500
  { name: "Marketing & Partnerships", value: 25, color: "#ff6600" }, // mer-orange
  { name: "Rental Incentives", value: 15, color: "#cc5500" }, // darker orange
  { name: "Community Rewards", value: 10, color: "#993f00" }, // darker orange
  { name: "Team & Devs (Locked)", value: 10, color: "#662a00" }, // darkest orange
];

const strategySteps = [
    {
        icon: FaBullhorn,
        title: "1. Build Real Hype",
        description: "Generate buzz for $MER with rental showcases and community engagement.",
    },
    {
        icon: FaUsers,
        title: "2. Grow Our Holders",
        description: "Increase $MER holders to strengthen our utility ecosystem.",
    },
    {
        icon: FaFileUpload,
        title: "3. Partner with Platforms",
        description: "Collaborate with rental platforms to integrate $MER.",
    },
    {
        icon: FaMoneyBillWave,
        title: "4. Fund Expansion",
        description: "Allocate funds from marketing for new rental listings.",
    },
    {
        icon: FaVoteYea,
        title: "5. Community Support",
        description: "Engage holders to support $MER adoption.",
    },
    {
        icon: FaRocket,
        title: "6. Achieve Scale",
        description: "Expand $MER utility across Miami Exotic Rents offerings.",
    },
];

export default function MeronomicsPage() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleTap = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-[4] flex w-full flex-col py-20 md:py-28">

        <div className="flex justify-center pulse-scale px-6 pt-4 pb-2 sm:pt-12 sm:pb-4">
          <h1
            className="w-full text-center font-poppins text-white text-5xl md:text-6xl font-bold"
            data-text="MERONOMICS"
          >
            MERONOMICS
          </h1>
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-start lg:items-start lg:justify-center gap-8 px-4 py-8">
          <div className="w-full max-w-md lg:max-w-lg sticky top-28">
            <DonutChart
              data={tokenData}
              activeIndex={activeIndex}
              onHover={setActiveIndex}
              onTap={handleTap}
            />
          </div>

          <div className="w-full max-w-md">
            <div className="rounded-lg border-4 border-black bg-white/90 p-6 text-black backdrop-blur-sm shadow-[8px_8px_0_#5b2359]">
              <h2 className="text-center font-poppins text-4xl text-black">
                Token Distribution
              </h2>
              <div className="mt-4 space-y-2">
                {tokenData.map((item, index) => (
                  <div
                    key={item.name}
                    role="button"
                    tabIndex={0}
                    className={`flex items-center justify-between rounded-md p-2 -m-2 font-poppins text-lg cursor-pointer transition-all duration-300 ${activeIndex === index ? "scale-[103%] bg-yellow-300/50 shadow-md" : "hover:bg-gray-200/50"}`}
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
                <p className="font-poppins text-lg">Total Supply:</p>
                <p className="font-poppins text-3xl tracking-wider">
                  120,000,000 $MER
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-full mx-4 sm:mx-10 max-w-[720px] lg:max-w-[1000px] rounded-lg border-4 border-black bg-white/90 p-6 text-black backdrop-blur-sm shadow-[8px_8px_0_#5b2359]">
              <h3 className="text-center font-poppins text-3xl text-black">
                  Support & Rewards (10%)
              </h3>
              <p className="font-poppins text-lg mt-4 mb-2 text-center">
                  This portion of the supply is dedicated to growth and community support, including:
              </p>
              <ul className="space-y-1 font-poppins text-center list-none">
                  <li>Rental Partnerships</li>
                  <li>Community Events</li>
                  <li>Rewards and Incentives</li>
              </ul>
              <div className="mt-4 border-t-4 border-dashed border-black pt-4 text-center">
                  <p className="font-poppins text-lg font-bold">
                      If we pass a $10M market cap, we will unlock over $50,000 in rewards and events!
                  </p>
              </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 md:mt-24">
            <div className="flex justify-center px-6 pb-12">
                <h2
                    className="w-full text-center font-poppins text-white text-4xl sm:text-5xl md:text-6xl font-bold"
                    data-text="Road to Utility Adoption"
                >
                   Road to Utility Adoption
                </h2>
            </div>
            
            <div className="mb-12 grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                <div className="md:col-span-2 rounded-lg border-4 border-black bg-white/90 p-6 text-black backdrop-blur-sm shadow-[8px_8px_0_#5b2359]">
                    <h3 className="font-poppins text-3xl text-black">
                        Our Targets
                    </h3>
                    <p className="font-poppins text-lg mt-4 mb-2">
                        To expand $MER utility, we’re aiming for key partnerships.
                    </p>
                    <ul className="space-y-2 font-poppins">
                        <li><span className="font-bold text-mer-orange">Tier 1:</span> Major Rental Platforms</li>
                        <li><span className="font-bold text-mer-orange">Future Goal:</span> Global Expansion</li>
                    </ul>
                </div>

                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {strategySteps.slice(0, 3).map((step) => (
                        <div key={step.title} className="rounded-lg border-4 border-black bg-white/90 p-4 backdrop-blur-sm shadow-[6px_6px_0_#5b2359] flex flex-col text-center transition-transform hover:scale-105">
                           <step.icon className="text-4xl mx-auto mb-3 text-mer-orange"/>
                           <h4 className="font-poppins text-xl text-black">{step.title}</h4>
                           <p className="font-poppins text-sm mt-2 flex-grow">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {strategySteps.slice(3).map((step) => (
                    <div key={step.title} className="rounded-lg border-4 border-black bg-white/90 p-4 backdrop-blur-sm shadow-[6px_6px_0_#5b2359] flex flex-col text-center transition-transform hover:scale-105">
                       <step.icon className="text-4xl mx-auto mb-3 text-mer-orange"/>
                       <h4 className="font-poppins text-xl text-black">{step.title}</h4>
                       <p className="font-poppins text-sm mt-2 flex-grow">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 z-[19] w-full">
        <Ticker className="relative z-20" />
      </div>
    </div>
  );
}