'use client'
import Image from "next/image";
import Board from './board/page'
import { useMemo } from "react";
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
require("@solana/wallet-adapter-react-ui/styles.css");
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
export default function Home() {
   const solNetwork = WalletAdapterNetwork.Mainnet;
   const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
   // initialise all the wallets you want to use
   const wallets = useMemo(
     () => [
       new PhantomWalletAdapter(),
       new TorusWalletAdapter(),
       new LedgerWalletAdapter(),
     ],
     [solNetwork]
   );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <main>
            <Board />
          </main>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
