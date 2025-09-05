import { Montserrat } from "next/font/google";

export const fontMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: 'swap',
});