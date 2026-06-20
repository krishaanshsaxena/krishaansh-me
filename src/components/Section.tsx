import React from "react";

interface SectionProps {
  id: string;
  title: string;
  emoji?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, emoji, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-8 border-b border-border last:border-b-0 scroll-mt-20 ${className}`}>
      <div className="flex items-center gap-2 mb-6 group">
        <span className="text-xl select-none" role="img" aria-hidden="true">
          {emoji}
        </span>
        <h2 className="text-xl font-bold font-mono tracking-tight text-foreground relative flex items-center">
          <span className="mr-2 text-accent">#</span>
          {title}
          <a
            href={`#${id}`}
            className="absolute -left-6 opacity-0 group-hover:opacity-100 transition-opacity text-muted hover:text-accent font-mono text-sm"
            aria-label={`Link to section ${title}`}
          >
            ¶
          </a>
        </h2>
      </div>
      <div className="text-base leading-relaxed text-muted prose prose-neutral dark:prose-invert max-w-none">
        {children}
      </div>
    </section>
  );
}
