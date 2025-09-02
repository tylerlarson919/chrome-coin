import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Luckiest_Guy,
  Comic_Neue,
  Modak,
} from "next/font/google";

export const fontModak = Modak({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-modak",
});

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontLuckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest",
});

export const fontComicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-comic-neue",
});