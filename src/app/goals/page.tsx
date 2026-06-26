// src/app/goals/page.tsx

import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { goals } from "@/content/goals";

export default function GoalsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Goals"
        title="Long-Term Goals"
        description="Milestones I'm working towards during my engineering journey."
      />

      <div className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.year} className="card">
            <h2 className="text-2xl font-bold">{goal.year}</h2>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-400">
              {goal.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}