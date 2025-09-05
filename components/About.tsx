
export const About = () => {
  return (
    <section id="about" className="pt-4 md:pt-10">
      <div className="">
        <div className="text-left mb-12">
          <p className="text-pixel-green font-bold tracking-widest">
            OUR STORY
          </p>
          <h2 className="text-4xl font-extrabold text-zinc-800">
            WHAT IS PIXEL WORLD?
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            In a forgotten corner of the blockchain, a single pixel blinked into
            existence. Soon, an entire 8-bit universe was born — Pixel World.
            It's a throwback to simpler times. A digital realm powered by
            nostalgia, memes, and zero-utility fun. We're not here to change
            the world, just to pixelate it.
          </p>
        </div>

        <div className="relative flex items-center justify-center h-[256px] md:h-[600px] bg-zinc-100 rounded-2xl shadow-inner overflow-hidden">
          <video
            src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757031116/1739080017582903615_tlykdg.webm"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};