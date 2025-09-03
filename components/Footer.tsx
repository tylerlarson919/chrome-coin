"use client";

import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const socialLinks = [
  { name: "X", href: "https://x.com/miamiexoticrents", icon: FaXTwitter },
  { name: "Instagram", href: "https://instagram.com/miamiexoticrents", icon: FaInstagram },
  { name: "WhatsApp", href: "https://wa.me/19542682717", icon: FaWhatsapp },
];

export function Footer() {
  return (
    <footer className="relative z-[5] bg-zinc-900 text-gray-400 font-poppins">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-500 transition-colors duration-300 hover:text-mer-orange"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* MER Description (Order changed for mobile view) */}
          <p className="order-last text-center font-bold tracking-wider text-base text-gray-300 md:order-none md:text-right">
            Luxury rentals powered by $MER.
          </p>
          
          {/* Official Partner Logo */}
          <a
            href="https://miamiexoticrents.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 md:items-end"
          >
            <p className="text-xs text-gray-500">A Part of the Official</p>
            <Image
              src="https://res.cloudinary.com/dqedckeaa/image/upload/v1756887266/logo_1_g6fxhu.webp"
              alt="Miami Exotic Rents Logo"
              width={150}
              height={30}
              className="h-8 w-auto opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            />
          </a>
        </div>

        <div className="mx-auto my-8 max-w-3xl space-y-3 text-center text-sm">
          <p>$MER is a utility token for Miami Exotic Rents. Not financial advice.</p>
        </div>

        <div>
          <div className="mx-auto w-full max-w-lg border-t border-dashed border-gray-700" />
          <div className="pt-4 text-center text-xs text-gray-500">
            <p>8320 W Sunrise Blvd, Plantation, FL 33322 | +1 954-268-2717</p>
            &copy; 2025 $MER. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}