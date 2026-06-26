// src/app/ideas/page.tsx

import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { ideas } from "@/content/ideas";

export default function IdeasPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Ideas"
        title="Projects I'd Love to Build"
        description="Ideas collected during my learning journey."
      />

      <div className="grid-2">
        {ideas.map((idea) => (
          <div key={idea.title} className="card">
            <h2 className="text-2xl font-semibold">
              {idea.title}
            </h2>

            <p className="mt-4 text-slate-400">
              {idea.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}