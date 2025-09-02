// components/Footer.tsx
"use client";

import Link from "next/link";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/bopcoinxyz",
    icon: FaXTwitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/bopcoin.fun",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@bopcoin.fun",
    icon: FaTiktok,
  },
];

export function Footer() {
  return (
    <footer className="relative z-[5] bg-zinc-900 text-gray-400 font-comic">
      <div className="container mx-auto px-4 py-8">
        {/* Top section: Socials and Tagline */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-500 transition-colors duration-300 hover:text-pink-400"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="font-bold tracking-wider text-base text-gray-300 text-center md:text-right">
            We’re here to meme, dream, and BOP.
            <br />
            Stay based. Stay boppin’.
          </p>
        </div>

        {/* Middle section: Disclaimer */}
        <div className="max-w-3xl mx-auto my-4 space-y-3 text-center text-sm">
          <p>
            $BOPCOIN is a community-driven meme project created purely for
            entertainment and cultural chaos. All characters, visuals, and
            content tied to the BOPHOUSE universe are original works and belong
            to the $BOPCOIN collective.
          </p>
          <p>
            This site and token have no affiliation with any real-world
            entities, and nothing here should be considered financial advice.
          </p>
        </div>

        {/* Bottom section: Divider and Copyright */}
        <div>
          <div className="w-full max-w-lg mx-auto border-t border-dashed border-gray-700" />
          <div className="pt-4 text-center text-xs text-gray-500">
            &copy; 2025 $BOPCOIN. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
