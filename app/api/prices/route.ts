// in api/prices/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const BOPCOIN_MINT = process.env.NEXT_PUBLIC_BOPCOIN_MINT_ADDRESS;
  const SOL_MINT = 'So11111111111111111111111111111111111111112';
  const BIRDEYE_API_KEY = process.env.BIRDEYE_API_KEY;

  if (!BOPCOIN_MINT) {
    return NextResponse.json({ error: 'BOPCOIN mint address is not configured.' }, { status: 500 });
  }
  if (!BIRDEYE_API_KEY) {
    console.error("API Key Error: BIRDEYE_API_KEY is not set in Vercel.");
    return NextResponse.json({ error: 'API key is not configured.' }, { status: 500 });
  }

  try {
    const urls = [
      `https://public-api.birdeye.so/defi/price?address=${SOL_MINT}`,
      `https://public-api.birdeye.so/defi/price?address=${BOPCOIN_MINT}`
    ];

    const headers = {
      'Accept': 'application/json',
      'X-API-KEY': BIRDEYE_API_KEY
    };

    const responses = await Promise.all(urls.map(url => 
      fetch(url, {
        headers: headers,
        // --- THIS IS THE FIX ---
        // Cache the response for 5 mins instead of fetching on every request.
        next: { revalidate: 300 }
      })
    ));

    for (const response of responses) {
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Birdeye API Error:", errorText);
        throw new Error(`Failed to fetch from Birdeye, status: ${response.status}`);
      }
    }

    const [solData, bopcoinData] = await Promise.all(responses.map(res => res.json()));

    const solPrice = solData?.data?.value || 0;
    const bopcoinPrice = bopcoinData?.data?.value || 0;

    return NextResponse.json({ solPrice, merPrice: bopcoinPrice });

  } catch (error) {
    console.error('Price API Fetch Failed:', error);
    return NextResponse.json({ error: 'Failed to fetch token prices from external service.' }, { status: 500 });
  }
}