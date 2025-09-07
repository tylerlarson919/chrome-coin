import Image from "next/image";

export const About = () => {
  const gifUrl =
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757106215/Christopher_bscefz.png";
  const artistImageUrl =
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757276636/IMG_6525_1_ayxvdw.jpg";

  return (
    <section id="about" className="overflow-hidden py-12 md:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Top Section: Text Content */}
        <div className="mx-auto mb-12 max-w-8xl text-center md:mb-20">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6">
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-pixel-green shadow-lg">
              <Image
                src={artistImageUrl}
                alt="Meet the artist"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-lg font-bold tracking-widest text-pixel-green md:text-xl">
                MEET THE ARTIST
              </p>
              <h2 className="mt-2 text-4xl font-extrabold text-zinc-300 lg:text-5xl">
                IVAN PASSERNI
              </h2>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-left text-lg leading-relaxed text-zinc-400 sm:text-center">
            <p>
              When I was a little kid, school wasn&apos;t exactly easy for me. I
              was short, quieter, and different enough that it made me a
              target. I&apos;d get picked on in class, shoved in the halls, and
              sometimes I&apos;d just sit there pretending it didn&apos;t
              bother me, but it always did. I didn&apos;t know how to fight
              back, so instead I&apos;d go home and escape into my own world.
            </p>
            <p>
              That world was digital art. I remember the first time I opened up
              a drawing program on my old computer—it felt like a secret door
              nobody else knew about. I could sit there for hours, creating
              characters, little worlds, and scenes that made me feel powerful
              and safe. The bullies couldn&apos;t touch me there.
            </p>
            <p>
              As I got older, art stopped being just an escape and became my
              voice. Every piece I made was like reclaiming the confidence I
              lost in those classrooms and hallways. And even though the
              bullying hurt, I honestly think without it, I wouldn&apos;t have
              pushed myself to create the way I do today.
            </p>
          </div>
        </div>

        {/* Bottom Section: Visuals */}
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-16">
          {/* Left Column: Main Collection Video (Moved from Shop.tsx) */}
          <div className="relative h-96 w-96 overflow-hidden rounded-xl border-4 border-transparent bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-400 [mask-composite:exclude_padding] [mask:linear-gradient(white_0_0)] md:h-[28rem] md:w-[28rem]">
            <video
              src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757102714/4080777719242116802_1_ckcfj3.webm"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
              <Image
                src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757109618/lock_1_lfxkud.png"
                alt="Locked NFT"
                width={100}
                height={100}
                className="h-24 w-24 object-contain md:h-32 md:w-32"
              />
            </div>
          </div>

          {/* Right Column: Static Character Image */}
          <div className="relative h-96 w-96 overflow-hidden md:h-[28rem] md:w-[28rem]">
            <Image
              src={gifUrl}
              alt="Dancing Pixel Character"
              layout="fill"
              objectFit="cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};