"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaCube, FaPaintBrush, FaGlobe } from "react-icons/fa";
import { Slideshow } from "@/components/Slideshow";

const corePrinciples = [
    {
        icon: FaCube,
        title: "Simplicity is Our Code",
        description: "In a world of over-engineered protocols and confusing whitepapers, we embrace the elegance of the 8-bit aesthetic. Our mission is clear, our community is open, and our only goal is to create."
    },
    {
        icon: FaPaintBrush,
        title: "Community Canvas",
        description: "Pixel World is a collaborative project. Every citizen—every artist, meme-maker, and storyteller—holds the brush. You are the architects of this universe."
    },
    {
        icon: FaGlobe,
        title: "A Digital Arcade",
        description: "We are building a space for creativity and fun. From our upcoming NFT mints to community-led events and contests, Pixel World is your escape to a simpler digital era."
    }
];

// Media for the alternating grid
const galleryImages = [
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757033000/photo_2023-01-26_09-55-14_hjelge.jpg",
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757033001/IMG_6470_ulzeec.jpg",
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757032998/IMG_6485_z1bfck.jpg",
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757032997/IMG_6472_aeimln.jpg",
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757032999/IMG_6486_iekidg.jpg",
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757032997/IMG_6471_v2dsy5.jpg",
];

const galleryVideos = [
    "https://res.cloudinary.com/dqedckeaa/video/upload/v1757033277/-6348188285222556176_k6ynrj.webm",
    "https://res.cloudinary.com/dqedckeaa/video/upload/v1757033296/8666990554708329998_uigqcb.webm",
    "https://res.cloudinary.com/dqedckeaa/video/upload/v1757031116/-8652648916557767945_kcfia3.webm",
    "https://res.cloudinary.com/dqedckeaa/video/upload/v1757031116/1739080017582903615_tlykdg.webm",
    "https://res.cloudinary.com/dqedckeaa/video/upload/v1757033453/5929365956074049906_ngcu6r.webm",
    "https://res.cloudinary.com/dqedckeaa/video/upload/v1757031118/-5325187677875775982_cqagqg.webm",
];

type MediaItemType = { type: 'image' | 'video'; src: string };

// Desktop Mixed Media: ensures all images and videos are included
const desktopMixedMedia: MediaItemType[] = [];
const minLength = Math.min(galleryImages.length, galleryVideos.length);

for (let i = 0; i < minLength; i++) {
    desktopMixedMedia.push({ type: "image", src: galleryImages[i] });
    desktopMixedMedia.push({ type: "video", src: galleryVideos[i] });
}
// Add any remaining images or videos
if (galleryImages.length > minLength) {
    desktopMixedMedia.push(...galleryImages.slice(minLength).map(src => ({ type: "image" as const, src })));
}
if (galleryVideos.length > minLength) {
    desktopMixedMedia.push(...galleryVideos.slice(minLength).map(src => ({ type: "video" as const, src })));
}

// Media for MOBILE: I, V, V, I, I, V...
const mobileMixedMedia: MediaItemType[] = [
    { type: "image", src: galleryImages[0] },
    { type: "video", src: galleryVideos[0] },
    { type: "video", src: galleryVideos[1] },
    { type: "image", src: galleryImages[1] },
    { type: "image", src: galleryImages[2] },
    { type: "video", src: galleryVideos[2] },
    { type: "video", src: galleryVideos[3] },
    { type: "image", src: galleryImages[3] },
    { type: "image", src: galleryImages[4] },
    { type: "video", src: galleryVideos[4] },
    { type: "video", src: galleryVideos[5] },
    { type: "image", src: galleryImages[5] },
];

// Images for the 16:9 slideshow
const slideshowImages = [
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757009173/3_eg6qp0.jpg",
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757009173/1_ocwafx.jpg",
    "https://res.cloudinary.com/dqedckeaa/image/upload/v1757009173/2_hawznl.jpg",
];

const MediaItem = ({ item, index, onOpen }: { item: MediaItemType, index: number, onOpen: (item: MediaItemType) => void }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // This effect creates and manages the Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update state based on whether the element is in the viewport
                setIsIntersecting(entry.isIntersecting);
            },
            { 
                rootMargin: "0px",
                threshold: 0.1 // Trigger when 10% of the item is visible
            } 
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // This effect plays or pauses the video based on the intersection state
    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            if (isIntersecting) {
                videoElement.play().catch(error => {
                    // Autoplay was prevented, which can happen on mobile.
                    // The video will wait for user interaction.
                    console.error("Video autoplay prevented:", error);
                });
            } else {
                videoElement.pause();
            }
        }
    }, [isIntersecting]);

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden rounded-xl aspect-[4/3] bg-zinc-800 animate-fade-in-stagger cursor-pointer transition-transform hover:scale-105"
            style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
            onClick={() => onOpen(item)}
        >
            {item.type === 'image' ? (
                <Image
                    src={item.src}
                    alt={`Gallery image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                />
            ) : (
                <video
                    ref={videoRef}
                    src={item.src}
                    // Generate a poster image by replacing the video extension with .jpg
                    poster={item.src.replace(/\.webm$/, '.jpg')}
                    loop
                    muted
                    playsInline
                    // Only preload metadata, not the full video file
                    preload="metadata"
                    className="w-full h-full object-cover"
                />
            )}
        </div>
    );
};

export default function AboutPage() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItemType | null>(null);

    const openLightbox = (item: MediaItemType) => setSelectedMedia(item);
    const closeLightbox = () => setSelectedMedia(null);

    return (
        <div className="pb-24 sm:pb-32 pt-8 font-montserrat">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-base font-semibold leading-7 text-pixel-green tracking-widest">
                        OUR STORY
                    </p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                        The World Booted Up
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-500">
                        In a forgotten corner of the blockchain, a single pixel blinked into existence. It carried no complex code, no promise of revolutionizing finance. Its purpose was simple: to be the first block. Soon, others followed, drawn by a shared sense of nostalgia. Together, they formed an entire 8-bit universe: <strong>Pixel World</strong>.
                    </p>
                </div>
            </div>
            
            {/* Mixed Media Gallery */}
            <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
                {/* Mobile Grid (2 columns) */}
                <div className="grid grid-cols-2 gap-4 md:hidden">
                    {mobileMixedMedia.map((item, index) => (
                        <MediaItem key={`mob-${index}`} item={item} index={index} onOpen={openLightbox} />
                    ))}
                </div>

                {/* Desktop Grid (3 or 4 columns) */}
                <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {desktopMixedMedia.map((item, index) => (
                        <MediaItem key={`desk-${index}`} item={item} index={index} onOpen={openLightbox} />
                    ))}
                </div>
            </div>

            {/* Slideshow Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Slideshow images={slideshowImages} />
            </div>

            <div className="max-w-7xl mx-auto mt-24 px-6 lg:px-8">
                <div className="max-w-3xl mx-auto lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">The Pixel Philosophy</h2>
                    <p className="mt-6 text-lg leading-8 text-zinc-500">
                        We are a monument to simpler times. A digital realm powered by retro gaming culture, memes, and zero-pressure fun. We&apos;re not here to build the future of finance; we&apos;re here to pixelate the present, one block at a time.
                    </p>
                </div>
                <div className="mt-16 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {corePrinciples.map((principle) => (
                            <div 
                                key={principle.title} 
                                className="rounded-lg border-4 border-black bg-white/95 p-6 backdrop-blur-sm shadow-[6px_6px_0_#63c79a] flex flex-col text-center transition-transform hover:scale-105 hover:-translate-y-2"
                            >
                                <principle.icon className="text-5xl mx-auto mb-4 text-pixel-green" aria-hidden="true" />
                                <h4 className="font-montserrat text-xl font-bold text-black">{principle.title}</h4>
                                <p className="font-montserrat text-sm mt-2 flex-grow text-zinc-700">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Lightbox */}
             {selectedMedia && (
                <div 
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-[200] p-4 animate-fade-in-stagger" // Added fade-in-stagger for lightbox
                    style={{ animationDelay: '0ms', opacity: 0 }} // Ensures it starts hidden and fades in
                    onClick={closeLightbox}
                >
                    <button 
                        className="absolute top-4 right-5 text-white text-5xl font-light z-50"
                        onClick={closeLightbox}
                        aria-label="Close media view"
                    >
                        &times;
                    </button>
                    
                    {/* Media Container */}
                    <div 
                        className="relative max-w-full max-h-full"
                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the media
                    >
                        {selectedMedia.type === 'image' ? (
                            <img 
                                src={selectedMedia.src} 
                                alt="Lightbox view" 
                                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                            />
                        ) : (
                            <video 
                                src={selectedMedia.src} 
                                controls 
                                autoPlay 
                                loop
                                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}