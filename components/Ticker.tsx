// Ticker.tsx
import React from 'react';

const TickerItem = () => (
    <div className="flex-shrink-0 flex items-center space-x-4 px-4 font-luckiest">
        <span className="font-bangers text-2xl tracking-wider">$BOPCOIN</span>
    </div>
);

// Define props type
type TickerProps = {
    className?: string;
};

// Accept className as a prop
export const Ticker = ({ className }: TickerProps) => {
    const items = Array(20).fill(0);

    // This component renders one full set of ticker items
    const TickerContent = () => (
        <div className="flex-shrink-0 flex flex-nowrap items-center">
            {items.map((_, i) => (
                <TickerItem key={i} />
            ))}
        </div>
    );

    return (
        // Use a template literal to merge the existing classes with the passed className
        <div className={`w-full bg-[#e460ea] text-white py-4 overflow-hidden border-black ${className}`}>
            {/* This container will now scroll smoothly from left to right */}
            <div className="flex animate-ticker-ltr">
                <TickerContent />
                <TickerContent aria-hidden="true" />
            </div>
        </div>
    );
};