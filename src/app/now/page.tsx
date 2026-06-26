// src/app/now/page.tsx

import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { COURSE, GRADUATION_YEAR, UNIVERSITY } from "@/lib/site";

export default function NowPage() {
  return (
    <Section>
      <div className="content-width">
        <SectionHeading
          eyebrow="Now"
          title="What I'm Doing Right Now"
          description="This page is updated regularly and reflects my current priorities."
        />

        <div className="space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold">🎓 Education</h3>

            <p className="mt-4 text-slate-400">
              Pursuing <strong>{COURSE}</strong> at{" "}
              <strong>{UNIVERSITY}</strong>. Expected graduation in{" "}
              <strong>{GRADUATION_YEAR}</strong>.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">📚 Currently Learning</h3>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
              <li>Machine Learning</li>
              <li>Statistics</li>
              <li>Python</li>
              <li>Software Engineering</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">🚀 Building</h3>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
              <li>krishaansh.com</li>
              <li>krishaansh.me</li>
              <li>AI News Aggregator</li>
              <li>Statistics Calculator</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
