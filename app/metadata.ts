// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: "$CHROME | The Intersection of Streetwear and Web3.",
    template: `$CHROME - %s`,
  },
  description: "Discover exclusive NFT collections from $CHROME. A new era of digital collectibles inspired by Chrome Hearts.",
  keywords: [
    '$CHROME',
    'Chrome Hearts',
    'NFTs',
    'crypto',
    'blockchain',
    'digital collectibles',
    'streetwear',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: '$CHROME',
    title: '$CHROME | The Intersection of Streetwear and Web3.',
    description: 'Discover exclusive NFT collections from $CHROME.',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 1200,
        alt: '$CHROME',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '$CHROME | The Intersection of Streetwear and Web3.',
    description: 'Discover exclusive NFT collections from $CHROME.',
    images: ['/og/default.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};