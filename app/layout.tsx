import "@/styles/globals.css";
import clsx from "clsx";
import { fontMontserrat } from "@/config/fonts";
import { ClientLayoutWrapper } from "./ClientLayoutWrapper";
export { metadata } from "./metadata";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Background } from "@/components/Background";

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
          "min-h-screen bg-black font-montserrat antialiased",
          fontMontserrat.variable
        )}
      >
        {/* Add a relative wrapper to ensure content appears above the fixed background */}
        <main className="relative z-10">
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}