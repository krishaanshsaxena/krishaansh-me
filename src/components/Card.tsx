import React from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
  tags?: string[];
  badge?: string;
  className?: string;
}

export default function Card({
  title,
  subtitle,
  description,
  link,
  tags,
  badge,
  className = "",
}: CardProps) {
  const CardContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start gap-4 mb-2">
        <h3 className="font-bold text-foreground group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        {badge && (
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-border text-muted select-none">
            {badge}
          </span>
        )}
      </div>
      
      {subtitle && (
        <p className="text-xs font-mono text-muted mb-2">{subtitle}</p>
      )}

      {description && (
        <p className="text-sm text-muted/90 leading-relaxed mb-4 flex-grow">
          {description}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 rounded bg-border/40 text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  const containerClasses = `group p-5 rounded-lg border border-border bg-card-bg/40 hover:bg-card-bg hover:border-accent/40 transition-all duration-200 block h-full ${className}`;

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClasses}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className={containerClasses}>
      <CardContent />
    </div>
  );
}
