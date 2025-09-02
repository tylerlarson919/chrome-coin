// app/layout.tsx
import "@/styles/globals.css";
import clsx from "clsx";
import { fontComicNeue, fontLuckiestGuy, fontModak } from "@/config/fonts";
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
          "min-h-screen bg-transparent font-sans antialiased",
          fontComicNeue.variable,
          fontLuckiestGuy.variable,
          fontModak.variable
        )}
      >
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          <Analytics/>
          <SpeedInsights/>
      </body>
    </html>
  );
}