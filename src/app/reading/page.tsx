// src/app/reading/page.tsx

import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { books } from "@/content/books";

export default function ReadingPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Reading"
        title="Books"
        description="Books that are helping shape my thinking."
      />

      <div className="grid-2">
        {books.map((book) => (
          <div key={book.title} className="card">
            <h2 className="text-xl font-semibold">
              {book.title}
            </h2>

            <p className="mt-2 text-slate-400">
              {book.author}
            </p>

            <span className="mt-5 inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
              {book.status}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}