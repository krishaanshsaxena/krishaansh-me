import ThemeToggle from "@/components/ThemeToggle";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-accent/20 selection:text-accent">
      {/* Header Container */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <a href="#" className="font-mono font-bold text-lg text-foreground hover:text-accent transition-colors">
              krishaansh.me
            </a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl w-full mx-auto px-6 py-12 flex-grow">
        {/* Intro Hero Section */}
        <div className="mb-12 border-b border-border pb-8">
          <div className="flex justify-between items-start gap-4 flex-wrap mb-4">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Krishaansh Saxena
              </h1>
              <p className="mt-2 text-base font-mono text-muted">
                Computer Science Student • AI/ML Enthusiast • Lifelong Learner
              </p>
            </div>
            <div className="text-xs font-mono bg-border/40 text-muted px-2.5 py-1 rounded-md border border-border/50">
              Updated: June 20, 2026
            </div>
          </div>
          <p className="text-lg text-foreground/90 font-medium italic mt-6 border-l-2 border-accent pl-4 py-1">
            &ldquo;Learning in public. Building one step at a time.&rdquo;
          </p>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
            <p>Hello, I&apos;m Krishaansh.</p>
            <p>
              I am a B.Tech student in Computer Science Engineering with specialization in AI and Machine Learning at KIIT University, Bhubaneswar.
            </p>
            <p>
              This website is my digital garden — a place where I share what I&apos;m learning, building, reading, and thinking about.
            </p>
          </div>

          {/* Quick Monospace Table of Contents */}
          <nav className="mt-10 font-mono text-xs flex flex-wrap gap-x-6 gap-y-2 text-muted">
            <span className="font-bold text-foreground">GOTO:</span>
            <a href="#now" className="hover:text-accent hover:underline">~/[now]</a>
            <a href="#learning" className="hover:text-accent hover:underline">~/[learning]</a>
            <a href="#building" className="hover:text-accent hover:underline">~/[building]</a>
            <a href="#reading" className="hover:text-accent hover:underline">~/[reading]</a>
            <a href="#goals" className="hover:text-accent hover:underline">~/[goals]</a>
            <a href="#quotes" className="hover:text-accent hover:underline">~/[quotes]</a>
            <a href="#links" className="hover:text-accent hover:underline">~/[links]</a>
          </nav>
        </div>

        {/* Section: Now */}
        <Section id="now" title="Now" emoji="🌱">
          <div className="space-y-4">
            <p className="text-sm font-mono text-muted mb-4">
              Inspired by Derek Sivers&apos; <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accent-hover">now page</a> movement, this is what I am focused on right now.
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <Card
                title="🎓 Studying"
                subtitle="B.Tech CSE (AI & ML)"
                description="KIIT University, Bhubaneswar. Focusing on academic foundations and core Computer Science disciplines."
              />
              <Card
                title="📚 Learning"
                subtitle="Daily Study Routine"
                description="Python, Statistics, Machine Learning, Data Science, and master Git/GitHub workflows."
              />
              <Card
                title="🛠 Building"
                subtitle="Active Projects"
                description="Currently building my personal portfolio website and a lightweight News Aggregator application."
              />
              <Card
                title="🎯 Working Towards"
                subtitle="Long-Term Vision"
                description="Becoming a proficient AI Engineer, contributing to open-source software, and solving real-world challenges."
              />
            </div>
          </div>
        </Section>

        {/* Section: Learning */}
        <Section id="learning" title="Learning" emoji="📖">
          <p className="mb-4">
            My primary learning goals right now are centered on artificial intelligence and software engineering. I believe in learning by doing.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              "Python (Advanced concepts & paradigms)",
              "Mathematical foundations of ML (Linear Algebra, Calculus)",
              "Probability & Statistics for Data Analysis",
              "Supervised and Unsupervised Learning algorithms",
              "Data preprocessing & visualization techniques",
              "Collaborative development workflows with Git/GitHub",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-2.5 items-start text-sm bg-card-bg/40 border border-border/60 p-3 rounded-lg">
                <span className="text-accent font-mono select-none">[{idx + 1}]</span>
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Section: Building */}
        <Section id="building" title="Building" emoji="🛠">
          <p className="mb-6">
            Translating knowledge into code. Here are the projects I am actively working on:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card
              title="Personal Portfolio Website"
              subtitle="Next.js, Tailwind CSS, TypeScript"
              description="A beautiful, interactive space to display projects, writing, and experience."
              link="https://krishaansh.com"
              tags={["nextjs", "typescript", "tailwind"]}
              badge="Active"
            />
            <Card
              title="News Aggregator App"
              subtitle="React, Node.js, REST API"
              description="An application to fetch, filter, and read news articles from diverse verified sources in one unified dashboard."
              tags={["react", "node", "api"]}
              badge="In Progress"
            />
          </div>
        </Section>

        {/* Section: Reading */}
        <Section id="reading" title="Reading" emoji="📚">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-mono font-bold text-accent mb-3 flex items-center gap-2">
                <span>📖</span> Currently Reading
              </h3>
              <div className="grid gap-3">
                <Card
                  title="Atomic Habits"
                  subtitle="by James Clear"
                  description="An easy & proven way to build good habits & break bad ones. Focuses on systems instead of goals."
                  badge="Current"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono font-bold text-accent mb-3 flex items-center gap-2">
                <span>⏳</span> Books I Want to Read
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { title: "Hands-On Machine Learning", author: "Aurélien Géron", tag: "ml" },
                  { title: "Deep Learning with PyTorch", author: "Eli Stevens", tag: "pytorch" },
                  { title: "The Psychology of Money", author: "Morgan Housel", tag: "finance" },
                ].map((book, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-border bg-card-bg/20 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">{book.title}</h4>
                      <p className="text-xs text-muted font-mono">{book.author}</p>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted/60 mt-3">#{book.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Section: Goals */}
        <Section id="goals" title="Goals" emoji="🎯">
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Technical */}
            <div className="space-y-3">
              <h3 className="font-bold font-mono text-sm text-accent border-b border-border pb-1">
                {"// Technical"}
              </h3>
              <ul className="space-y-2">
                {["Learn Python deeply", "Master ML fundamentals", "Build 10 projects"].map((g, i) => (
                  <li key={i} className="flex gap-2 items-center text-sm">
                    <span className="text-accent font-mono text-xs select-none">→</span>
                    <span className="text-foreground/90">{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career */}
            <div className="space-y-3">
              <h3 className="font-bold font-mono text-sm text-accent border-b border-border pb-1">
                {"// Career"}
              </h3>
              <ul className="space-y-2">
                {["Obtain internships", "Build strong GitHub profile"].map((g, i) => (
                  <li key={i} className="flex gap-2 items-center text-sm">
                    <span className="text-accent font-mono text-xs select-none">→</span>
                    <span className="text-foreground/90">{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal */}
            <div className="space-y-3">
              <h3 className="font-bold font-mono text-sm text-accent border-b border-border pb-1">
                {"// Personal"}
              </h3>
              <ul className="space-y-2">
                {["Read more books", "Exercise regularly", "Stay consistent"].map((g, i) => (
                  <li key={i} className="flex gap-2 items-center text-sm">
                    <span className="text-accent font-mono text-xs select-none">→</span>
                    <span className="text-foreground/90">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Section: Quotes */}
        <Section id="quotes" title="Quotes" emoji="💭">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Consistency compounds.",
              "Stay curious.",
              "Build in public.",
              "Learn deeply.",
            ].map((quote, idx) => (
              <blockquote
                key={idx}
                className="relative p-6 border-l-4 border-accent bg-card-bg rounded-r-lg font-mono text-sm text-foreground/95 flex items-center justify-center min-h-[80px]"
              >
                <span className="absolute top-2 left-3 text-3xl font-serif text-accent/20 select-none">“</span>
                <p className="z-10 text-center font-bold tracking-wide">&ldquo;{quote}&rdquo;</p>
              </blockquote>
            ))}
          </div>
        </Section>

        {/* Section: Links */}
        <Section id="links" title="Links" emoji="🔗">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "GitHub", url: "https://github.com/krishaanshsaxena", desc: "@krishaanshsaxena" },
              { label: "LinkedIn", url: "https://www.linkedin.com/in/krishaansh-saxena/", desc: "/in/krishaansh-saxena" },
              { label: "Portfolio", url: "https://krishaansh.com", desc: "krishaansh.com" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-border bg-card-bg/30 hover:bg-card-bg hover:border-accent hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <span className="font-bold text-foreground hover:text-accent font-mono text-sm">{link.label}</span>
                <span className="text-xs text-muted mt-2 overflow-hidden text-ellipsis whitespace-nowrap">{link.desc}</span>
              </a>
            ))}
          </div>
        </Section>
      </main>

      {/* Footer Container */}
      <footer className="border-t border-border bg-card-bg/30 py-8 transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted">
          <div>
            Made with <span className="text-accent font-sans">♥</span>, Next.js, and Tailwind CSS.
          </div>
          <div>
            © {new Date().getFullYear()} Krishaansh Pushkarprabhat Saxena
          </div>
        </div>
      </footer>
    </div>
  );
}
