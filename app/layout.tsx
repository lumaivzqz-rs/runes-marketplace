"use client";

import "@/app/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConnectWallet, metamaskWallet, trustWallet, walletConnect, ThirdwebProvider } from "@thirdweb-dev/react";
import { BaseSepoliaTestnet } from "@thirdweb-dev/chains";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Config } from "@/app/config";
import { connectWalletProps } from "@/constants/index"

// const chain = RootstockTestnet;
const chain = BaseSepoliaTestnet;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThirdwebProvider
      activeChain={chain}
      supportedChains={[chain]}
      supportedWallets={[
        metamaskWallet(),
        trustWallet(),
        walletConnect(),
      ]}
      clientId={Config.clientId}
    >
      <html lang="en">
        <body className="h-screen">
          <main className="flex relative h-full w-full flex-col items-center">
            <Navbar />
            <section className="mb-10 z-10 flex flex-1 w-full px-6 flex-col items-center">
              <div className="flex flex-row w-full justify-between items-center">
                <div className="w-40"></div>
                <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-10 text-center text-black">
                  <span className="bg-title max-w-max px-1.5">
                    Runes Marketplace
                  </span>
                </h1>
                <div className="flex w-40 justify-end">
                  <ConnectWallet {...connectWalletProps} />
                </div>
              </div>
              <TooltipProvider>{children}</TooltipProvider>
              <ToastContainer />
            </section>
            <Footer />
          </main>
        </body>
      </html>
    </ThirdwebProvider>
  );
}
