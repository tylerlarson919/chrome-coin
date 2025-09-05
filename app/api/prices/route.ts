import { NextResponse } from 'next/server';

export async function GET() {
  const PIXEL_MINT = process.env.NEXT_PUBLIC_PIXEL_MINT_ADDRESS;
  const SOL_MINT = 'So11111111111111111111111111111111111111112';
  const BIRDEYE_API_KEY = process.env.BIRDEYE_API_KEY;

  if (!PIXEL_MINT) {
    return NextResponse.json({ error: 'PIXEL mint address is not configured.' }, { status: 500 });
  }
  if (!BIRDEYE_API_KEY) {
    return NextResponse.json({ error: 'API key is not configured.' }, { status: 500 });
  }

  try {
    const urls = [
      `https://public-api.birdeye.so/defi/price?address=${SOL_MINT}`,
      `https://public-api.birdeye.so/defi/price?address=${PIXEL_MINT}`
    ];

    const headers = {
      'Accept': 'application/json',
      'X-API-KEY': BIRDEYE_API_KEY
    };

    const responses = await Promise.all(urls.map(url => 
      fetch(url, {
        headers: headers,
        next: { revalidate: 300 } // Cache for 5 minutes
      })
    ));

    for (const response of responses) {
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Birdeye API Error:", errorText);
        throw new Error(`Failed to fetch from Birdeye, status: ${response.status}`);
      }
    }

    const [solData, pixelData] = await Promise.all(responses.map(res => res.json()));

    const solPrice = solData?.data?.value || 0;
    const pixelPrice = pixelData?.data?.value || 0;

    return NextResponse.json({ solPrice, pixelPrice });

  } catch (error) {
    console.error('Price API Fetch Failed:', error);
    return NextResponse.json({ error: 'Failed to fetch token prices.' }, { status: 500 });
  }
}