// src/app/notes/page.tsx

import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

const topics = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Statistics",
  "Probability",
  "Python",
  "C++",
  "Git",
  "Linux",
  "Quantitative Finance",
];

export default function NotesPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Knowledge Base"
        title="My Notes"
        description="Every topic I learn eventually becomes a permanent note."
      />

      <div className="grid-3">
        {topics.map((topic) => (
          <div key={topic} className="card">
            <h3 className="text-lg font-semibold">
              {topic}
            </h3>

            <p className="mt-3 text-slate-400">
              Coming soon...
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}