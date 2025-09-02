"use client";

import Image from "next/image";
import Link from "next/link";
import { Ticker } from "@/components/Ticker";
import { FaCarSide, FaShip, FaHome } from "react-icons/fa";

// --- Data for Rental Categories ---
const rentalCategories = [
  {
    icon: FaCarSide,
    title: "Exotic Car Fleet",
    description: "From the raw power of a Lamborghini to the timeless elegance of a Rolls-Royce, our fleet is curated for the ultimate driving thrill.",
    images: [
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756825797/MER-Lambo-exchange_yzyvin.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756825797/MER-night-ride_ijrgnv.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756825797/MER-Parking-Garage_w7nxkt.jpg",
    ],
    href: "https://miamiexoticrents.com/exotic_cars",
    ctaText: "View Exotic Cars",
  },
  {
    icon: FaShip,
    title: "Private Yacht Charters",
    description: "Experience Miami from the water. Our collection of luxury yachts offers the perfect escape for a day of sun, sea, and unparalleled service.",
    images: [
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756832088/yacht_6_nw1cof.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756832090/DJI_0811-HIGH_afgyvm.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756832089/DJI_0698-HIGH_my9kzi.jpg",
    ],
    href: "https://miamiexoticrents.com/yachts",
    ctaText: "View Yachts",
  },
  {
    icon: FaHome,
    title: "Exclusive Home Rentals",
    description: "Stay in style. Our portfolio of properties features stunning architecture, breathtaking views, and five-star amenities in Miami's most sought-after locations.",
    images: [
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756832087/Patio_qbehqg.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756832087/front_gr72cx.avif",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756832086/19904_SW_129th_gds8em.jpg",
    ],
    href: "https://miamiexoticrents.com/houses",
    ctaText: "View Houses",
  },
];

export default function RentalsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white font-poppins">
      <div className="relative z-[4] flex w-full flex-col">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
          <Image
            src="https://res.cloudinary.com/dqedckeaa/image/upload/v1756832291/bg_1_b1nbci.webp"
            alt="Abstract geometric background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-xl">The Ultimate Luxury Experience</h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200">
              Unlock exotic cars, private yachts, and exclusive homes with your $MER token.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-16 md:py-24 w-full max-w-7xl">
          {/* Intro Text */}
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-mer-orange mb-4">Your Key to Miami's Finest</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              $MER isn't just a token—it's your all-access pass. Holders receive exclusive discounts, priority booking, and access to a curated collection of luxury assets. Explore the possibilities below.
            </p>
          </div>

          {/* Rental Categories */}
          <div className="space-y-20 md:space-y-28">
            {rentalCategories.map((category) => {
              const Icon = category.icon;
              return (
                <section key={category.title}>
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8">
                    <div className="flex-shrink-0 bg-mer-orange/10 p-4 rounded-full border-2 border-mer-orange">
                      <Icon className="w-8 h-8 text-mer-orange" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-center md:text-left">{category.title}</h3>
                      <p className="text-lg text-gray-400 mt-2 max-w-2xl text-center md:text-left">{category.description}</p>
                    </div>
                  </div>

                  {/* Image Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.images.map((src, index) => (
                      <div key={index} className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg shadow-2xl group">
                        <Image
                          src={src}
                          alt={`${category.title} example ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                         <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="text-center mt-8">
                    <a
                      href={category.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-mer-orange text-white font-bold text-lg px-8 py-3 rounded-md shadow-lg hover:bg-mer-orange/80 transition-all duration-300 transform hover:scale-105"
                    >
                      {category.ctaText}
                    </a>
                  </div>
                </section>
              );
            })}
          </div>
        </main>
      </div>

      {/* Ticker */}
      <div className="absolute inset-x-0 bottom-0 z-[19] w-full">
        <Ticker className="relative z-20" />
      </div>
    </div>
  );
}