"use client";

import { useState } from 'react';
import { type Swiper as SwiperClass } from 'swiper/types';
import { TestimonialCard } from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import "swiper/css";

const testimonials = [
  {
    name: "Zephyr",
    avatar: "https://res.cloudinary.com/dqedckeaa/image/upload/v1757009986/Zephyr_mnfquu.jpg",
    stars: 5,
    text: "The team is active, the memes are top-tier, and the concept is simple and fun. It's refreshing to be part of a project that knows exactly what it is—a tribute to the pixel art that started it all.",
  },
  {
    name: "Alex",
    avatar: "https://res.cloudinary.com/dqedckeaa/image/upload/v1757009987/Alex_erccfc.jpg",
    stars: 5,
    text: "Finally, a project that doesn't take itself too seriously. I swapped some SOL for $PIXEL and immediately felt at home in the community. No promises of lambos, just good times.",
  },
  {
    name: "Christopher",
    avatar: "https://res.cloudinary.com/dqedckeaa/image/upload/v1757009987/Christopher_jlwbyh.jpg",
    stars: 5,
    text: "I'm here for the community. It's a breath of fresh air to be in a group that's all about creativity, memes, and building a cool retro world. It’s a genuine digital hangout.",
  },
];

// 1. Duplicate the array to enable infinite looping on desktop
const loopedTestimonials = [...testimonials, ...testimonials];

export const Testimonials = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);

    return (
        <section className="pb-12 pt-4 md:pt-10 md:py-20 bg-white">
            <h2 className="text-4xl font-extrabold text-zinc-800 text-center mb-4 md:mb-6 px-4">
                What the Pixels are Saying
            </h2>
            <div className="max-w-8xl mx-auto relative px-4 md:px-16">
                <Swiper
                    onSwiper={setSwiper}
                    loop={true}
                    spaceBetween={32}
                    slidesPerView={1}
                    breakpoints={{
                        // Tablet view (md): 768px and up
                        768: {
                            slidesPerView: 2,
                        },
                        // Desktop view (lg): 1024px and up
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="w-full !pt-8"
                >
                    {/* 2. Map over the new duplicated array */}
                    {loopedTestimonials.map((testimonial, index) => (
                        <SwiperSlide key={`${testimonial.name}-${index}`} className="!h-auto p-4">
                            <TestimonialCard {...testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    onClick={() => swiper?.slidePrev()}
                    className="absolute top-1/2 -translate-y-1/2 -left-5 md:left-0 z-10 p-2 transition-transform hover:scale-125"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeftIcon className="h-10 w-10 text-pixel-green" strokeWidth={2}/>
                </button>

                <button
                    onClick={() => swiper?.slideNext()}
                    className="absolute top-1/2 -translate-y-1/2 -right-5 md:right-0 z-10 p-2 transition-transform hover:scale-125"
                    aria-label="Next testimonial"
                >
                    <ChevronRightIcon className="h-10 w-10 text-pixel-green" strokeWidth={2} />
                </button>
            </div>
        </section>
    );
};