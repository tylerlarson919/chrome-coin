// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: "Pixel World | Pixel by Pixel. Block by Block.",
    template: `Pixel World - %s`,
  },
  description: "A digital realm powered by nostalgia, memes, and zero-utility fun. Welcome to the world of $PIXEL.",
  keywords: [
    'Pixel World',
    'crypto',
    'meme coin',
    'pixel art',
    'NFTs',
    'blockchain',
    '$PIXEL',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Pixel World',
    title: 'Pixel World | Pixel by Pixel. Block by Block.',
    description: 'A digital realm powered by nostalgia, memes, and zero-utility fun.',
    images: [
      {
        url: '/og/default.png', // Make sure to create this image
        width: 1200,
        height: 630,
        alt: 'Pixel World',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel World | Pixel by Pixel. Block by Block.',
    description: 'A digital realm powered by nostalgia, memes, and zero-utility fun.',
    images: ['/og/default.png'], // Make sure to create this image
  },
  icons: {
    icon: '/favicon.ico',
  },
};