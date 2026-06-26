// src/components/SectionHeading.tsx

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}