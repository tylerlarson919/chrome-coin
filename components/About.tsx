import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="pt-20">
      <div className="">
        <div className="text-left mb-12">
          <p className="text-pixel-green font-bold tracking-widest">
            OUR STORY
          </p>
          <h2 className="text-4xl font-extrabold text-zinc-800">
            WHAT IS PIXEL WORLD?
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            In a forgotten corner of the blockchain, a single pixel blinked into existence. Soon, an entire 8-bit universe was born — Pixel World. It's a throwback to simpler times. A digital realm powered by nostalgia, memes, and zero-utility fun. We're not here to change the world, just to pixelate it.
          </p>
        </div>

        <div className="relative flex items-center justify-center h-[256px] md:h-[512px] bg-zinc-100 rounded-2xl shadow-inner">
            {/* You can place an image carousel or a static image here */}
            <Image 
                src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757009173/2_hawznl.jpg"
                alt="Pixel art landscape"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};