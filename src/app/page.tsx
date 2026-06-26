// src/app/page.tsx

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { books } from "@/content/books";
import { learning } from "@/content/learning";
import { ideas } from "@/content/ideas";
import { quotes } from "@/content/quotes";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <SectionHeading
          eyebrow="Current Focus"
          title="What I'm Learning"
          description="I'm currently building strong fundamentals before moving into advanced AI and Machine Learning."
        />

        <div className="grid-3">
          {learning.slice(0, 6).map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-slate-400">{item.description}</p>

              <span className="mt-5 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Reading"
          title="Books"
          description="Books that are currently shaping my thinking."
        />

        <div className="grid-2">
          {books.slice(0, 4).map((book) => (
            <div key={book.title} className="card">
              <h3 className="text-xl font-semibold">{book.title}</h3>

              <p className="mt-2 text-slate-400">{book.author}</p>

              <span className="mt-5 inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                {book.status}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Projects"
          title="Ideas I'm Exploring"
          description="Some projects that I plan to build during my engineering journey."
        />

        <div className="grid-2">
          {ideas.slice(0, 4).map((idea) => (
            <div key={idea.title} className="card">
              <h3 className="text-xl font-semibold">{idea.title}</h3>

              <p className="mt-3 text-slate-400">{idea.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Quote" title="Thought of the Day" />

        <blockquote className="card text-xl italic leading-9">
          &ldquo;{quotes[0]}&rdquo;
        </blockquote>
      </Section>
    </>
  );
}
