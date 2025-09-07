"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ClaimNft } from "./ClaimNft";
import { Slots } from "@/components/Slots";

export const Shop = () => {
  const [isNftClaimed, setIsNftClaimed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause

  // Create the audio object and add event listener for when the song ends
  useEffect(() => {
    const audio = new Audio("/nft-song.mp3");
    audioRef.current = audio;

    const handleSongEnd = () => setIsPlaying(false);
    audio.addEventListener("ended", handleSongEnd);

    // Cleanup function
    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleSongEnd);
    };
  }, []);

  const handleClaimSuccess = () => {
    setIsNftClaimed(true);
  };

  // Toggles the song and updates the icon state
  const handleSneakPeekClick = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="shop" className="relative overflow-hidden pb-12 md:pb-20">
      <div className="mx-auto max-w-8xl px-4 pt-12 md:px-12 md:pt-20">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-16">
          {/* --- Left Column --- */}
          <div className="flex flex-col gap-8 md:gap-16 h-full md:justify-between">
            <div className="order-1 text-center md:text-left">
              <h2 className="text-4xl font-bold tracking-tight text-zinc-200 lg:text-5xl">
                THE COLLECTION IS RENDERING
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-400 md:mx-0 md:text-lg">
                200 rare NFTs dropping 9/14/25.
              </p>
            </div>

            {/* Block 2: Sneak Peek Video */}
            <div
              className="order-3 cursor-pointer self-center transition-transform duration-200 hover:scale-[1.02] md:order-2 md:self-start"
              onClick={handleSneakPeekClick}
            >
              <div className="relative h-96 w-96 overflow-hidden rounded-xl border-4 border-transparent bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-400 [mask-composite:exclude_padding] [mask:linear-gradient(white_0_0)] md:h-[28rem] md:w-[28rem]">
                <video
                  src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757031113/-6403127588060313866_jkuyuo.webm"
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
                    className="mb-2 h-24 w-24 object-contain md:h-32 md:w-32"
                  />
                  <p className="mt-2 text-lg font-bold text-white md:text-xl">
                    Sneak Peek NFT
                  </p>
                </div>
                {/* --- Play/Pause Icon --- */}
                <div className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm">
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm9 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column --- */}
          <div className="order-2 flex flex-col items-center gap-8 md:order-3 md:items-center md:gap-16">
            <div className="w-full">
              <ClaimNft onClaimSuccess={handleClaimSuccess} />
            </div>
            <Slots isClaimed={isNftClaimed} />
          </div>
        </div>
      </div>
    </section>
  );
};