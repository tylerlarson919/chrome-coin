import { Hero } from "@/components/Hero";
import { Shop } from "@/components/Shop";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full px-4 md:px-12">
        <Hero />
        <Shop />
      </div>
      <div className="w-full px-4 md:px-12 bg-white">
        <About />
        <Testimonials />
      </div>
    </div>
  );
}