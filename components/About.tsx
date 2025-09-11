// components/About.tsx
import Image from "next/image";

export const About = () => {
  const artistImageUrl =
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757276636/IMG_6525_1_ayxvdw.jpg";

  return (
    <section id="about" className="overflow-hidden pb-0 ">
      <div className="mx-auto max-w-8xl px-0 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-8xl text-center md:mb-20">
          <div className="flex flex-col items-center justify-start gap-2">
            <div className="flex flex-col items-center pt-4 w-full">
              <Image
                src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757552472/artist_zwvehl.svg"
                alt="Artist"
                width={700}
                height={70}
                className="w-full max-w-[500px] h-auto object-contain invert"
              />
            </div>
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-purple-400 shadow-lg">
              <Image
                src={artistImageUrl}
                alt="Meet the artist, Ivan Passerni"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center sm:text-left mt-4">
              <p className="text-lg font-bold tracking-widest text-purple-400 md:text-xl">
                IVAN PASSERNI
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-left text-md leading-relaxed text-zinc-400 ">
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

        <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-16">
          <div className="flex flex-col items-center">
              <p className="mb-4 text-2xl font-bold tracking-widest text-zinc-200 lg:text-3xl">
                DELUXE EDITION
              </p>
              <div className="relative w-full aspect-square overflow-hidden rounded-xl border-4 border-transparent bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-400 [mask-composite:exclude_padding] [mask:linear-gradient(white_0_0)] md:h-[28rem] md:w-[28rem] md:aspect-auto">
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
                    alt="$CHROME Deluxe Edition NFT"
                    width={100}
                    height={100}
                    className="h-24 w-24 object-contain md:h-32 md:w-32"
                  />
                </div>
              </div>
              <p className="mt-4 text-lg md:text-xl tracking-widest text-zinc-200 whitespace-nowrap">
                COMING SOON...
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};