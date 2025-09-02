"use client";

import { useState } from "react";
import { Ticker } from "@/components/Ticker";
import { DonutChart } from "@/components/DonutChart"; // Import the new component
import { FaBullhorn, FaUsers, FaFileUpload, FaMoneyBillWave, FaVoteYea, FaRocket } from 'react-icons/fa';


const tokenData = [
  { name: "Liquidity Pool", value: 40, color: "#fde047" }, // yellow-400
  { name: "Marketing & Mayhem", value: 25, color: "#f472b6" }, // pink-400
  { name: "Creator Fund", value: 15, color: "#60a5fa" }, // blue-400
  { name: "Community Airdrops", value: 10, color: "#4ade80" }, // green-400
  { name: "Team & Devs (Locked)", value: 10, color: "#a78bfa" }, // violet-400
];

const strategySteps = [
    {
        icon: FaBullhorn,
        title: "1. Build Real Hype",
        description: "Exchanges want coins with strong communities and daily social media activity. Your likes, retweets, memes, and raids create the viral energy we need.",
    },
    {
        icon: FaUsers,
        title: "2. Grow Our Holders",
        description: "A solid number of holders and consistent volume on DEXs prove we’re a serious project. More holders give us more leverage when we apply for listings.",
    },
    {
        icon: FaFileUpload,
        title: "3. Apply for Listings",
        description: "We'll prepare a detailed project profile, tokenomics, smart contract audits, and legal docs to submit to our target exchanges.",
    },
    {
        icon: FaMoneyBillWave,
        title: "4. Fund Listing Fees",
        description: "Top-tier listings can cost $5k - $50k+. Funds are allocated from our marketing wallet, with potential for community-driven raises (with perks!).",
    },
    {
        icon: FaVoteYea,
        title: "5. Dominate Community Votes",
        description: "Some exchanges let their community vote for new listings—for free! When the time comes, we’ll need every BOP believer to vote and share.",
    },
    {
        icon: FaRocket,
        title: "6. Achieve Lift-Off",
        description: "Successful listings bring massive exposure, new holders, real volume, and major credibility, taking $BOPCOIN to the next level.",
    },
];

export default function BoponomicsPage() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleTap = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-[4] flex w-full flex-col py-20 md:py-28">

        {/* --- Centralized Title Text --- */}
        <div className="flex justify-center pulse-scale px-6 pt-4 pb-2 sm:pt-12 sm:pb-4">
          <h1
            className="w-full -rotate-3 text-center font-modak text-purple-900 text-stroke-smooth text-[50px] sm:text-7xl md:text-8xl"
            data-text="BOPONOMICS"
          >
            BOPONOMICS
          </h1>
        </div>

        {/* --- Tokenomics Main Content Area --- */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-start lg:items-start lg:justify-center gap-8 px-4 py-8">
          {/* Chart Container */}
          <div className="w-full max-w-md lg:max-w-lg sticky top-28">
            <DonutChart
              data={tokenData}
              activeIndex={activeIndex}
              onHover={setActiveIndex}
              onTap={handleTap}
            />
          </div>

          {/* Right Column for Details */}
          <div className="w-full max-w-md">
            {/* Legend & Details */}
            <div className="rounded-lg border-4 border-black bg-white/90 p-6 text-black backdrop-blur-sm shadow-[8px_8px_0_#5b2359]">
              <h2 className="text-center -rotate-2 font-modak text-4xl text-black [text-shadow:2px_2px_0_#ea88ea]">
                Token Distribution
              </h2>
              <div className="mt-4 space-y-2">
                {tokenData.map((item, index) => (
                  <div
                    key={item.name}
                    role="button"
                    tabIndex={0}
                    className={`flex items-center justify-between rounded-md p-2 -m-2 font-comic text-lg cursor-pointer transition-all duration-300 ${
                      activeIndex === index
                        ? "scale-[103%] bg-yellow-300/50 shadow-md"
                        : "hover:bg-gray-200/50"
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
                <p className="font-comic text-lg">Total Supply:</p>
                <p className="font-luckiest text-3xl tracking-wider">
                  120,000,000 $BOP
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* NEW Support & Rewards Box */}
        <div className="flex justify-center w-full">
          <div className="w-full mx-4 sm:mx-10 max-w-[720px] lg:max-w-[1000px] rounded-lg border-4 border-black bg-white/90 p-6 text-black backdrop-blur-sm shadow-[8px_8px_0_#5b2359]">
              <h3 className="text-center -rotate-2 font-modak text-3xl text-black [text-shadow:2px_2px_0_#4ade80]">
                  Support & Rewards (10%)
              </h3>
              <p className="font-comic text-lg mt-4 mb-2 text-center">
                  This portion of the supply is dedicated to growth and community support, including:
              </p>
              <ul className="space-y-1 font-comic text-center list-none">
                  <li>Artist, Dev, & KOL Collabs</li>
                  <li>Community Events</li>
                  <li>Rewards and Giveaways</li>
              </ul>
              <div className="mt-4 border-t-4 border-dashed border-black pt-4 text-center">
                  <p className="font-comic text-lg font-bold">
                      If we pass a $10M market cap, we will unlock over $50,000 in rewards and events, starting with a $10,000 giveaway! 😎
                  </p>
              </div>
          </div>
        </div>

        {/* --- Exchange Listing Strategy Section --- */}
        <div className="container mx-auto px-4 mt-16 md:mt-24">
            {/* Section Title */}
            <div className="flex justify-center px-6 pb-12">
                <h2
                    className="w-full rotate-2 text-center font-modak text-white text-stroke-smooth text-4xl sm:text-5xl md:text-6xl"
                    data-text="Road to Major Exchanges"
                >
                   Road to Major Exchanges
                </h2>
            </div>
            
            {/* Strategy Introduction & Targets */}
            <div className="mb-12 grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                <div className="md:col-span-2 rounded-lg border-4 border-black bg-white/90 p-6 text-black backdrop-blur-sm shadow-[8px_8px_0_#5b2359]">
                    <h3 className="-rotate-2 font-modak text-3xl text-black [text-shadow:2px_2px_0_#60a5fa]">
                        Our Targets
                    </h3>
                    <p className="font-comic text-lg mt-4 mb-2">
                        To get the massive exposure, volume, and credibility $BOP deserves, we&apos;re aiming for the top.
                    </p>
                    <ul className="space-y-2 font-comic">
                        <li><span className="font-bold text-pink-500">Tier 1:</span> MEXC, Gate.io, BitMart, CoinW</li>
                        <li><span className="font-bold text-blue-500">Future Goal:</span> KuCoin</li>
                        <li><span className="font-bold text-violet-500">Stretch Goals:</span> Bybit, OKX, Binance</li>
                    </ul>
                </div>

                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {strategySteps.slice(0, 3).map((step) => (
                        <div key={step.title} className="rounded-lg border-4 border-black bg-white/90 p-4 backdrop-blur-sm shadow-[6px_6px_0_#5b2359] flex flex-col text-center transition-transform hover:scale-105">
                           <step.icon className="text-4xl mx-auto mb-3 text-pink-500"/>
                           <h4 className="font-modak text-xl text-black">{step.title}</h4>
                           <p className="font-comic text-sm mt-2 flex-grow">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom row of strategy steps */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {strategySteps.slice(3).map((step) => (
                    <div key={step.title} className="rounded-lg border-4 border-black bg-white/90 p-4 backdrop-blur-sm shadow-[6px_6px_0_#5b2359] flex flex-col text-center transition-transform hover:scale-105">
                       <step.icon className="text-4xl mx-auto mb-3 text-pink-500"/>
                       <h4 className="font-modak text-xl text-black">{step.title}</h4>
                       <p className="font-comic text-sm mt-2 flex-grow">{step.description}</p>
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