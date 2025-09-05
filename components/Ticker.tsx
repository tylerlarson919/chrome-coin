import React from 'react';

const TickerItem = () => (
    <div className="flex-shrink-0 flex items-center space-x-4 px-4 font-poppins">
        <span className="font-poppins text-xl font-semibold tracking-widest text-mer-orange">BUY $PIXEL</span>
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