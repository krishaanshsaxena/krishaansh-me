// src/components/Footer.tsx

import Link from "next/link";
import { socialLinks } from "@/lib/social";
import { SITE_OWNER } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 text-center md:px-8">
        <p className="text-sm text-slate-400">
          Learning in public.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {socialLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE_OWNER}
        </p>
      </div>
    </footer>
  );
}