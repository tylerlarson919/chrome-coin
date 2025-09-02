"use client";
import { Ticker } from "@/components/Ticker";
import { SwapWidget } from "@/components/SwapWidget";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const contractAddress = process.env.NEXT_PUBLIC_BOPCOIN_MINT_ADDRESS || "";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white font-poppins mt-24">
      {/* Hero Section - Now full-width */}
      <section
        className="relative w-full flex items-center justify-center text-center min-h-[500px] md:min-h-[600px]"
      >
        <Image
          src="https://res.cloudinary.com/dqedckeaa/image/upload/v1756825797/MER-night-ride_ijrgnv.jpg"
          alt="Exotic car driving at night"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="brightness-[0.8]"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">$MER Utility Token</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Swap SOL for $MER and unlock exclusive luxury rentals of exotic cars, yachts, and houses with Miami Exotic Rents.
          </p>
        </div>
      </section>
      {/* Container for the rest of the page content */}
      <div className="container mx-auto px-4 py-16 md:py-24">

        {/* Services Section */}
        <section className="">
          <div className="container mx-auto flex flex-col items-center">
            <div className="row justify-content-center mb-5 flex justify-center mb-8">
              <div className="col-md-7 text-center heading-section">
                <span className="text-[22px] text-mer-orange uppercase tracking-widest font-semibold">Services</span>
                <h2 className="mt-4 mb-10 text-3xl md:text-[40px] font-semibold">Our Latest Services</h2>
              </div>
            </div>
            <div className="row grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-md-4">
                <div className="services services-2 w-full text-center">
                  <div className="flex items-center justify-center size-[110px] mx-auto mb-4 bg-mer-orange rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="60" height="60" viewBox="0 0 256 256" xmlSpace="preserve">
                      <defs></defs>
                      <g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                        <path d="M 72.114 75.157 c -4.875 0 -8.841 -3.966 -8.841 -8.841 s 3.966 -8.841 8.841 -8.841 s 8.841 3.966 8.841 8.841 S 76.989 75.157 72.114 75.157 z M 72.114 61.476 c -2.669 0 -4.841 2.172 -4.841 4.841 s 2.172 4.841 4.841 4.841 s 4.841 -2.172 4.841 -4.841 S 74.783 61.476 72.114 61.476 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 19.254 75.157 c -4.875 0 -8.841 -3.966 -8.841 -8.841 s 3.966 -8.841 8.841 -8.841 s 8.841 3.966 8.841 8.841 S 24.129 75.157 19.254 75.157 z M 19.254 61.476 c -2.669 0 -4.841 2.172 -4.841 4.841 s 2.172 4.841 4.841 4.841 s 4.841 -2.172 4.841 -4.841 S 21.924 61.476 19.254 61.476 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 85.631 68.617 h -6.676 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 6.676 c 0.203 0 0.369 -0.166 0.369 -0.369 v -8.469 c 0 -0.49 -0.349 -0.916 -0.829 -1.014 l -16.73 -3.394 c -1.083 -0.22 -1.782 -1.275 -1.563 -2.357 s 1.278 -1.782 2.357 -1.563 l 16.731 3.394 C 88.304 51.32 90 53.395 90 55.779 v 8.469 C 90 66.657 88.04 68.617 85.631 68.617 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 65.285 68.617 h -39.2 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 39.2 c 1.104 0 2 0.896 2 2 S 66.39 68.617 65.285 68.617 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 12.413 68.317 c -0.237 0 -0.478 -0.043 -0.713 -0.133 L 1.287 64.21 C 0.512 63.914 0 63.171 0 62.342 V 51.474 c 0 -2.187 1.567 -4.019 3.727 -4.356 l 9.892 -1.552 l 4.876 -4.708 c 2.212 -2.136 4.968 -3.621 7.968 -4.293 c 1.079 -0.241 2.147 0.437 2.389 1.514 c 0.241 1.078 -0.437 2.147 -1.514 2.389 c -2.284 0.512 -4.381 1.642 -6.065 3.267 l -5.331 5.147 c -0.296 0.286 -0.673 0.474 -1.079 0.537 L 4.346 51.068 C 4.146 51.1 4 51.271 4 51.474 v 9.491 l 9.126 3.483 c 1.032 0.394 1.549 1.55 1.155 2.581 C 13.977 67.827 13.218 68.317 12.413 68.317 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 68.837 51.412 c -0.429 0 -0.86 -0.137 -1.225 -0.419 l -7.553 -5.856 c -0.873 -0.677 -1.032 -1.933 -0.355 -2.806 c 0.678 -0.874 1.935 -1.032 2.807 -0.355 l 7.553 5.855 c 0.873 0.677 1.032 1.934 0.355 2.807 C 70.024 51.146 69.434 51.412 68.837 51.412 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 45 53.575 c -0.234 0 -0.467 -0.041 -0.69 -0.123 c -9.256 -3.403 -15.475 -12.973 -15.475 -23.813 v -6.834 c 0 -0.887 0.583 -1.667 1.434 -1.918 c 2.195 -0.647 3.962 -2.414 4.609 -4.609 c 0.251 -0.851 1.032 -1.434 1.918 -1.434 h 16.407 c 0.887 0 1.667 0.583 1.918 1.434 c 0.648 2.195 2.414 3.962 4.61 4.609 c 0.85 0.251 1.434 1.032 1.434 1.918 v 6.834 c 0 10.84 -6.219 20.41 -15.475 23.813 C 45.467 53.534 45.234 53.575 45 53.575 z M 32.834 24.188 v 5.451 c 0 8.75 4.967 16.769 12.166 19.788 c 7.198 -3.019 12.165 -11.037 12.165 -19.788 v -5.451 c -2.373 -1.08 -4.266 -2.973 -5.346 -5.346 H 38.18 C 37.101 21.216 35.208 23.109 32.834 24.188 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 42.687 40.516 c -0.018 0 -0.035 0 -0.053 0 c -0.592 -0.016 -1.147 -0.293 -1.515 -0.757 l -4.024 -5.077 c -0.686 -0.866 -0.541 -2.124 0.325 -2.81 c 0.865 -0.688 2.123 -0.541 2.81 0.325 l 2.539 3.203 l 7.069 -8.012 c 0.73 -0.827 1.995 -0.908 2.823 -0.176 c 0.828 0.73 0.907 1.995 0.177 2.823 l -8.652 9.805 C 43.806 40.27 43.259 40.516 42.687 40.516 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="text w-full">
                    <h3 className="heading mb-2 text-[17px] font-regular">Exotic Car Rentals</h3>
                    <p className="text-[#999999] leading-relaxed">Choose from Miami's most exclusive fleet of exotic cars, each meticulously maintained for a premium driving experience.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="w-full text-center">
                  <div className="flex items-center justify-center size-[110px] mx-auto mb-4 bg-mer-orange rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="60" height="60" viewBox="0 0 256 256" xmlSpace="preserve">
                      <defs></defs>
                      <g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                        <path d="M 29.794 73.729 H 15.846 V 59.935 h 13.948 V 73.729 z M 18.846 70.762 h 7.948 v -7.86 h -7.948 V 70.762 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 74.794 73.729 H 60.847 V 59.935 h 13.947 V 73.729 z M 63.847 70.762 h 7.947 v -7.86 h -7.947 V 70.762 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 29.485 20.322 H 15.538 V 6.528 h 13.948 V 20.322 z M 18.538 17.355 h 7.948 v -7.86 h -7.948 V 17.355 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 47.485 20.322 H 33.538 V 6.528 h 13.948 V 20.322 z M 36.538 17.355 h 7.948 v -7.86 h -7.948 V 17.355 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 29.485 38.125 H 15.538 V 24.33 h 13.948 V 38.125 z M 18.538 35.158 h 7.948 v -7.86 h -7.948 V 35.158 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 47.485 38.125 H 33.538 V 24.33 h 13.948 V 38.125 z M 36.538 35.158 h 7.948 v -7.86 h -7.948 V 35.158 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 29.485 55.927 H 15.538 V 42.132 h 13.948 V 55.927 z M 18.538 52.96 h 7.948 v -7.86 h -7.948 V 52.96 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 47.485 55.927 H 33.538 V 42.132 h 13.948 V 55.927 z M 36.538 52.96 h 7.948 v -7.86 h -7.948 V 52.96 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 74.485 38.125 H 60.538 V 24.33 h 13.947 V 38.125 z M 63.538 35.158 h 7.947 v -7.86 h -7.947 V 35.158 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 74.485 55.927 H 60.538 V 42.132 h 13.947 V 55.927 z M 63.538 52.96 h 7.947 v -7.86 h -7.947 V 52.96 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 82.467 87.033 V 17.355 H 55.533 V 0 h -48 v 87.033 H 2 V 90 h 31.846 h 13.948 H 88 v -2.967 H 82.467 z M 79.467 20.322 v 66.711 H 55.533 V 20.322 H 79.467 z M 36.846 87.033 V 62.902 h 7.948 v 24.131 H 36.846 z M 33.846 59.935 v 27.098 H 10.533 V 2.967 h 42 v 84.066 h -4.739 V 59.935 H 33.846 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="text w-full">
                    <h3 className="heading mb-2 text-[17px] font-regular">Luxury Apartment/Home Rentals</h3>
                    <p className="text-[#999999] leading-relaxed">Enjoy luxury living in Miami's finest apartments and homes, offering comfort, style, and prime locations for your stay.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="w-full text-center">
                  <div className="flex items-center justify-center size-[110px] mx-auto mb-4 bg-mer-orange rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="60" height="60" viewBox="0 0 256 256" xmlSpace="preserve">
                      <defs></defs>
                      <g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                        <path d="M 89.846 70.695 c -0.363 -0.734 -1.254 -1.036 -1.988 -0.672 c -6.19 3.061 -12.901 4.57 -20.074 4.539 l 7.303 -24.954 c 0.221 -0.755 -0.186 -1.552 -0.929 -1.815 l -7.346 -2.599 V 23.937 c 0 -0.819 -0.664 -1.483 -1.483 -1.483 h -5.121 V 11.486 c 0 -0.819 -0.664 -1.484 -1.484 -1.484 H 46.484 V 4.056 c 0 -0.819 -0.664 -1.484 -1.484 -1.484 s -1.484 0.664 -1.484 1.484 v 5.946 H 31.276 c -0.819 0 -1.484 0.664 -1.484 1.484 v 10.968 h -5.121 c -0.819 0 -1.484 0.664 -1.484 1.483 v 21.257 l -7.346 2.599 c -0.742 0.263 -1.15 1.06 -0.929 1.815 l 4.671 15.962 C 13.5 66.017 7.307 67.473 0.942 69.972 c -0.763 0.299 -1.138 1.161 -0.839 1.923 c 0.299 0.763 1.158 1.136 1.923 0.839 c 14.762 -5.796 28.543 -5.803 42.182 0.005 c 8.367 3.199 16.321 4.798 23.815 4.798 c 7.535 0 14.604 -1.619 21.15 -4.854 C 89.908 72.32 90.209 71.43 89.846 70.695 z M 32.759 12.97 h 24.482 v 9.484 H 32.759 V 12.97 z M 26.155 25.421 h 37.691 v 18.723 l -18.35 -6.492 c -0.014 -0.005 -0.029 -0.003 -0.043 -0.007 c -0.143 -0.046 -0.293 -0.078 -0.452 -0.078 s -0.309 0.032 -0.452 0.078 c -0.014 0.004 -0.029 0.002 -0.043 0.007 l -18.351 6.492 V 25.421 z M 22.634 65.429 l -4.479 -15.308 l 25.361 -8.972 v 19.596 c 0 0.819 0.664 1.483 1.484 1.483 s 1.484 -0.664 1.484 -1.483 V 41.15 l 25.362 8.972 l -7.119 24.328 c -6.159 -0.393 -12.637 -1.873 -19.408 -4.461 C 37.845 66.806 30.321 65.297 22.634 65.429 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 60.105 31.849 c 0 -0.819 -0.664 -1.483 -1.484 -1.483 H 31.379 c -0.819 0 -1.483 0.664 -1.483 1.483 s 0.664 1.483 1.483 1.483 h 27.242 C 59.44 33.332 60.105 32.668 60.105 31.849 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 52.265 16.519 h -14.53 c -0.819 0 -1.484 0.664 -1.484 1.484 c 0 0.819 0.664 1.483 1.484 1.483 h 14.53 c 0.819 0 1.484 -0.664 1.484 -1.483 C 53.749 17.183 53.084 16.519 52.265 16.519 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 35.11 46.972 c -2.385 0 -4.325 2.161 -4.325 4.817 s 1.94 4.817 4.325 4.817 c 2.385 0 4.325 -2.161 4.325 -4.817 S 37.495 46.972 35.11 46.972 z M 35.11 53.638 c -0.736 0 -1.358 -0.847 -1.358 -1.85 s 0.622 -1.85 1.358 -1.85 c 0.736 0 1.358 0.847 1.358 1.85 S 35.846 53.638 35.11 53.638 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 54.89 46.972 c -2.385 0 -4.325 2.161 -4.325 4.817 s 1.94 4.817 4.325 4.817 c 2.385 0 4.325 -2.161 4.325 -4.817 S 57.275 46.972 54.89 46.972 z M 54.89 53.638 c -0.736 0 -1.358 -0.847 -1.358 -1.85 s 0.622 -1.85 1.358 -1.85 c 0.736 0 1.358 0.847 1.358 1.85 S 55.626 53.638 54.89 53.638 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                        <path d="M 68.023 87.427 c -7.494 0 -15.448 -1.599 -23.815 -4.798 c -13.639 -5.807 -27.42 -5.801 -42.182 -0.005 c -0.765 0.298 -1.624 -0.076 -1.923 -0.839 c -0.299 -0.762 0.076 -1.624 0.839 -1.923 c 15.523 -6.095 30.038 -6.089 44.377 0.016 c 15.927 6.09 30.257 6.107 42.54 0.035 c 0.734 -0.362 1.625 -0.062 1.988 0.672 c 0.363 0.735 0.062 1.625 -0.672 1.988 C 82.628 85.808 75.559 87.427 68.023 87.427 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255, 255, 255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="text w-full">
                    <h3 className="heading mb-2 text-[17px] font-regular">Yacht Rentals</h3>
                    <p className="text-[#999999] leading-relaxed">Set sail on a private yacht and explore Miami's beautiful coastline with our top-tier yacht rental services.</p>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => window.open('https://miamiexoticrents.com', '_blank')} className="mt-8 bg-mer-orange text-white px-6 py-3 rounded-sm hover:bg-mer-orange/80 transition-all">Learn More</button>
          </div>
        </section>
      </div>
    {/* $MER Advantage Section */}
      <section
        className="relative w-full py-20 md:py-32 bg-cover bg-center mb-16"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dqedckeaa/image/upload/v1756825797/MER-Lambo-exchange_yzyvin.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-left">
          {/* New Header */}
          <div className="max-w-2xl mb-12">
            <span className="text-lg text-mer-orange uppercase tracking-widest font-semibold">
              The $MER Advantage
            </span>
            <h2 className="mt-2 text-3xl md:text-[40px] font-semibold text-white">
              Unlock a New Standard of Luxury
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Using the $MER token isn't just a transaction; it's your key to a world of exclusive benefits, efficiency, and security.
            </p>
          </div>
          
          {/* New Card Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white/5 rounded-lg border-2 border-mer-orange/40 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-mer-orange mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-white">Seamless & Secure</h3>
              <p className="text-gray-300">Fast, secure, and transparent transactions on the Solana blockchain.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white/5 rounded-lg border-2 border-mer-orange/40 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-mer-orange mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-white">Exclusive Access</h3>
              <p className="text-gray-300">Unlock high-end vehicles, properties, and yachts only for $MER holders.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white/5 rounded-lg border-2 border-mer-orange/40 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-mer-orange mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-white">Time & Cost Efficiency</h3>
              <p className="text-gray-300">Minimize traditional rental delays and fees with direct crypto transactions.</p>
            </div>
          </div>
        </div>
      </section>

        {/* Contract Address Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Official $MER Contract Address</h2>
          <div className="inline-flex items-center bg-[#1a1a1a] p-4 rounded-lg">
            <p className="text-sm md:text-base break-all mr-4">{contractAddress}</p>
            <button onClick={handleCopy} className="bg-mer-orange p-2 rounded-md hover:bg-mer-orange/80 transition-all">
              {copied ? "Copied!" : <ClipboardDocumentIcon className="w-6 h-6 text-white" />}
            </button>
          </div>
        </section>

        {/* Swap Widget Section */}
        <section className="mb-24 mt-8">
          <div className="max-w-md mx-auto">
            <SwapWidget />
          </div>
        </section>
      

      <div className="absolute inset-x-0 bottom-0 w-full pointer-events-none z-[19]">
        <Ticker className="relative z-20" />
      </div>
    </div>
  );
}