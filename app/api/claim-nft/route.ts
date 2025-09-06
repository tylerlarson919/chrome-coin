// app/api/claim-nft/route.ts
import { NextResponse } from 'next/server';
import { adminDb } from '@/data/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

export async function POST(request: Request) {
  try {
    const { walletAddress } = await request.json();

    if (!walletAddress || typeof walletAddress !== 'string') {
      return NextResponse.json({ error: 'Wallet address is required.' }, { status: 400 });
    }

    const claimRef = adminDb.collection('claims').doc(walletAddress);
    const counterRef = adminDb.collection('nftEarlyAccess').doc('v1_launch');

    // Run a transaction to ensure atomicity
    const claimStatus = await adminDb.runTransaction(async (transaction) => {
      const claimDoc = await transaction.get(claimRef);
      if (claimDoc.exists) {
        // User has already claimed
        return { success: false, message: 'This wallet has already claimed a spot.' };
      }

      const counterDoc = await transaction.get(counterRef);
      if (!counterDoc.exists) {
        throw new Error("Counter document doesn't exist.");
      }

      const remainingSpots = counterDoc.data()?.remaining;
      if (remainingSpots <= 0) {
        // No spots left
        return { success: false, message: 'Sorry, all early access spots have been claimed.' };
      }

      // If spots are available and user hasn't claimed, perform the claim
      transaction.update(counterRef, { remaining: FieldValue.increment(-1) });
      transaction.set(claimRef, { claimedAt: FieldValue.serverTimestamp() });
      
      return { success: true, message: 'Congratulations! Your spot is secured.' };
    });

    if (claimStatus.success) {
      return NextResponse.json({ message: claimStatus.message }, { status: 200 });
    } else {
      return NextResponse.json({ error: claimStatus.message }, { status: 400 });
    }

  } catch (error) {
    console.error('Claim NFT Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again later.' }, { status: 500 });
  }
}