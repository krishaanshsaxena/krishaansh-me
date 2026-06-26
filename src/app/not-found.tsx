// src/app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
        404
      </p>

      <h1 className="text-5xl font-bold tracking-tight">Page Not Found</h1>

      <p className="mt-6 max-w-xl text-lg text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link href="/" className="button-primary mt-10">
        Back to Home
      </Link>
    </main>
  );
}
