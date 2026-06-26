// src/components/Hero.tsx

import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <span className="badge">Learning in Public</span>

      <h1 className="hero-title mt-6">Hi, I&apos;m Krishaansh.</h1>

      <p className="hero-subtitle">
        I&apos;m a Computer Science student at KIIT University exploring
        Artificial Intelligence, Machine Learning, Statistics, Software
        Engineering and Quantitative Finance.
      </p>

      <p className="mt-6 max-w-2xl text-slate-400">
        This website is my digital garden — a place where I document what
        I&apos;m learning, reading, building and thinking.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/now" className="button-primary">
          What I&apos;m Doing Now
        </Link>

        <Link href="/notes" className="button-secondary">
          Explore Notes
        </Link>
      </div>
    </section>
  );
}
