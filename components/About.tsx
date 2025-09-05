import Image from "next/image";

export const About = () => {
  const gifUrl =
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757103951/5472274962897794227-min_omhhxs.gif";

  return (
    <section id="about" className="pt-4 md:pt-10 overflow-hidden">
      <div className="">

        <div className="text-left mb-4 md:mb-6">
          <p className="text-pixel-green font-bold tracking-widest">
            OUR STORY
          </p>
          <h2 className="text-4xl font-extrabold text-zinc-300">
            WHAT IS PIXEL WORLD?
          </h2>
          <p className="mt-2 md:mt-4 md:text-lg text-zinc-400">
            It began with a single spark in the vastness of the blockchain. A
            lone pixel that wasn't trying to change the world—just exist. But
            it wasn't alone for long. More pixels joined, drawn together to
            create a vibrant, 8-bit universe: Pixel World. This is a tribute
            to the golden age of gaming, powered by nostalgia, memes, and the
            simple joy of creating something together. Here, we're offering a
            digital playground.
          </p>
        </div>
          {/* Centered GIF */}
        <div className="flex justify-center mt-6">
          <Image
            src={gifUrl}
            alt="Dancing Pixel Character"
            width={300}
            height={300}
            unoptimized
            className="h-64 md:h-96 w-auto"
          />
        </div>
      </div>
    </section>
  );
};