import { Image } from "@heroui/image";

export const Hero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[600px] bg-zinc-800 flex items-end justify-center overflow-hidden rounded-2xl">
      {/* Background video */}
      <video
        src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757031116/-8652648916557767945_kcfia3.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Subtle gradient overlay from bottom to top for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Container for the text, positioned at the bottom */}
      <div className="relative text-center p-8 md:pb-8 z-10">
        <Image
          src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757019941/px-white_2x_juk2c6.png"
          alt="Pixel World Logo"
          width={600}
          height={60}
          className="w-full max-w-lg h-auto"
        />
        <p className="mt-2 text-lg md:text-xl text-white/90 font-semibold drop-shadow-md">
           Build our universe, one block at a time.
        </p>
      </div>
    </section>
  );
};