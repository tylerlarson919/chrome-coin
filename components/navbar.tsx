"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { WalletIcon as HeroWalletIcon } from "@heroicons/react/24/outline";
import { useAppWallet } from "@/app/hooks/useAppWallet";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { addToast } from "@heroui/toast";

const HamburgerIcon = ({
  isOpen,
  ...props
}: { isOpen: boolean } & React.ComponentProps<"button">) => (
  <button
    aria-label="Toggle menu"
    className="relative h-8 w-8 text-zinc-300 focus:outline-none"
    {...props}
  >
    <div className="absolute left-1/2 top-1/2 block w-7 -translate-x-1/2 -translate-y-1/2 transform">
      <span
        aria-hidden="true"
        className={`absolute block h-0.5 w-7 rounded transform bg-current transition duration-300 ease-in-out ${
          isOpen ? "rotate-45" : "-translate-y-2"
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`absolute block h-0.5 w-7 rounded transform bg-current transition duration-300 ease-in-out ${
          isOpen && "opacity-0"
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`absolute block h-0.5 w-7 rounded transform bg-current transition duration-300 ease-in-out ${
          isOpen ? "-rotate-45" : "translate-y-2"
        }`}
      ></span>
    </div>
  </button>
);

const WalletButton = () => {
  const { publicKey, wallet, disconnect, connected } = useAppWallet();
  const prevConnected = React.useRef(connected);

  React.useEffect(() => {
    if (connected && !prevConnected.current) {
      addToast({
        title: "Wallet Connected",
        description: "Welcome to Pixel World.",
        color: "success",
      });
    }

    if (!connected && prevConnected.current) {
      addToast({
        title: "Wallet Disconnected",
        description: "Your wallet has been disconnected.",
        color: "default",
      });
    }
    prevConnected.current = connected;
  }, [connected]);

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
      addToast({
        title: "Error",
        description: "Could not disconnect wallet.",
        color: "danger",
      });
    }
  };

const navIconClasses = "h-5 w-5 sm:h-6 sm:w-6";

  if (!connected || !publicKey || !wallet) {
    return (
      <div className="navbar-wallet-button">
        {/* This button is now primarily styled via the CSS file */}
        <WalletMultiButton className="!flex !items-center !justify-center !space-x-2">
          <HeroWalletIcon className={navIconClasses} />
          <span className="ml-2 whitespace-nowrap">Connect Wallet</span>
        </WalletMultiButton>
      </div>
    );
  }

  const shortAddress = `${publicKey.toBase58().slice(0, 5)}...${publicKey
    .toBase58()
    .slice(-4)}`;

  return (
    <div className="navbar-wallet-button">
      <button
        onClick={handleDisconnect}
        className="btn-connected flex items-center justify-center space-x-2 w-auto px-4 h-12 tracking-wider text-white font-bold border-4 border-black shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-150 bg-pixel-green hover:bg-green-600"
      >
        <HeroWalletIcon className={navIconClasses} />
        <span className="truncate">{shortAddress}</span>
      </button>
    </div>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Effect to handle navbar background change on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // CHANGE: Apply blur if scrolled OR if the mobile menu is open
  const headerClasses = clsx(
    "fixed top-0 left-0 right-0 z-[100] h-24 transition-colors duration-300",
    scrolled || isMenuOpen ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
  );

  const navLinks = [
    { name: "SHOP", href: "/#shop" },
    { name: "ABOUT", href: "/#about" },
    { name: "PIXELNOMICS", href: "/#pixelplan" },
  ];

  return (
    <>
      <header className={headerClasses}>
        <div className="max-w-8xl mx-auto px-4 sm:px-12 h-full flex items-center justify-between">
          {/* Left: Logo */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center"
            aria-label="Pixel World Home"
          >
            <Image
              src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757101766/Artboard_5_copy_2_i2hzo0.png"
              alt="Pixel World Logo"
              width={56}
              height={56}
              priority
              className="size-14 md:size-16 rounded-full"
            />
          </Link>

          {/* Middle: Desktop Navigation Links */}
          <div className="hidden min-[1111px]:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="text-zinc-300 font-bold tracking-wider hover:text-pixel-green transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#how-to-buy"
              className="text-zinc-300 font-bold tracking-wider hover:text-pixel-green transition-colors duration-200"
            >
              HOW TO BUY
            </Link>
          </div>

          {/* Right: Wallet Button & Mobile Menu Icon */}
          <div className="flex items-center">
            <WalletButton />
            <div className="min-[1111px]:hidden ml-4">
              <HamburgerIcon
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "min-[1111px]:hidden fixed top-24 left-0 w-full h-[calc(100vh-6rem)] bg-black/90 backdrop-blur-lg overflow-y-auto z-[90] transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center py-8">
          {[...navLinks, { name: "HOW TO BUY", href: "/how-to-buy" }].map(
            (link) => (
              <Link
                href={link.href}
                key={link.name}
                className="text-zinc-300 text-xl font-bold tracking-wider py-4 w-full text-center hover:bg-zinc-800/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};