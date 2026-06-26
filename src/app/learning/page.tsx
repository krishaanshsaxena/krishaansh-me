// src/app/learning/page.tsx

import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { learning } from "@/content/learning";

export default function LearningPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Learning"
        title="Learning Journey"
        description="Topics I'm actively studying and documenting."
      />

      <div className="grid-2">
        {learning.map((item) => (
          <article key={item.title} className="card">
            <h2 className="text-2xl font-semibold">
              {item.title}
            </h2>

            <p className="mt-4 text-slate-400">
              {item.description}
            </p>

            <span className="mt-6 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
              {item.status}
            </span>
          </article>
        ))}
      </div>
    </Section>
  );
}