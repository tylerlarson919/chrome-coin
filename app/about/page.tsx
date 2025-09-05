import Image from "next/image";
import { FaCube, FaPaintBrush, FaGlobe } from "react-icons/fa";

const corePrinciples = [
    {
        icon: FaCube,
        title: "Simplicity First",
        description: "In a world of complex DeFi protocols, we embrace the simple joy of pixels. No convoluted roadmaps, just pure, unadulterated nostalgia."
    },
    {
        icon: FaPaintBrush,
        title: "Community Canvas",
        description: "Pixel World is a collaborative project. Our community members are the artists, meme-makers, and storytellers who bring our 8-bit universe to life."
    },
    {
        icon: FaGlobe,
        title: "Digital Playground",
        description: "We're building a space for fun and creativity. Whether it's through our upcoming NFTs or community events, Pixel World is your escape to a simpler digital time."
    }
];

export default function AboutPage() {
    return (
        <div className="  pb-24 sm:pb-32 pt-8 font-montserrat ">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-base font-semibold leading-7 text-pixel-green tracking-widest">
                        OUR STORY
                    </p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight  sm:text-6xl">
                        From a Single Pixel
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-500">
                        In a forgotten corner of the blockchain, a single pixel blinked into existence. It wasn't trying to revolutionize finance or disrupt an industry. It was just... there. But it was soon joined by another, and another, until an entire 8-bit universe was born: <strong>Pixel World</strong>.
                    </p>
                </div>
            </div>

            <div className="relative overflow-hidden py-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Image
                        src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757009173/2_hawznl.jpg"
                        alt="Pixel World Landscape"
                        width={2432}
                        height={1442}
                        className="rounded-xl"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 px-6 lg:px-8">
                <div className="max-w-3xl mx-auto lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight  sm:text-5xl">The Philosophy of the Pixel</h2>
                    <p className="mt-6 text-lg leading-8 text-zinc-500">
                        We're a throwback to simpler times—a digital realm powered by nostalgia, memes, and zero-utility fun. We're not here to change the world, just to pixelate it, one block at a time.
                    </p>
                </div>
                <div className="mt-16 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {corePrinciples.map((principle) => (
                            <div 
                                key={principle.title} 
                                className="rounded-lg border-4 border-black bg-white/95 p-6 backdrop-blur-sm shadow-[6px_6px_0_#16a34a] flex flex-col text-center transition-transform hover:scale-105 hover:-translate-y-2"
                            >
                                <principle.icon className="text-5xl mx-auto mb-4 text-pixel-green" aria-hidden="true" />
                                <h4 className="font-montserrat text-xl font-bold text-black">{principle.title}</h4>
                                <p className="font-montserrat text-sm mt-2 flex-grow text-zinc-700">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}