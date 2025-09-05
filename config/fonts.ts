// Example path: @/config/fonts.ts

import { Montserrat, Press_Start_2P, Pixelify_Sans } from "next/font/google";

export const fontMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

// Your original pixel font (Press Start 2P) is now aliased as fontPressStart for clarity
export const fontPixel = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
  display: "swap",
});

// ADD THIS: The new Pixelify Sans font
export const fontPixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixelify",
  display: "swap",
});