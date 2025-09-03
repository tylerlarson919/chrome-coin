// api/rental-swap/route.ts
import { NextResponse } from 'next/server';
import { Connection, PublicKey, VersionedTransaction } from '@solana/web3.js';

export async function POST(request: Request) {
  try {
    const { userPublicKey, amount, carId } = await request.json();

    // Validate inputs
    if (!userPublicKey || !amount || !carId) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    // Get your business wallet address from environment variables
    const BUSINESS_WALLET_PUBKEY = process.env.NEXT_PUBLIC_BUSINESS_WALLET_PUBKEY!;
    const MER_MINT = process.env.NEXT_PUBLIC_BOPCOIN_MINT_ADDRESS!;

    if (!BUSINESS_WALLET_PUBKEY || !MER_MINT) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_ENDPOINT!, 'confirmed');
    const userPubkey = new PublicKey(userPublicKey);
    const businessPubkey = new PublicKey(BUSINESS_WALLET_PUBKEY);
    const merMintPubkey = new PublicKey(MER_MINT);

    // This part would use a Solana program or a service to create a token transfer transaction.
    // Since that is complex and not specified, we'll create a placeholder response.
    // This transaction would:
    // 1. Transfer 'amount' of MER from userPubkey to businessPubkey.
    // 2. Could also include memo instruction with carId and other details.

    // For now, we will mock a successful response.
    // In a real application, you would use a library like @solana/spl-token to build this transaction.
    const mockTransaction = {
      // Mocked transaction data
      message: {
        instructions: [{ programId: "TokenkegQfeZyiNwAJbNbGKPFXULtwYjQfTfS6hpz" }],
        recentBlockhash: "mockedBlockhash",
        header: { numRequiredSignatures: 1, numReadonlySignedAccounts: 0, numReadonlyUnsignedAccounts: 0 },
        accountKeys: [userPubkey.toBase58(), businessPubkey.toBase58(), merMintPubkey.toBase58()],
      },
      signatures: [],
    };
    const transaction = VersionedTransaction.deserialize(Buffer.from(JSON.stringify(mockTransaction), 'utf8'));

    // In a real app, you would serialize the actual transaction here.
    const serializedTx = transaction.serialize();
    const swapTransaction = Buffer.from(serializedTx).toString('base64');


    return NextResponse.json({ swapTransaction });
  } catch (error) {
    console.error('Rental Swap API Error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Failed to create transfer transaction' 
    }, { status: 500 });
  }
}