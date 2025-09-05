"use client";

export const Shop = () => {
  return (
    <section
      id="shop"
      className="relative pb-12 md:pb-20 overflow-hidden"
    >
      
      <div className="max-w-8xl px-4 md:px-12 pt-12 md:pt-20">
        {/* Main layout container */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch justify-center gap-10 md:gap-16">
          {/* Left Side: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-200 tracking-tight">
              THE COLLECTION IS RENDERING
            </h2>
            <p className="mt-4 md:text-lg text-zinc-400 max-w-xl mx-auto md:mx-0">
              Secure your piece of the cosmos. The official Pixel World NFT
              collection is preparing for launch, offering verifiable ownership
              of unique, digitally-crafted assets from our 8-bit universe.
            </p>

            {/* Dancing pixel dude */}
            <div className="mt-8 mx-auto md:mx-0 w-fit">
              <video
                src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757031113/-6403127588060313866_jkuyuo.webm"
                autoPlay
                loop
                muted
                playsInline
                className="h-64 md:h-96 w-auto"
              />
            </div>
          </div>

          {/* Right Side: Main Video */}
          <div className="flex-1 flex justify-center md:justify-end">
            <video
              src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757102714/4080777719242116802_1_ckcfj3.webm"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-2xl w-full max-w-sm lg:max-w-xl border-4 border-zinc-800 md:h-full md:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};