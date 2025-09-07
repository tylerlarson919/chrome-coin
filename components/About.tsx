import Image from "next/image";

export const About = () => {
  const gifUrl =
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757106215/Christopher_bscefz.png";
  const artistImageUrl =
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757276636/IMG_6525_1_ayxvdw.jpg";

  return (
    <section id="about" className="pt-4 md:pt-10 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-12">
          {/* Left Section: Artist Image and Text Content */}
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              {/* Circular Image Wrapper */}
              <div className="relative w-32 h-32 flex-shrink-0 rounded-full overflow-hidden border-4 border-pixel-green shadow-lg">
                <Image
                  src={artistImageUrl}
                  alt="Meet the artist"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-pixel-green font-bold tracking-widest text-lg md:text-xl">
                  MEET THE ARTIST
                </p>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-300 mt-2">
                  IVAN PASSERNI
                </h2>
              </div>
            </div>

            {/* Description Paragraphs */}
            <div className="mt-6 md:mt-8 space-y-4 md:text-lg text-zinc-400 max-w-xl md:max-w-none mx-auto md:mx-0 leading-relaxed">
              <p>
                When I was a little kid, school wasn&apos;t exactly easy for me. I
                was short, quieter, and different enough that it made me a
                target. I&apos;d get picked on in class, shoved in the halls, and
                sometimes I&apos;d just sit there pretending it didn&apos;t bother me, but
                it always did. I didn&apos;t know how to fight back, so instead I&apos;d
                go home and escape into my own world.
              </p>
              <p>
                That world was digital art. I remember the first time I opened
                up a drawing program on my old computer—it felt like a secret
                door nobody else knew about. I could sit there for hours,
                creating characters, little worlds, and scenes that made me feel
                powerful and safe. The bullies couldn&apos;t touch me there.
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

          {/* Right Section: GIF */}
          <div className="flex-1 flex items-center justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src={gifUrl}
              alt="Dancing Pixel Character"
              width={400}
              height={400}
              unoptimized
              className="h-64 md:h-96 w-auto object-contain" // Ensures the GIF fits well
            />
          </div>
        </div>
      </div>
    </section>
  );
};