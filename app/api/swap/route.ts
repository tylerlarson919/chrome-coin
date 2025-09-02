import { NextResponse } from 'next/server';
import { Connection, PublicKey, VersionedTransaction } from '@solana/web3.js';

export async function POST(request: Request) {
  try {
    const { userPublicKey, inputMint, outputMint, amount, slippageBps } = await request.json();

    // Validate inputs
    if (!userPublicKey || !inputMint || !outputMint || !amount) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_ENDPOINT!, 'confirmed');
    const userPubkey = new PublicKey(userPublicKey);
    const amountLamports = Math.floor(amount * 1000000000); // Convert SOL to lamports

    // Get Jupiter quote using the current API endpoint
    const quoteResponse = await fetch(
      `https://quote-api.jup.ag/v6/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amountLamports}&slippageBps=${slippageBps || 50}`
    );

    if (!quoteResponse.ok) {
      const errorData = await quoteResponse.json();
      throw new Error(errorData.error || 'Failed to get quote from Jupiter');
    }

    const quoteData = await quoteResponse.json();

    // Get swap transaction using the current API endpoint
    const swapResponse = await fetch('https://quote-api.jup.ag/v6/swap', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quoteResponse: quoteData,
        userPublicKey: userPublicKey,
        wrapAndUnwrapSol: true,
        dynamicComputeUnitLimit: true,
        prioritizationFeeLamports: 'auto'
      })
    });

    if (!swapResponse.ok) {
      const errorData = await swapResponse.json();
      throw new Error(errorData.error || 'Failed to get swap transaction');
    }

    const { swapTransaction } = await swapResponse.json();

    return NextResponse.json({ swapTransaction });
  } catch (error) {
    console.error('Swap API Error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Failed to create swap transaction' 
    }, { status: 500 });
  }
}