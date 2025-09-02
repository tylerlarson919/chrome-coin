"use client";

import Image from "next/image";
import { Ticker } from "@/components/Ticker";

const socialCards = [
    { 
        name: "TikTok", 
        handle: "@miamiexoticrents", 
        href: "https://tiktok.com/@miamiexoticrents", 
        emoji: "🎥", 
        message: "Watch our latest rental showcases and $MER updates." 
    },
    { 
        name: "Twitter/X", 
        handle: "@miamiexoticrents", 
        href: "https://x.com/miamiexoticrents", 
        emoji: "📢", 
        message: "Get real-time $MER news and community events." 
    },
    { 
        name: "Instagram", 
        handle: "@miamiexoticrents", 
        href: "https://instagram.com/miamiexoticrents", 
        emoji: "📸", 
        message: "See stunning rental photos and $MER perks." 
    },
];

const whatYoullSeeContent = [
    'Rental showcases',
    'Updates on $MER events and perks',
    'Community highlights',
    'Exclusive rental offers',
];

const followUsContent = [
    { platform: "TikTok", handle: "@miamiexoticrents", href: "https://tiktok.com/@miamiexoticrents" },
    { platform: "Twitter/X", handle: "@miamiexoticrents", href: "https://x.com/miamiexoticrents" },
    { platform: "Instagram", handle: "@miamiexoticrents", href: "https://instagram.com/miamiexoticrents" },
];

export default function CommunityPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-[4] flex min-h-screen w-full flex-col pt-28 pointer-events-auto">
        <div className="flex justify-center pulse-scale px-6 pt-4 pb-2 sm:pt-12 sm:pb-4 lg:pb-12 md:pb-6">
          <div className="flex flex-col items-center">
            <h1
              className="w-full text-center font-poppins text-white text-5xl md:text-6xl font-bold"
              data-text="JOIN THE $MER COMMUNITY"
            >
              JOIN THE $MER COMMUNITY
            </h1>
          </div>
        </div>

        <main className="container mx-auto px-4 w-full max-w-5xl flex-grow pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {socialCards.map(social => (
                    <a 
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_#000000] hover:shadow-[10px_10px_0px_#ff6600] transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1"
                    >
                        <div className="flex items-center gap-4 h-[100px]">
                            <span className="text-5xl">{social.emoji}</span>
                            <div>
                                <h2 className="font-poppins text-3xl text-black tracking-wider">{social.name}</h2>
                                <p className="font-poppins font-bold text-lg text-gray-700">{social.handle}</p>
                            </div>
                        </div>
                        <p className="font-poppins text-md text-gray-700 mt-3 flex-grow">{social.message}</p>
                    </a>
                ))}
            </div>

            <div className="mt-12 rounded-xl border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_#000000]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div>
                        <h3 className="font-poppins text-3xl text-black">🎥 What You’ll See:</h3>
                        <ul className="list-none mt-3 space-y-2">
                            {whatYoullSeeContent.map((item) => (
                                <li key={item} className="font-poppins font-semibold text-lg text-gray-800 flex items-start">
                                    <span className="mr-2 text-xl">▪</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                         <h3 className="font-poppins text-3xl text-black">💥 Follow us on all 3:</h3>
                         <ul className="list-none mt-3 space-y-2">
                            {followUsContent.map((item) => (
                                <li key={item.platform} className="font-poppins font-bold text-lg">
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-black hover:text-mer-orange transition-colors duration-300">
                                        • {item.handle} on {item.platform}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        
        <div className="relative z-0 w-full mt-auto pointer-events-none">
            <div className="relative mx-auto w-full max-w-xl h-[350px] md:h-[500px]">
                <div className="placeholder-image bg-gray-800 text-white" style={{objectFit: 'contain', objectPosition: 'bottom center'}}>Placeholder for Community Characters - 700x500</div>
            </div>
        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 z-[19] w-full">
        <Ticker className="relative z-20" />
      </div>
    </div>
  );
}