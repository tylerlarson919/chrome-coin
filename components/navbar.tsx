"use client";
import React from "react";
import Link from "next/link";
import { WalletIcon as HeroWalletIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useAppWallet } from "@/app/hooks/useAppWallet";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import { addToast } from "@heroui/toast";

const HamburgerIcon = ({
  isOpen,
  ...props
}: { isOpen: boolean } & React.ComponentProps<"button">) => (
  <button 
    aria-label="Toggle menu"
    className="relative h-8 w-8 text-zinc-800 focus:outline-none"
    {...props}
  >
    <div className="absolute left-1/2 top-1/2 block w-7 -translate-x-1/2 -translate-y-1/2 transform">
      <span
        aria-hidden="true"
        className={`absolute block h-0.5 w-7 rounded transform bg-current transition duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-2"}`}
      ></span>
      <span
        aria-hidden="true"
        className={`absolute block h-0.5 w-7 rounded transform bg-current transition duration-300 ease-in-out ${isOpen && "opacity-0"}`}
      ></span>
      <span
        aria-hidden="true"
        className={`absolute block h-0.5 w-7 rounded transform bg-current transition duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-2"}`}
      ></span>
    </div>
  </button>
);

const WalletButton = () => {
    const { publicKey, wallet, disconnect, connected } = useAppWallet();
    const prevConnected = React.useRef(connected);

    // This effect handles the toast notifications for connect/disconnect events
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
            addToast({ title: "Error", description: "Could not disconnect wallet.", color: "danger" });
        }
    };

    const connectedButtonClasses = "!font-normal tracking-normal h-10 text-xs sm:font-bold sm:tracking-wider sm:h-12 sm:text-xs";
    const multiButtonLayoutClasses = "!flex !items-center !justify-center !space-x-2 !w-auto active:!scale-95 h-10 sm:h-12";
    const desktopTextClasses = "sm:font-bold sm:tracking-wider sm:text-xs";
    const navIconClasses = "h-5 w-5 sm:h-6 sm:w-6";

    if (!connected || !publicKey || !wallet) {
        return (
            <div className="navbar-wallet-button">
                <WalletMultiButton
                    className={`${multiButtonLayoutClasses} ${desktopTextClasses}`}
                >
                    <HeroWalletIcon className={navIconClasses} />
                    <span className="ml-2 whitespace-nowrap">Connect Wallet</span>
                </WalletMultiButton>
            </div>
        );
    }

    const shortAddress = `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`;

    return (
        // ADDED: Wrapper div to match the other button state.
        <div className="navbar-wallet-button">
            <button
                onClick={handleDisconnect}
                // ADDED: A unique class `btn-connected` for CSS targeting.
                className={`btn-connected flex items-center justify-center space-x-2 w-auto transition-all duration-150 active:scale-95 bg-pixel-green text-white rounded-md hover:bg-opacity-80 ${connectedButtonClasses}`}
            >
                <HeroWalletIcon className={navIconClasses}/>
                <span className="truncate">{shortAddress}</span>
            </button>
        </div>
    );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "SHOP", href: "/#shop" },
    { name: "ABOUT", href: "/about" },
    { name: "PIXELNOMICS", href: "/pixelnomics" },
    { name: "COMMUNITY", href: "/community" },
  ];

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 h-24 font-montserrat z-[100] bg-pixel-bg/80 shadow-sm backdrop-blur-md">
        <div className="max-w-8xl mx-auto px-4 sm:px-12 h-full flex items-center justify-between">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="h-full flex items-center">
            <Image
                src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757019941/px-white_2x_juk2c6.png"
                alt="Pixel World Logo"
                width={180}
                height={18}
                priority
                className="h-auto w-36 sm:w-[180px] dark:invert" 
            />
        </Link>

          <div className="hidden min-[1111px]:flex items-center space-x-8">
            {navLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-zinc-700 font-bold tracking-wider hover:text-pixel-green transition-colors duration-200"
                >
                  {link.name}
                </Link>
            ))}
            <Link
                href="/how-to-buy"
                className="text-zinc-700 font-bold tracking-wider hover:text-pixel-green transition-colors duration-200"
            >
                HOW TO BUY
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <WalletButton />
            <div className="min-[1111px]:hidden">
              <HamburgerIcon
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`min-[1111px]:hidden fixed top-24 left-0 w-full h-[calc(100vh-6rem)] bg-pixel-bg overflow-y-auto z-[90] transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center py-8">
          {[...navLinks, { name: 'HOW TO BUY', href: '/how-to-buy' }].map((link) => (
             <Link
                href={link.href}
                key={link.name}
                className="text-zinc-800 text-xl font-bold tracking-wider py-4 w-full text-center hover:bg-zinc-200/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
          ))}
        </div>
      </div>
    </>
  );
};