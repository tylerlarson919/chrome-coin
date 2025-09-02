// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bopcoin.fun'),

  title: {
    default: "BOPCOIN",
    template: `%s - BOPCOIN`,
  },
  description: "The ultimate meme coin for the bophouse community. Join the revolution and bop your way to the moon!",
    /* 3️⃣ Focus keywords (not a ranking factor but good for organisation tools) */
    keywords: [
      'bopcoin',
      'meme coin',
      'cryptocurrency',
      'bophouse',
      'crypto community',
      'defi token',
      'moon mission',
      'crypto memes',
    ],
  
    /* 4️⃣ Robots */
    robots: { index: true, follow: true },
  
    /* 5️⃣ Canonical fallback */
    alternates: { canonical: '/' },
  
    /* 6️⃣ Open Graph  */
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: '/',
      siteName: 'BOPCOIN',
      title: 'BOPCOIN | The Ultimate Meme Coin',
      description:
        'Join the bophouse revolution with BOPCOIN - the meme coin that\'s taking the crypto world by storm!',
      images: [
        {
          url: '/og/default.webp', 
          width: 1024,
          height: 1024,
          alt: 'BOPCOIN — The Ultimate Meme Coin for the Bophouse',
        },
      ],
    },
  
    /* 7️⃣ Twitter */
    twitter: {
      card: 'summary_large_image',
      site: '@BOPCOINofficial',
      creator: '@BOPCOINofficial',
      title: 'BOPCOIN | The Ultimate Meme Coin',
      description:
        'Bop your way to the moon with the hottest meme coin in the crypto space!',
      images: ['/og/default.webp'],
    },

    icons: {
      icon: '/favicon.ico',
    },
};