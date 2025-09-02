'use client';

import { useState, useCallback, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';

export const useAppWallet = () => {
  const { connection } = useConnection();
  const walletHook = useWallet();
  const { publicKey } = walletHook;

  const [merBalance, setMerBalance] = useState(0);

  const fetchBalance = useCallback(async () => {
    if (!publicKey) {
      setMerBalance(0);
      return;
    }

    const mintAddress = process.env.NEXT_PUBLIC_BOPCOIN_MINT_ADDRESS;
    if (!mintAddress) {
      console.error("BOPCOIN mint address environment variable is not set.");
      setMerBalance(0);
      return;
    }

    try {
      // This validates the mint address string before creating a PublicKey.
      let mintPublicKey: PublicKey;
      try {
        mintPublicKey = new PublicKey(mintAddress);
      } catch (error) {
        console.error(`Invalid BOPCOIN mint address format in .env: ${mintAddress}`);
        setMerBalance(0);
        return;
      }
      
      try {
       const mintAccount = await connection.getAccountInfo(mintPublicKey);
       if (!mintAccount) {
         console.error(`Mint account ${mintAddress} does not exist on the network.`);
         setMerBalance(0);
         return;
       }
     } catch (error) {
       console.error(`Failed to fetch mint account:`, error);
       setMerBalance(0);
       return;
     }
      const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, { mint: mintPublicKey });

      if (tokenAccounts.value.length > 0) {
        const balance = tokenAccounts.value[0].account.data.parsed.info.tokenAmount.uiAmount;
        setMerBalance(balance || 0);
      } else {
        setMerBalance(0);
      }
    } catch (error) {
      // This will catch RPC errors, including the "Token mint could not be unpacked" error if the mint account doesn't exist.
      console.error("Failed to fetch BOPCOIN balance:", error);
      setMerBalance(0); // Reset balance on error
    }
  }, [publicKey, connection]);

  useEffect(() => {
    // Fetch balance when the public key changes (e.g., wallet connects)
    fetchBalance();
    
    // Also, refresh the balance periodically while the wallet is connected.
    const intervalId = setInterval(fetchBalance, 30000); // Refresh every 30 seconds
    
    return () => clearInterval(intervalId);
  }, [fetchBalance]);

  return {
    ...walletHook,
    merBalance,
    fetchBalance,
  };
};