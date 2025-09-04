"use client";

import Image from "next/image";
import { Ticker } from "@/components/Ticker";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialCards = [
    { 
        name: "TikTok", 
        handle: "@miamiexoticrents", 
        href: "https://tiktok.com/@miamiexoticrents", 
        icon: FaTiktok, 
        message: "Watch our latest rental showcases and $MER updates." 
    },
    { 
        name: "Twitter/X", 
        handle: "@miamirentz", 
        href: "https://x.com/miamirentz", 
        icon: FaXTwitter, 
        message: "Get real-time $MER news and community events." 
    },
    { 
        name: "Instagram", 
        handle: "@miamiexoticrents", 
        href: "https://instagram.com/miamiexoticrents", 
        icon: FaInstagram, 
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
    { platform: "Twitter/X", handle: "@miamirentz", href: "https://x.com/miamirentz" },
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

        <main className="container mx-auto px-4 w-full max-w-5xl pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialCards.map(social => {
              const Icon = social.icon; // Assign component to a capitalized variable
              return (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_#000000] hover:shadow-[10px_10px_0px_#ff6600] transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1"
                >
                  <div className="flex items-center gap-4 h-[80px]">
                    <Icon className="text-5xl text-black group-hover:text-mer-orange transition-colors duration-300" />
                    <div>
                      <h2 className="font-poppins text-3xl text-black font-semibold tracking-wider">{social.name}</h2>
                      <p className="font-poppins font-bold text-gray-700">{social.handle}</p>
                    </div>
                  </div>
                  <p className="font-poppins text-md text-gray-700 mt-3 flex-grow">{social.message}</p>
                </a>
              );
            })}
          </div>
        </main>
<div className="relative w-full pb-14 md:pb-0">
        <div className="relative w-full h-[550px] md:h-[600px]">
          {/* Background Image */}
          <Image
            src="https://res.cloudinary.com/dqedckeaa/image/upload/v1756825797/MER-Parking-Garage_w7nxkt.jpg"
            alt="Jeep in a concrete parking garage"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content Overlay */}
          <div className="relative z-10 flex h-full items-center justify-center text-left">
            <div className="w-full max-w-4xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-white">
                {/* Column 1: "What You'll See" */}
                <div>
                  <h3 className="font-poppins text-3xl font-semibold">What You'll See:</h3>
                  <ul className="list-none mt-3 space-y-2">
                    {whatYoullSeeContent.map((item) => (
                      <li key={item} className="font-poppins text-lg text-gray-200 flex items-center">
                        <span className="mr-2 text-xl text-mer-orange">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Column 2: "Follow us" */}
                <div>
                  <h3 className="font-poppins text-3xl font-semibold">Follow us on all 3:</h3>
                  <ul className="list-none mt-3 space-y-2">
                    {followUsContent.map((item) => (
                      <li key={item.platform} className="font-poppins text-lg flex items-center">
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-mer-orange transition-colors duration-300">
                          {item.handle} on {item.platform}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[19] w-full">
        <Ticker className="relative z-20" />
      </div>
    </div>
  );
}