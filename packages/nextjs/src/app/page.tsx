'use client';

import { useWallet } from '@/components/auth/hooks/useWallet.hook';
import { useGlobalAuthenticationStore } from '@/components/auth/store/data';
import { Button } from '@/components/ui/button';
import QuickPost from '@/components/quickPost/quickPost';
import Navbar from '@/components/navbar/NavBar';

export default function Home() {
  const { handleConnect, handleDisconnect } = useWallet();
  const address = useGlobalAuthenticationStore((state) => state.address);

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <header className="w-full flex justify-center">
        {address ? (
          <Button onClick={handleDisconnect}>Disconnect</Button>
        ) : (
          <Button onClick={handleConnect}>Connect</Button>
        )}
      </header>
      <main className="flex flex-col gap-8 w-full items-center">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1>Hi</h1>
          <p>{address}</p>
        </div>
        <QuickPost />
      </main>
      <footer className="w-full flex gap-6 flex-wrap items-center justify-center">
        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4">Footer</a>
      </footer>
    </div>
  );
}