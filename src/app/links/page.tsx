// src/app/links/page.tsx

import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { socialLinks } from "@/lib/social";

export default function LinksPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Links"
        title="Find Me Online"
      />

      <div className="grid-2">
        {socialLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target="_blank"
            className="card"
          >
            <h2 className="text-xl font-semibold">
              {link.title}
            </h2>

            <p className="mt-3 break-all text-slate-400">
              {link.href}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}