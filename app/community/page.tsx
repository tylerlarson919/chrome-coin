// app/community/page.tsx
"use client";

import Image from "next/image";
import { Ticker } from "@/components/Ticker";

const socialCards = [
    { 
        name: "TikTok", 
        handle: "@bopcoin.fun", 
        href: "https://tiktok.com/@bopcoin.fun", 
        emoji: "🎵", 
        message: "Weekly animations, funny skits, memes, and chaos. Get your BOP fix in short, scroll-worthy videos." 
    },
    { 
        name: "Twitter/X", 
        handle: "@bopcoinxyz", 
        href: "https://x.com/bopcoinxyz", 
        emoji: "🐦", 
        message: "Daily updates, market moves, giveaways, community memes, and live chaos. If it’s happening, it’s happening here first." 
    },
    { 
        name: "Instagram", 
        handle: "@bopcoin.fun", 
        href: "https://instagram.com/bopcoin.fun", 
        emoji: "📸", 
        message: "Behind-the-scenes, reels, memes, story drops, and sneak peeks at new BOPHOUSE art & characters." 
    },
];

const whatYoullSeeContent = [
    'Weekly animated episodes',
    'Updates on $BOPCOIN events, contests, and drops',
    'Community memes, shoutouts, and challenges',
    'And lots of reasons to laugh, like, and share'
];

const followUsContent = [
    { platform: "TikTok", handle: "@bopcoin.fun", href: "https://tiktok.com/@bopcoin.fun" },
    { platform: "Twitter/X", handle: "@bopcoinxyz", href: "https://x.com/bopcoinxyz" },
    { platform: "Instagram", handle: "@bopcoin.fun", href: "https://instagram.com/bopcoin.fun" },
];

export default function CommunityPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-[4] flex min-h-screen w-full flex-col pt-28 pointer-events-auto">
        {/* --- Centralized Title Text --- */}
        <div className="flex justify-center pulse-scale px-6 pt-4 pb-2 sm:pt-12 sm:pb-4 lg:pb-12 md:pb-6">
          <div className="flex flex-col items-center">
            <h1
              className="w-full -rotate-3 text-center font-modak text-white text-stroke-smooth text-7xl md:text-8xl"
              data-text="JOIN THE BOP SQUAD"
            >
              JOIN THE BOP SQUAD
            </h1>
          </div>
        </div>

        {/* --- Main Content Area --- */}
        <main className="container mx-auto px-4 w-full max-w-5xl flex-grow pb-12">
            {/* --- Social Cards Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {socialCards.map(social => (
                    <a 
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_#000000] hover:shadow-[10px_10px_0px_#ea88ea] transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1"
                    >
                        <div className="flex items-center gap-4 h-[100px]">
                            <span className="text-5xl">{social.emoji}</span>
                            <div>
                                <h2 className="font-luckiest text-3xl text-black tracking-wider">{social.name}</h2>
                                <p className="font-comic font-bold text-lg text-[#5b2359]">{social.handle}</p>
                            </div>
                        </div>
                        <p className="font-comic text-md text-gray-700 mt-3 flex-grow">{social.message}</p>
                    </a>
                ))}
            </div>

            {/* --- Additional Info Card --- */}
            <div className="mt-12 rounded-xl border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_#000000]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* What You'll See Section */}
                    <div>
                        <h3 className="font-luckiest text-3xl text-black">🎥 What You’ll See:</h3>
                        <ul className="list-none mt-3 space-y-2">
                            {whatYoullSeeContent.map((item) => (
                                <li key={item} className="font-comic font-semibold text-lg text-gray-800 flex items-start">
                                    <span className="mr-2 text-xl">▪</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Follow Us Section */}
                    <div>
                         <h3 className="font-luckiest text-3xl text-black">💥 Follow us on all 3:</h3>
                         <ul className="list-none mt-3 space-y-2">
                            {followUsContent.map((item) => (
                                <li key={item.platform} className="font-comic font-bold text-lg">
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#ea88ea] transition-colors duration-300">
                                        • {item.handle} on {item.platform}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        
        {/* --- Background Character Image --- */}
        {/* This div is pushed to the bottom by flex-grow on main and mt-auto */}
        <div className="relative z-0 w-full mt-auto pointer-events-none">
            {/* Sized container for the image to sit in */}
            <div className="relative mx-auto w-full max-w-xl h-[350px] md:h-[500px]">
                <Image
                  src="https://res.cloudinary.com/dqedckeaa/image/upload/v1752730248/bop-girls-transparent_mwxrt3.webp"
                  alt="Community Characters"
                  fill
                  style={{objectFit: 'contain', objectPosition: 'bottom center'}}
                  priority
                />
            </div>
        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 z-[19] w-full">
        <Ticker className="relative z-20" />
      </div>
    </div>
  );
}
