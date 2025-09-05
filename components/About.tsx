import Image from "next/image";

export const About = () => {
  const gifUrl =
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757106215/Christopher_bscefz.png";

  return (
    <section id="about" className="pt-4 md:pt-10 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-12">
          {/* Text Content - Left on Desktop, Top on Mobile */}
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <p className="text-pixel-green font-bold tracking-widest text-lg md:text-xl text-lg md:text-xl">
              OUR STORY
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-300 mt-2">
              WHAT IS PIXEL WORLD?
            </h2>
            <p className="mt-4 md:text-lg text-zinc-400 max-w-xl md:max-w-none mx-auto md:mx-0">
              It began with a single spark in the vastness of the blockchain. A
              lone pixel that wasn't trying to change the world—just exist. But
              it wasn't alone for long. More pixels joined, drawn together to
              create a vibrant, 8-bit universe: Pixel World.
            </p>
          </div>

          {/* GIF - Right on Desktop, Bottom/Centered on Mobile */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src={gifUrl}
              alt="Dancing Pixel Character"
              width={400} // Increased for better desktop scale
              height={400} // Increased for better desktop scale
              unoptimized
              className="h-64 md:h-96 w-auto" // Responsive height
            />
          </div>
        </div>
      </div>
    </section>
  );
};