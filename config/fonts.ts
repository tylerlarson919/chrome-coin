import { Poppins } from "next/font/google";

export const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap', // Added to prevent fallback to Times New Roman during load
});