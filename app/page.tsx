import { Hero } from "@/components/Hero";
import { Shop } from "@/components/Shop";
import { About } from "@/components/About";
import { PixelPlan } from "@/components/PixelPlan";
import { HowToBuy } from "@/components/HowToBuy";
import { Ticker } from "@/components/Ticker";

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Ticker />

      {/* Section with video background */}
      <div className="relative isolate">
        {/* Background video and overlay container */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <video
            src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757108753/e3ea45e3-8fd0-9dfb-6a80-a0585584573d_custom_ngik6d.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Page content on top of video */}
        <div className="w-full">
          <Shop />
        </div>
        <div className="w-full px-4 md:px-12 pb-8 md:pb-12">
          <About />
          <PixelPlan />
        </div>
      </div>

      {/* Content after the video background section */}
      <div className="w-full px-4 md:px-12">
        <HowToBuy />
      </div>
    </div>
  );
}