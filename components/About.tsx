
export const About = () => {
  return (
    <section id="about" className="pt-4 md:pt-10">
      <div className="">
        <div className="text-left mb-4 md:mb-6">
          <p className="text-pixel-green font-bold tracking-widest">
            OUR STORY
          </p>
          <h2 className="text-4xl font-extrabold text-zinc-800">
            WHAT IS PIXEL WORLD?
          </h2>
          <p className="mt-2 md:mt-4 md:text-lg text-zinc-600">
            It began with a single spark in the vastness of the blockchain. 
            A lone pixel that wasn't trying to change the world—just exist. But it wasn't alone 
            for long. More pixels joined, drawn together to create a vibrant, 8-bit universe: 
            Pixel World. This is a tribute to the golden age of gaming, powered by nostalgia, memes, 
            and the simple joy of creating something together. Here, we're offering a digital playground.
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