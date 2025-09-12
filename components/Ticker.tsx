// components/Ticker.tsx
import React from 'react';

const TickerItem = () => (
    <div className="flex-shrink-0 flex items-center px-6">
        <img
            src="https://res.cloudinary.com/dqedckeaa/image/upload/v1757700728/chrome-coin-pfp-logo_vktsdc.svg"
            alt="Chrome Coin Logo"
            className="h-8 w-16"
        />
    </div>
);

type TickerProps = {
    className?: string;
};

export const Ticker = ({ className }: TickerProps) => {
    const items = Array(20).fill(0);

    const TickerContent = () => (
        <div className="flex-shrink-0 flex flex-nowrap items-center">
            {items.map((_, i) => (
                <TickerItem key={i} />
            ))}
        </div>
    );

    return (
        <div className={`w-full text-white py-4 overflow-hidden border-black ${className}`}>
            <div className="flex animate-ticker-ltr">
                <TickerContent />
                <TickerContent aria-hidden="true" />
            </div>
        </div>
    );
};