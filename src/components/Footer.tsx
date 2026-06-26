import { COPYRIGHT_YEAR, SITE_OWNER } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800 py-10">
      <div className="flex flex-col items-center gap-3 text-center">
        <h3 className="font-semibold text-slate-200">{SITE_OWNER}</h3>

        <p className="text-sm text-slate-400">
          Artificial Intelligence • Machine Learning • Statistics
        </p>

        <p className="text-xs text-slate-500">
          © {COPYRIGHT_YEAR} • Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
