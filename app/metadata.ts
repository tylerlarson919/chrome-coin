// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mer-token.com'),
  title: {
    default: "$MER Utility Token",
    template: `%s - $MER Utility Token`,
  },
  description: "Swap SOL for $MER and unlock exclusive rentals of exotic cars, yachts, and houses with Miami Exotic Rents.",
  keywords: [
    'MER token',
    'utility coin',
    'crypto rentals',
    'exotic cars',
    'yachts',
    'luxury houses',
    'Solana token',
    'Web3 utility',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: '$MER',
    title: '$MER | Utility Token for Luxury Rentals',
    description: 'Power your exotic rentals with $MER - the utility token for Miami Exotic Rents.',
    images: [
      {
        url: '/og/mer-og.jpg', // Placeholder - replace with actual
        width: 1024,
        height: 1024,
        alt: '$MER Utility Token',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MERofficial',
    creator: '@MERofficial',
    title: '$MER | Utility Token for Luxury Rentals',
    description: 'Swap SOL for $MER and rent exotic cars, yachts, and houses.',
    images: ['/og/mer-og.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};