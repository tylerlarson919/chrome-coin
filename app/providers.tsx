// app/providers.tsx
'use client';

import React, { useMemo, ReactNode } from 'react';
import { useRouter } from "next/navigation";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { HeroUIProvider } from "@heroui/system"; // Assuming this is a valid import
import { ToastProvider } from "@heroui/toast";

// The important change is here: Use an import statement for the CSS
import '@solana/wallet-adapter-react-ui/styles.css';

export interface ProvidersProps {
  children: React.ReactNode;
}

// This declare module part seems specific to HeroUI and can remain if needed
declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = process.env.NEXT_PUBLIC_SOLANA_RPC_ENDPOINT;
  if (!endpoint) {
    // This gives a clear error during development if the .env variable is missing.
    throw new Error("Error: NEXT_PUBLIC_SOLANA_RPC_ENDPOINT is not set");
  }

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <HeroUIProvider navigate={router.push}>
            <div className="relative z-[9999] dark">
              <ToastProvider placement="bottom-center" />
            </div>
            {children}
          </HeroUIProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}