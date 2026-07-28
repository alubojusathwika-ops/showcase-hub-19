import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Alex Rivera — Independent Design Engineer" },
      {
        name: "description",
        content:
          "Selected work, résumé, and studio contact for Alex Rivera — an independent design engineer building editorial products and brand systems.",
      },
      { property: "og:title", content: "Alex Rivera — Independent Design Engineer" },
      {
        property: "og:description",
        content: "Editorial portfolio: selected work, writing, and studio contact.",
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
          name: "Alex Rivera",
          jobTitle: "Independent Design Engineer",
          url: "/",
        }),
      },
    ],
  }),
});

const projects = [
  {
    year: "2025",
    title: "Meridian Studio",
    kind: "Brand & Web",
    blurb:
      "A living identity system for a boutique architecture practice — bespoke type, motion, and a headless CMS.",
  },
  {
    year: "2024",
    title: "Halcyon Reader",
    kind: "Product",
    blurb:
      "A minimalist long-form reading app with typographic controls, offline sync, and shared marginalia.",
  },
  {
    year: "2024",
    title: "North & Grain",
    kind: "E‑commerce",
    blurb:
      "Editorial storefront for a specialty coffee roaster — Shopify Hydrogen, custom checkout, buttery motion.",
  },
  {
    year: "2023",
    title: "Field Notes API",
    kind: "Infrastructure",
    blurb:
      "A typed content platform powering a network of independent journals. TypeScript end‑to‑end, versioned.",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Design Systems",
  "Motion",
  "Typography",
  "Prototyping",
  "Figma",
  "GraphQL",
  "Cloudflare",
];

const timeline = [
  { when: "2023 — present", what: "Independent Studio", where: "Remote / Lisbon" },
  { when: "2020 — 2023", what: "Senior Design Engineer, Linear", where: "Remote" },
  { when: "2017 — 2020", what: "Product Engineer, Stripe", where: "San Francisco" },
  { when: "2013 — 2017", what: "B.S. Computer Science, Carnegie Mellon", where: "Pittsburgh" },
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
          Alex Rivera<span className="text-accent">.</span>
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
          Available for work
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-20 md:px-10 md:pt-24 md:pb-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <p className="eyebrow rise">Portfolio — Issue 07 / 2026</p>
            <h1 className="display mt-8 text-[clamp(3.25rem,10vw,10.5rem)] rise">
              Design
              <span className="italic text-accent"> engineered</span>
              <br />
              with intention.
            </h1>
            <p className="mt-10 max-w-xl text-lg text-ink-soft rise md:text-xl">
              I'm Alex — an independent design engineer building editorial products,
              brand systems, and interfaces where craft is felt in every pixel and
              every millisecond.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 rise">
              <a
                href="#work"
                className="rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
              >
                View selected work →
              </a>
              <a
                href="#contact"
                className="rounded-full border border-foreground px-6 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
              >
                Start a project
              </a>
            </div>
          </div>
          <div className="md:col-span-4">
            <figure className="relative overflow-hidden rounded-sm border border-rule">
              <img
                src={portrait}
                alt="Portrait of Alex Rivera"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover grayscale"
              />
              <figcaption className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] uppercase tracking-[0.2em] text-background/90 mix-blend-difference">
                <span>Fig. 01</span>
                <span>Lisbon, PT</span>
              </figcaption>
            </figure>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="eyebrow">Based</dt>
                <dd className="mt-1">Lisbon · Remote</dd>
              </div>
              <div>
                <dt className="eyebrow">Focus</dt>
                <dd className="mt-1">Product · Brand · Motion</dd>
              </div>
              <div>
                <dt className="eyebrow">Years</dt>
                <dd className="mt-1">09 in the craft</dd>
              </div>
              <div>
                <dt className="eyebrow">Status</dt>
                <dd className="mt-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Booking Q3
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
  const items = ["Typography", "Motion", "Systems", "Product", "Identity", "Interaction", "Research", "Prototype"];
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
            A small studio of one, built around a stubborn belief that{" "}
            <span className="italic text-accent">details compound</span>.
          </h2>
          <div className="mt-10 grid gap-8 text-base leading-relaxed text-ink-soft md:grid-cols-2 md:text-lg">
            <p>
              For nearly a decade I've moved between design and engineering,
              refusing to pick a side. I've shipped products at Stripe and Linear,
              helped early-stage teams find their voice, and now work independently
              with founders who care about the seams.
            </p>
            <p>
              My work is quiet, considered, and technically rigorous — grounded in
              typography, guided by systems thinking, and finished with the kind
              of motion you feel more than notice.
            </p>
          </div>
          <ul className="mt-12 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-rule px-4 py-1.5 text-sm text-ink-soft transition-colors hover:border-foreground hover:text-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
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
            <h2 className="display mt-4 text-4xl md:text-6xl">Recent projects.</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-ink-soft md:block">
            A rotating sample. Case studies on request — send a note.
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
                  <h3 className="serif text-3xl md:text-5xl">
                    {p.title}
                    <span className="ml-3 inline-block translate-x-0 text-accent opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
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
          <p className="eyebrow">§ 03 — Résumé</p>
          <h2 className="display mt-4 text-4xl md:text-5xl">
            Chapters<span className="italic text-accent">.</span>
          </h2>
          <a
            href="#contact"
            className="mt-8 inline-block text-sm underline decoration-rule underline-offset-4 hover:decoration-foreground"
          >
            Download full CV (PDF)
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
    const subject = encodeURIComponent(`New project inquiry — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:hello@alexrivera.studio?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="border-b border-rule">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-5">
          <p className="eyebrow">§ 04 — Contact</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">
            Let's make
            <br />
            something
            <br />
            <span className="italic text-accent">worth keeping.</span>
          </h2>
          <div className="mt-10 space-y-6 text-ink-soft">
            <div>
              <span className="eyebrow block">Email</span>
              <a
                href="mailto:hello@alexrivera.studio"
                className="text-lg text-foreground underline decoration-rule underline-offset-4 hover:decoration-foreground"
              >
                hello@alexrivera.studio
              </a>
            </div>
            <div>
              <span className="eyebrow block">Elsewhere</span>
              <span className="mt-1 flex gap-4 text-foreground">
                <a href="#" className="hover:text-accent">GitHub</a>
                <a href="#" className="hover:text-accent">LinkedIn</a>
                <a href="#" className="hover:text-accent">Read.cv</a>
                <a href="#" className="hover:text-accent">Are.na</a>
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-7">
          <div className="grid gap-6">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field
              label="Tell me about the project"
              name="message"
              as="textarea"
              required
            />
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-ink-soft">
                Replies within 48 hours, weekdays.
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
        <p>© {new Date().getFullYear()} Alex Rivera. Set in Instrument Serif & Work Sans.</p>
        <p>
          Handcrafted in Lisbon. <span className="text-accent">✦</span> No trackers, no cookies.
        </p>
      </div>
    </footer>
  );
}
