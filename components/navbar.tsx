"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { usePathname, useRouter } from "next/navigation";
import { useAppWallet } from '@/app/hooks/useAppWallet'; 
const HamburgerIcon = ({
  isOpen,
  ...props
}: { isOpen: boolean } & React.ComponentProps<"button">) => (
  <button
    aria-label="Toggle menu"
    className="relative h-8 w-8 text-white focus:outline-none"
    {...props}
  >
    <div className="absolute left-1/2 top-1/2 block w-7 -translate-x-1/2 -translate-y-1/2 transform">
      <span
        aria-hidden="true"
        className={clsx(
          "absolute block h-1 w-7 rounded transform bg-current transition duration-300 ease-in-out",
          isOpen ? "rotate-45" : "-translate-y-2"
        )}
      ></span>
      <span
        aria-hidden="true"
        className={clsx(
          "absolute block h-1 w-7 rounded transform bg-current transition duration-300 ease-in-out",
          isOpen && "opacity-0"
        )}
      ></span>
      <span
        aria-hidden="true"
        className={clsx(
          "absolute block h-1 w-7 rounded transform bg-current transition duration-300 ease-in-out",
          isOpen ? "-rotate-45" : "translate-y-2"
        )}
      ></span>
    </div>
  </button>
);

// --- Main Navbar Component ---
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
    null
  );
  const [isConnectingToBuy, setIsConnectingToBuy] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); 
  const { connected } = useAppWallet();
  const { setVisible } = useWalletModal();

  const handleBuyClick = () => {
    setIsMenuOpen(false); // Close mobile menu if open
    if (connected) {
      if (pathname === "/how-to-buy") {
        // If on the page, just scroll smoothly to the buy widget.
        document
          .getElementById("buy-widget-section")
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Otherwise, navigate to the page with a hash link.
        router.push("/how-to-buy#buy-widget-section");
      }
    } else {
      // Set intent to navigate after connecting, then open modal.
      setIsConnectingToBuy(true);
      setVisible(true);
    }
  };
  // Effect to prevent scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // If the user just connected after clicking the "BUY BOPCOIN" button...
    if (connected && isConnectingToBuy) {
      // ...navigate them to the buy page section.
      router.push("/how-to-buy#buy-widget-section");
      // Reset the intent state to prevent this from firing again.
      setIsConnectingToBuy(false);
    }
  }, [connected, isConnectingToBuy, router]);

  const navLinks = [
    { name: "WATCH", href: "/watch" },
    {
      name: "ABOUT",
      items: [
        { name: "ABOUT US", href: "/about" },
        { name: "BOPONOMICS", href: "/boponomics" },
      ],
    },
    {
      name: "ECOSYSTEM",
      items: [
        { name: "BOPHOUSE", href: "/bophouse" },
        { name: "GIVEAWAY", href: "/giveaway" },
      ],
    },
    { name: "COMMUNITY", href: "/community" },
    { name: "HOW TO BUY", href: "/how-to-buy" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-24 font-luckiest z-[100] bg-black/30 shadow-md backdrop-blur-md">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="https://res.cloudinary.com/dqedckeaa/image/upload/v1752730222/bopcoin_text_logo_sabnyd.webp"
              alt="Bopcoin Logo"
              width={200}
              height={34}
              priority
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.href ? ( // This is a direct link
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-white font-bold tracking-wider hover:text-red-600 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ) : (
                // This is a dropdown category
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center text-white font-bold tracking-wider hover:text-red-600 transition-colors duration-200 focus:outline-none">
                    {link.name}
                    <ChevronDownIcon
                      strokeWidth={4}
                      className={clsx(
                        "ml-1 size-4 transition-transform duration-300",
                        openDropdown === link.name && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={clsx(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 rounded-lg bg-black/40 transition-all duration-300 ease-in-out origin-top",
                      openDropdown === link.name
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    )}
                  >
                    <div className="py-2">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-sm text-white hover:bg-red-600/50 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={handleBuyClick}
              className="hidden sm:block tracking-wider font-luckiest text-lg text-white bg-[#ea88ea] py-2 px-5 rounded-md border-2 border-white shadow-[2px_2px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:scale-95 transition-all duration-150"
          >
              BUY BOPCOIN
            </button>
            <div className="lg:hidden">
              <HamburgerIcon
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={clsx(
          "lg:hidden fixed top-24 left-0 w-full h-[calc(100vh-6rem)] bg-black overflow-y-auto z-[90] transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center py-8">
          {navLinks.map((link) =>
            link.href ? ( // This is a direct link
              <Link
                href={link.href}
                key={link.name}
                className="text-white text-xl font-bold tracking-wider py-4 w-full text-center hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              // This is a collapsible category
              <div key={link.name} className="w-full">
                <button
                  onClick={() =>
                    setOpenMobileSubMenu(
                      openMobileSubMenu === link.name ? null : link.name
                    )
                  }
                  className="flex justify-center items-center text-white text-xl font-bold tracking-wider py-4 w-full text-center hover:bg-white/10 transition-colors"
                >
                  {link.name}
                  <ChevronDownIcon
                    strokeWidth={3}
                    className={clsx(
                      "ml-2 size-5 transition-transform duration-300",
                      openMobileSubMenu === link.name && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out bg-white/5",
                    openMobileSubMenu === link.name
                      ? "max-h-96"
                      : "max-h-0"
                  )}
                >
                  {link.items?.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-white text-lg font-semibold tracking-wider py-3 w-full text-center hover:bg-white/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};