// app/[[...404]]/page.tsx

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-transparent p-4 text-center z-10">
      <div className="flex flex-col items-center">
        {/* Title Text */}
        <h1 className="font-modak text-white text-stroke-smooth text-8xl tracking-wider text-white">
          404
        </h1>
        
        {/* Subtitle Text */}
        <p className="mt-2 text-lg text-white/80 md:text-xl">
          This page seems to be lost in the bop.
        </p>
        
        {/* Optional: A link back home */}
        <Link
          href="/"
          className="mt-4 rounded-lg border-2 border-black bg-[#ea88ea] px-6 py-2 text-lg font-bold text-white shadow-[4px_4px_0px_#000000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}