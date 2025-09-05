import { FaTwitter, FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import { Testimonials } from '@/components/Testimonials';

const socialLinks = [
    {
        name: 'Twitter / X',
        handle: '@PixelWorldCoin',
        href: '#', // Replace with your Twitter link
        icon: FaTwitter,
        description: 'For the latest announcements, memes, and 280-character bursts of pixelated wisdom.',
        textColor: 'text-sky-500'
    },
    {
        name: 'Telegram',
        handle: 'Pixel World Official',
        href: '#', // Replace with your Telegram link
        icon: FaTelegramPlane,
        description: 'The main hub for live chats, real-time updates, and connecting with the core community.',
        textColor: 'text-sky-400'
    },
    {
        name: 'Discord',
        handle: 'Coming Soon',
        href: '#', // Replace with your Discord link
        icon: FaDiscord,
        description: 'A future home for dedicated channels on art, trading, NFTs, and more. Get ready!',
        textColor: 'text-indigo-500'
    },
];

export default function CommunityPage() {
    return (
        <div className="min-h-screen font-montserrat">
            {/* Hero Section */}
            <div className="pt-8 pb-16 sm:pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:gap-12">
                        {/* Left Side: Text */}
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                                Join the Pixel Republic
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-zinc-500">
                                Pixel World is more than a token; it's a community of creators, dreamers, and meme enthusiasts. Find your home in our digital nation.
                            </p>
                        </div>

                        {/* Right Side: Video */}
                        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
                            <div className="w-full max-w-sm">
                                <video
                                    src="https://res.cloudinary.com/dqedckeaa/video/upload/v1757031113/-6403127588060313866_jkuyuo.webm"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Links Section */}
            <div className="container mx-auto px-4 pb-24">
                <div className="flex justify-center px-6 pb-12">
                    <h2
                        className="w-full text-center font-montserrat text-4xl sm:text-6xl font-bold"
                    >
                        Get Connected
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {socialLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border-4 border-black bg-white/95 p-6 backdrop-blur-sm shadow-[6px_6px_0_#63c79a] flex flex-col text-center transition-transform hover:scale-105 hover:-translate-y-2 group"
                        >
                            <link.icon className={`text-6xl mx-auto mb-4 ${link.textColor}`} aria-hidden="true" />
                            <h4 className="font-montserrat text-2xl font-bold text-black">{link.name}</h4>
                            <p className="font-montserrat text-md mt-2 flex-grow text-zinc-700">{link.description}</p>
                            <span
                                className="mt-6 font-semibold text-pixel-green group-hover:underline"
                            >
                                Join Now <span aria-hidden="true">&rarr;</span>
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <Testimonials />
        </div>
    );
}