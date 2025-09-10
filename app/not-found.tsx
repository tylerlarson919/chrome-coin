// app/not-found.tsx
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black p-4 text-center z-10">
      <div className="flex flex-col items-center">
        <h1 className="font-montserrat text-zinc-300 text-8xl font-extrabold tracking-wider">
          404
        </h1>
        <p className="mt-2 text-lg text-zinc-400/80 md:text-xl font-montserrat">
          This link seems to be broken.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-lg bg-purple-600 px-6 py-3 text-lg font-bold text-white transition-all hover:bg-opacity-80"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}