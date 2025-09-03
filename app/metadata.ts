// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mer-token.com'),
  title: {
    default: "$MER | Drive the Dream. Pay with Crypto.",
    template: `$MER - %s`, // UPDATED LINE
  },
  description: "Swap SOL for $MER and unlock exclusive rentals of exotic cars with Miami Exotic Rents.",
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
    title: '$MER | Drive the Dream. Pay with Crypto.',
    description: 'Power your exotic rentals with $MER - the official token for Miami Exotic Rents.',
    images: [
      {
        url: '/og/default.png',
        width: 1024,
        height: 1024,
        alt: '$MER Token',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MERofficial',
    creator: '@MERofficial',
    title: '$MER | Drive the Dream. Pay with Crypto.',
    description: 'Swap SOL for $MER and rent exotic cars.',
    images: ['/og/default.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};