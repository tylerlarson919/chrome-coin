// app/api/rental-swap/route.ts

import { NextResponse } from 'next/server';
import { Connection, PublicKey, TransactionMessage, VersionedTransaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { getAssociatedTokenAddress, createTransferInstruction, createAssociatedTokenAccountInstruction } from '@solana/spl-token';

export async function POST(request: Request) {
  try {
    const { userPublicKey, amount } = await request.json();

    if (!userPublicKey || amount === undefined) {
      return NextResponse.json({ error: 'Missing userPublicKey or amount' }, { status: 400 });
    }
    
    const amountAsNumber = Number(amount);
    if (isNaN(amountAsNumber) || amountAsNumber <= 0) {
        return NextResponse.json({ error: 'Invalid amount provided' }, { status: 400 });
    }

    const BUSINESS_WALLET_ADDRESS = process.env.NEXT_PUBLIC_BUSINESS_WALLET_ADDRESS!;
    const MER_MINT_ADDRESS = process.env.NEXT_PUBLIC_BOPCOIN_MINT_ADDRESS!;
    const RPC_ENDPOINT = process.env.NEXT_PUBLIC_SOLANA_RPC_ENDPOINT!;

    const connection = new Connection(RPC_ENDPOINT, 'confirmed');

    const merMintPubkey = new PublicKey(MER_MINT_ADDRESS);
    const userPubkey = new PublicKey(userPublicKey);
    const businessPubkey = new PublicKey(BUSINESS_WALLET_ADDRESS);

    // --- PRE-FLIGHT DIAGNOSTIC CHECKS ---

    // 1. Check if the user has enough SOL for gas fees (e.g., at least 0.00001 SOL)
    const userSolBalance = await connection.getBalance(userPubkey);
    if (userSolBalance < 10000) { // A buffer amount in lamports
        console.error(`[API ERROR] User ${userPubkey.toBase58()} has insufficient SOL balance: ${userSolBalance} lamports.`);
        return NextResponse.json({ error: `Insufficient SOL balance for transaction fee. Please add at least 0.01 SOL to your wallet.` }, { status: 400 });
    }
    
    // 2. Check if the user's token account exists and has enough tokens
    const userAta = await getAssociatedTokenAddress(merMintPubkey, userPubkey);
    let userTokenAccount;
    try {
        userTokenAccount = await connection.getTokenAccountBalance(userAta);
    } catch (e) {
        console.error(`[API ERROR] Could not find token account for user ${userPubkey.toBase58()}`);
        return NextResponse.json({ error: "Your wallet does not have an account for this token. Make sure you own some $MER." }, { status: 400 });
    }

    const DECIMALS = 6;
    const amountInSmallestUnit = Math.round(amountAsNumber * Math.pow(10, DECIMALS));
    
    if (Number(userTokenAccount.value.amount) < amountInSmallestUnit) {
        console.error(`[API ERROR] Insufficient token balance. Wants: ${amountInSmallestUnit}, Has: ${userTokenAccount.value.amount}`);
        return NextResponse.json({ error: `Insufficient $MER balance. You need ${amountAsNumber} but only have ${userTokenAccount.value.uiAmountString}.` }, { status: 400 });
    }

    // --- TRANSACTION BUILDING ---
    
    const businessAta = await getAssociatedTokenAddress(merMintPubkey, businessPubkey);
    const instructions = [];
    
    const businessAtaInfo = await connection.getAccountInfo(businessAta);
    if (!businessAtaInfo) {
      instructions.push(
        createAssociatedTokenAccountInstruction(userPubkey, businessAta, businessPubkey, merMintPubkey)
      );
    }
    
    instructions.push(
      createTransferInstruction(userAta, businessAta, userPubkey, amountInSmallestUnit)
    );

    const { blockhash } = await connection.getLatestBlockhash('confirmed');
    const message = new TransactionMessage({
      payerKey: userPubkey,
      recentBlockhash: blockhash,
      instructions: instructions,
    }).compileToV0Message();

    const transaction = new VersionedTransaction(message);
    const serializedTx = transaction.serialize();
    const swapTransaction = Buffer.from(serializedTx).toString('base64');

    return NextResponse.json({ swapTransaction });

  } catch (error) {
    console.error('[API CATCH BLOCK] Rental Swap API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'Failed to create transfer transaction', details: errorMessage }, { status: 500 });
  }
}