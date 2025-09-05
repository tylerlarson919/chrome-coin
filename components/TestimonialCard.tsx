import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

interface TestimonialCardProps {
  name: string;
  avatar: string;
  stars: number;
  text: string;
}

export const TestimonialCard = ({ name, avatar, stars, text }: TestimonialCardProps) => {
  return (
    <div className="relative bg-pixel-green text-white px-6 pt-8 pb-6 rounded-xl shadow-lg h-full flex flex-col border-2 border-green-500">
      {/* Profile Icon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-pixel-green rounded-full p-2">
          <Image
            src={avatar}
            alt={name}
            width={72}
            height={72}
            className="rounded-full border-2 border-white"
          />
        </div>
      </div>

      {/* Name and Stars */}
      <div className="flex flex-col items-center mb-4 mt-4">
        <h4 className="font-bold text-lg">{name}</h4>
        <div className="flex mt-1">
          {Array.from({ length: stars }).map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-yellow-300" />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-white/90 flex-grow text-left">{text}</p>
    </div>
  );
};