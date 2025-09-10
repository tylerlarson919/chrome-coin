// app/page.tsx
import { Hero } from "@/components/Hero";
import { Shop } from "@/components/Shop";
import { About } from "@/components/About";
import { ChromePlan } from "@/components/ChromePlan";
import { HowToBuy } from "@/components/HowToBuy";
import { Ticker } from "@/components/Ticker";

export default function HomePage() {
  // The `overflow-x-hidden` class has been removed here to allow sticky positioning to work.
  return (
    <div className="w-full">
      <Hero />
      <Ticker />

      {/* This parent wrapper defines the scroll area for the effect */}
      <div className="relative">
        {/*
          This is the video container. The `sticky` class is what achieves the effect you described.
          It will scroll normally ("act like relative") until it hits the top of the viewport,
          at which point it will "stop at the top of the screen".
        */}
        <div aria-hidden="true" className="sticky top-0 -z-10 h-screen">
          <video
            src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757507060/1_xeonc9.webm"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/*
          This is the content that scrolls on top of the video.
          It is positioned to perfectly overlay the video area while scrolling.
        */}
        <div className="relative mt-[-100vh]">
          <div className="w-full">
            <Shop />
          </div>
          <div className="w-full px-4 md:px-12 pb-8 md:pb-12">
            <About />
            <ChromePlan />
          </div>
        </div>
      </div>

      {/*
        This content is outside the parent wrapper. It appears after the effect is complete,
        once the ChromePlan section is scrolled past and the video begins to "act like relative again".
      */}
      <div className="w-full px-4 md:px-12">
        <HowToBuy />
      </div>
    </div>
  );
}