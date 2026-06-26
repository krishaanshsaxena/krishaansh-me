// src/app/about/page.tsx

import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { COURSE, SITE_OWNER, UNIVERSITY } from "@/lib/site";

export default function AboutPage() {
  return (
    <Section>
      <div className="content-width">
        <SectionHeading eyebrow="About" title="Hi, I'm Krishaansh." />

        <div className="card space-y-6 text-slate-300 leading-8">
          <p>
            My name is <strong>{SITE_OWNER}</strong>.
          </p>

          <p>
            I am pursuing <strong>{COURSE}</strong> at{" "}
            <strong>{UNIVERSITY}</strong>.
          </p>

          <p>
            I enjoy learning by building projects and documenting my journey in
            public. My primary interests include Artificial Intelligence,
            Machine Learning, Statistics, Software Engineering and Quantitative
            Finance.
          </p>

          <p>
            This website serves as my digital garden where I share notes,
            projects, books, ideas and lessons learned throughout my engineering
            journey.
          </p>
        </div>
      </div>
    </Section>
  );
}
