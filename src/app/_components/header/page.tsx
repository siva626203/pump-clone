'use client'
import React, { useEffect } from 'react'
import Image from 'next/image';
import I1 from '../../../../images/logo.webp'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
function page() {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    useEffect(()=>{
        console.log(publicKey?.toString())
    })
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="flex col-start-1 hover:bg-sky-400 rounded-lg lg:pl-5">
        <Image className='h-10 w-50' src={I1} alt='logo'/>
        <h1 className="text-[#63e963] text-3xl font-extrabold stroke-white mt-1 ml-1">
          PUMP
        </h1>
      </div>
      <div className="col-end-8">
        <WalletMultiButton />
      </div>
    </div>
  );
}

export default page