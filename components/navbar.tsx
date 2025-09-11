// components/navbar.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useAppWallet } from "@/app/hooks/useAppWallet";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { addToast } from "@heroui/toast";

// WalletButton component remains the same
const WalletButton = () => {
  const { publicKey, disconnect, connected } = useAppWallet();
  const prevConnected = React.useRef(connected);

  useEffect(() => {
    if (connected && !prevConnected.current) {
      addToast({
        title: "Wallet Connected",
        description: "Welcome.",
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

  const buttonClasses =
    "font-mono text-xs font-normal tracking-[0.2em] text-white uppercase transition-opacity hover:opacity-70";

  if (!connected || !publicKey) {
    return (
      <WalletMultiButton
        className={`!bg-transparent !p-0 !font-normal ${buttonClasses}`}
      />
    );
  }

  const shortAddress = `${publicKey.toBase58().slice(0, 3)}..${publicKey
    .toBase58()
    .slice(-2)}`;

  return (
    <button onClick={handleDisconnect} className={buttonClasses}>
      {shortAddress}
    </button>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "MARKET", href: "/market" },
    { name: "ABOUT", href: "/#about" },
    { name: "CHROMENOMICS", href: "/#chromeplan" },
    { name: "SWAP", href: "/#how-to-buy" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] h-16 sm:h-24 bg-transparent pointer-events-none">
        <div className="relative mx-auto flex h-full w-full items-center justify-between px-4">
          {/* Left side: A container to correctly space the sliding icon */}
          <div className="w-1/4 pointer-events-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className={clsx(
                "relative z-20 transition-transform duration-500 ease-in-out",
                {
                  "translate-x-10": isMenuOpen, // Slides a short distance
                  "translate-x-0": !isMenuOpen,
                }
              )}
            >
              <Image
                src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757554558/cross_l7bghj.svg"
                alt="Menu Toggle"
                width={30}
                height={30}
                className="size-[24px] sm:size-[30px] invert transition-transform duration-200 ease-in-out "
                priority
              />
            </button>
          </div>

          {/* Right side: Wallet Button */}
          <div className="flex w-1/4 items-center justify-end pointer-events-auto">
            <WalletButton />
          </div>
        </div>
      </header>

      {/* Dropdown Menu Panel */}
      <div
        className={clsx(
          "fixed top-20 left-0 z-[90] w-full transition-all duration-300 ease-in-out",
          {
            "visible translate-y-0 opacity-100": isMenuOpen,
            "invisible -translate-y-4 opacity-0": !isMenuOpen,
          }
        )}
      >
        <nav className="flex flex-col items-center px-4">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className="w-full py-2 text-left"
            >
              <span className="font-mono text-xl font-bold tracking-wider text-white uppercase transition-opacity hover:opacity-70">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};