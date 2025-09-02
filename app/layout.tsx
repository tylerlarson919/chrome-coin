import "@/styles/globals.css";
import clsx from "clsx";
import { fontPoppins } from "@/config/fonts";
import { ClientLayoutWrapper } from "./ClientLayoutWrapper";
export { metadata } from "./metadata";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-black font-poppins antialiased",
          fontPoppins.variable
        )}
      >
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}