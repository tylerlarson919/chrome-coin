// components/ChromePlan.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const TYPEWRITER_TEXT = "WE OWN 12% OF SUPPLY.\nSEND IT.";
const TYPING_SPEED = 120;
const DELETING_SPEED = 70;
const DELAY_AFTER_TYPING = 2000;

export const ChromePlan = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Case 1: Finished typing, now pausing before deleting
    if (!isDeleting && displayedText === TYPEWRITER_TEXT) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, DELAY_AFTER_TYPING);
    }
    // Case 2: Finished deleting, start typing again
    else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
    }
    // Case 3: Actively typing or deleting
    else {
      timer = setTimeout(
        () => {
          if (isDeleting) {
            setDisplayedText((current) =>
              current.substring(0, current.length - 1)
            );
          } else {
            setDisplayedText(
              TYPEWRITER_TEXT.substring(0, displayedText.length + 1)
            );
          }
        },
        isDeleting ? DELETING_SPEED : TYPING_SPEED
      );
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting]);

  return (
    <section id="chromeplan" className="pb-10 pt-16 md:pt-24">
      <div className="text-left mb-8 md:mb-12">
        <p className="text-purple-400 font-bold tracking-widest text-lg md:text-xl text-center">
          CHROMENOMICS
        </p>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center gap-8 text-center min-h-[400px]">
        <Image
          src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757718129/chrome-rotate-logo_dtpgip.gif"
          alt="$Chrome Logo rotate"
          width={250}
          height={250}
          unoptimized
          className="h-[200px] w-[200px] md:h-[250px] md:w-[250px] mb-4 rounded-md"
        />
        <div className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 h-[120px] md:h-[150px]">
          <span className="whitespace-pre-line">{displayedText}</span>
          <span className="text-purple-400 animate-pulse">|</span>
        </div>
      </div>
    </section>
  );
};