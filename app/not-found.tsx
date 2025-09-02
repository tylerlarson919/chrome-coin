// app/not-found.tsx

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-transparent p-4 text-center z-10">
      <div className="flex flex-col items-center">
        <h1 className="font-poppins text-white text-8xl font-bold tracking-wider text-white">
          404
        </h1>
        <p className="mt-2 text-lg text-white/80 md:text-xl font-poppins">
          This page seems to be lost.
        </p>
        <Link
          href="/"
          className="mt-4 rounded-lg bg-mer-orange px-6 py-2 text-lg font-bold text-white transition-all hover:bg-mer-orange/80"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}