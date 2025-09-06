// components/ClaimNft.tsx
"use client";

import { useState, useEffect } from 'react';
import { useAppWallet } from "@/app/hooks/useAppWallet";
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { db } from '@/data/firebase';
import { doc, onSnapshot } from "firebase/firestore";

export const ClaimNft = () => {
  const { publicKey, connected } = useAppWallet();
  const { setVisible } = useWalletModal();

  const [remaining, setRemaining] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null); // Add this line
  const [isClaimed, setIsClaimed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Listen to real-time updates for remaining spots
  useEffect(() => {
    const counterDocRef = doc(db, "nftEarlyAccess", "v1_launch");
    const unsubscribe = onSnapshot(counterDocRef, (doc) => {
      if (doc.exists()) {
        setRemaining(doc.data().remaining);
      } else {
        setError("Could not fetch claim data.");
        setRemaining(0);
      }
    });
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);
  useEffect(() => {
    const counterDocRef = doc(db, "nftEarlyAccess", "v1_launch");
    const unsubscribe = onSnapshot(counterDocRef, (doc) => {
      if (doc.exists()) {
        setRemaining(doc.data().remaining);
        setTotal(doc.data().total); // Also fetch the total
      } else {
        setError("Could not fetch claim data.");
        setRemaining(0);
        setTotal(0); // Set total on error too
      }
    });
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);


  // Check if the connected wallet has already claimed
  useEffect(() => {
    if (!publicKey) {
      setIsClaimed(false);
      return;
    }
    const claimDocRef = doc(db, "claims", publicKey.toBase58());
    const unsubscribe = onSnapshot(claimDocRef, (doc) => {
      setIsClaimed(doc.exists());
      if (doc.exists()) {
        setSuccessMessage("You've already secured your spot!");
      }
    });
    return () => unsubscribe();
  }, [publicKey]);

  const handleClaim = async () => {
    // 1. If wallet is not connected, open the modal and stop.
    if (!connected || !publicKey) {
      setVisible(true);
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/claim-nft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ walletAddress: publicKey.toBase58() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }
      
      setSuccessMessage(data.message);
      setIsClaimed(true);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  const buttonStyle = "w-full sm:w-auto h-14 px-8 flex items-center justify-center text-white font-bold tracking-wider border-4 border-black shadow-[4px_4px_0px_#000000] bg-pixel-green hover:bg-green-600 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-150 disabled:bg-gray-500 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none";

  const getButtonText = () => {
    if (remaining === 0) return "All Spots Claimed";
    if (isClaimed) return "Your Spot is Secured!";
    if (isLoading) return "Claiming...";
    if (!connected) return "Connect Wallet to Claim";
    if (remaining !== null) return `Claim Free NFT - ${remaining} Left`;
    return "Loading...";
  };

  const isButtonDisabled = isClaimed || remaining === 0 || isLoading || remaining === null;
  
  return (
    <div className="w-full flex flex-col items-center gap-4 mt:mt-8 text-center">
      <div className="max-w-xl">
          <p className="md:text-lg text-zinc-400">
            Be one of the first 50 to connect your wallet and secure a <strong>FREE NFT</strong> before the official launch.
          </p>
      </div>

      <div className="w-full sm:w-auto">
         <button
            onClick={handleClaim}
            disabled={isButtonDisabled}
            className={buttonStyle}
          >
            {getButtonText()}
          </button>
          {error && <p className="mt-2 text-red-400 font-semibold">{error}</p>}
          {successMessage && !error && <p className="mt-2 text-pixel-green font-semibold">{successMessage}</p>}
      </div>
      {/* --- ADD THIS NEW DIV --- */}
      <div className="h-6 font-bold tracking-wider text-lg text-zinc-100">
        {remaining !== null && total !== null ? (
          <p>{remaining} / {total} SPOTS REMAINING</p>
        ) : (
          <p>LOADING...</p>
        )}
      </div>
    </div>
  );
};