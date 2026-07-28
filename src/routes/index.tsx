import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import sathvikaAsset from "@/assets/sathvika.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aluboju Sathvika — CSE (AI & ML) Student & Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Aluboju Sathvika — a Computer Science undergraduate specializing in AI & ML, with hands-on experience in web development, React.js, and machine learning projects.",
      },
      { property: "og:title", content: "Aluboju Sathvika — CSE (AI & ML) Student & Web Developer" },
      {
        property: "og:description",
        content:
          "Portfolio, projects, and résumé of Aluboju Sathvika, a CSE (AI & ML) undergraduate at Vaagdevi Engineering College.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aluboju Sathvika",
          jobTitle: "Computer Science Undergraduate (AI & ML)",
          email: "mailto:alubojusathwika@gmail.com",
          telephone: "+91-9346961814",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Warangal",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
          alumniOf: "Vaagdevi Engineering College",
          url: "/",
        }),
      },
    ],
  }),
});

const projects = [
  {
    year: "2025",
    title: "Quick Commerce Multimodal Review Analytics",
    kind: "AI / ML",
    blurb:
      "A multimodal review analysis system integrating text, images, and ratings. Implemented CNN and SVM models to achieve 96.69% accuracy.",
  },
  {
    year: "2024",
    title: "Responsive Portfolio Web App",
    kind: "Web · React",
    blurb:
      "A single-page portfolio built with React.js — reusable components, accessible markup, and frontend validation across form flows.",
  },
  {
    year: "2024",
    title: "Frontend Validation Toolkit",
    kind: "JavaScript",
    blurb:
      "A small library of reusable HTML, CSS, and JavaScript patterns for client-side form validation and error messaging.",
  },
];

const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Programming",
    items: ["Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React.js"],
  },
  {
    label: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    label: "Tools & IDEs",
    items: [
      "Git",
      "Eclipse",
      "Spring Tool Suite",
      "IntelliJ IDEA",
      "VS Code",
      "MS Excel",
      "PowerPoint",
    ],
  },
  {
    label: "Soft Skills",
    items: ["Communication", "Teamwork", "Adaptability", "Problem Solving"],
  },
];

const timeline = [
  {
    when: "2023 — 2027",
    what: "B.Tech, Computer Science & Engineering (AI & ML)",
    where: "Vaagdevi Engineering College · CGPA 8.0",
  },
  {
    when: "2021 — 2023",
    what: "Board of Intermediate Education",
    where: "Shivani Junior College, Telangana · CGPA 8.2 / 10",
  },
  {
    when: "2021",
    what: "Board of Secondary Education",
    where: "Fusco's High School, Telangana · CGPA 9.7 / 10",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="serif text-xl italic tracking-tight">
          Sathvika<span className="text-accent">.</span>
        </a>
        <nav className="hidden gap-8 text-sm text-ink-soft md:flex">
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#resume" className="transition-colors hover:text-foreground">Résumé</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-foreground px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-background md:inline-block"
        >
          Open to opportunities
        </a>
      </div>
    </header>
  );
}

function Monogram() {
  return (
    <figure className="relative overflow-hidden rounded-sm border border-rule bg-card">
      <img
        src={sathvikaAsset.url}
        alt="Portrait of Aluboju Sathvika"
        width={1024}
        height={1280}
        className="aspect-[4/5] w-full object-cover"
      />
      <figcaption className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] uppercase tracking-[0.22em] text-background/95 mix-blend-difference">
        <span>Aluboju Sathvika</span>
        <span>Warangal, IN</span>
      </figcaption>
    </figure>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-20 md:px-10 md:pt-24 md:pb-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <p className="eyebrow rise">Portfolio — 2026 Edition</p>
            <h1 className="display mt-8 text-[clamp(3rem,9vw,9.5rem)] rise">
              Building thoughtful
              <span className="italic text-accent"> software</span>
              <br />
              with AI at heart.
            </h1>
            <p className="mt-10 max-w-xl text-lg text-ink-soft rise md:text-xl">
              I'm Sathvika — a Computer Science undergraduate specializing in
              Artificial Intelligence &amp; Machine Learning at Vaagdevi Engineering
              College. I build responsive web experiences and machine-learning
              projects, and I'm eager to contribute to real-world software teams.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 rise">
              <a
                href="#work"
                className="rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
              >
                See my projects →
              </a>
              <a
                href="#contact"
                className="rounded-full border border-foreground px-6 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="md:col-span-4">
            <Monogram />
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="eyebrow">Based</dt>
                <dd className="mt-1">Warangal, Telangana</dd>
              </div>
              <div>
                <dt className="eyebrow">Focus</dt>
                <dd className="mt-1">AI · ML · Web</dd>
              </div>
              <div>
                <dt className="eyebrow">Program</dt>
                <dd className="mt-1">B.Tech · 2023–27</dd>
              </div>
              <div>
                <dt className="eyebrow">Status</dt>
                <dd className="mt-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Open to internships
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Python",
    "Java",
    "React.js",
    "Machine Learning",
    "Web Dev",
    "MySQL",
    "PostgreSQL",
    "Problem Solving",
  ];
  return (
    <div className="overflow-hidden border-b border-rule py-6">
      <div className="marquee-track flex gap-12 whitespace-nowrap serif text-4xl italic text-ink-soft md:text-6xl">
        {[...items, ...items].map((w, i) => (
          <span key={i} className="flex items-center gap-12">
            {w}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-rule">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-3">
          <p className="eyebrow">§ 01 — About</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="display text-4xl md:text-6xl">
            Detail‑oriented, curious, and{" "}
            <span className="italic text-accent">eager to build</span>.
          </h2>
          <div className="mt-10 grid gap-8 text-base leading-relaxed text-ink-soft md:grid-cols-2 md:text-lg">
            <p>
              I'm a Computer Science undergraduate at Vaagdevi Engineering College,
              specializing in AI &amp; Machine Learning. I enjoy the whole loop of
              software — from writing clean HTML, CSS, and JavaScript on the front,
              to training models that turn raw data into something useful.
            </p>
            <p>
              I've built responsive web applications, experimented with CNN and SVM
              models on multimodal data, and collaborated in teams where clear
              communication matters as much as clean code. I'm always looking for
              the next real-world project to learn from.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            {skillGroups.map((g) => (
              <div key={g.label} className="grid gap-3 md:grid-cols-12 md:items-baseline">
                <p className="eyebrow md:col-span-3">{g.label}</p>
                <ul className="flex flex-wrap gap-2 md:col-span-9">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-rule px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:border-foreground hover:text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">§ 02 — Selected Work</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">Projects.</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-ink-soft md:block">
            A rotating sample of coursework and personal builds. Ask for details.
          </p>
        </div>

        <ul className="mt-14 divide-y divide-rule border-y border-rule">
          {projects.map((p, i) => (
            <li key={p.title}>
              <a
                href="#contact"
                className="group grid grid-cols-12 items-baseline gap-4 py-8 transition-colors hover:bg-card md:py-10"
              >
                <span className="col-span-2 text-sm text-ink-soft md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="serif text-2xl md:text-4xl">
                    {p.title}
                    <span className="ml-3 inline-block text-accent opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
                      →
                    </span>
                  </h3>
                </div>
                <p className="col-span-12 text-sm text-ink-soft md:col-span-3 md:block">
                  {p.blurb}
                </p>
                <span className="col-span-6 text-sm md:col-span-2">{p.kind}</span>
                <span className="col-span-6 text-right text-sm text-ink-soft md:col-span-1">
                  {p.year}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="border-b border-rule bg-card">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-3">
          <p className="eyebrow">§ 03 — Education</p>
          <h2 className="display mt-4 text-4xl md:text-5xl">
            Chapters<span className="italic text-accent">.</span>
          </h2>
          <a
            href="#contact"
            className="mt-8 inline-block text-sm underline decoration-rule underline-offset-4 hover:decoration-foreground"
          >
            Request full CV
          </a>
        </div>
        <ol className="md:col-span-9">
          {timeline.map((t, i) => (
            <li
              key={t.what}
              className={
                "grid grid-cols-12 items-baseline gap-4 border-t border-rule py-8 " +
                (i === timeline.length - 1 ? "border-b" : "")
              }
            >
              <span className="col-span-12 text-sm text-ink-soft md:col-span-3">
                {t.when}
              </span>
              <h3 className="col-span-12 serif text-2xl md:col-span-6 md:text-3xl">
                {t.what}
              </h3>
              <span className="col-span-12 text-sm text-ink-soft md:col-span-3 md:text-right">
                {t.where}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "");
    const email = String(f.get("email") ?? "");
    const message = String(f.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:alubojusathwika@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="border-b border-rule">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-5">
          <p className="eyebrow">§ 04 — Contact</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">
            Let&apos;s build
            <br />
            something
            <br />
            <span className="italic text-accent">together.</span>
          </h2>
          <div className="mt-10 space-y-6 text-ink-soft">
            <div>
              <span className="eyebrow block">Email</span>
              <a
                href="mailto:alubojusathwika@gmail.com"
                className="text-lg text-foreground underline decoration-rule underline-offset-4 hover:decoration-foreground break-all"
              >
                alubojusathwika@gmail.com
              </a>
            </div>
            <div>
              <span className="eyebrow block">Phone</span>
              <a
                href="tel:+919346961814"
                className="text-lg text-foreground underline decoration-rule underline-offset-4 hover:decoration-foreground"
              >
                +91 93469 61814
              </a>
            </div>
            <div>
              <span className="eyebrow block">Location</span>
              <p className="text-lg text-foreground">Warangal, Telangana, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-7">
          <div className="grid gap-6">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field
              label="Your message"
              name="message"
              as="textarea"
              required
            />
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-ink-soft">
                I usually reply within a couple of days.
              </p>
              <button
                type="submit"
                className="rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
              >
                {sent ? "Opening mail…" : "Send message →"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
}) {
  const shared =
    "w-full border-0 border-b border-rule bg-transparent py-3 text-lg outline-none transition-colors focus:border-foreground placeholder:text-ink-soft/40";
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          maxLength={2000}
          className={shared + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          maxLength={200}
          className={shared}
        />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-[1400px] px-6 py-10 md:px-10">
      <div className="flex flex-col items-start justify-between gap-4 text-sm text-ink-soft md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} Aluboju Sathvika. Set in Instrument Serif &amp; Work Sans.
        </p>
        <p>
          Made with care in Warangal. <span className="text-accent">✦</span>
        </p>
      </div>
    </footer>
  );
}
