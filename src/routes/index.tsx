import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, GitCompareArrows, Layers, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { departments } from "@/data/departments";
import { skillsEncouragement } from "@/lib/assessment";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CCI Department Guidance — Haramaya University" },
      {
        name: "description",
        content:
          "Discover which College of Computing and Informatics department at Haramaya University matches your interests and career goals.",
      },
      { property: "og:title", content: "CCI Department Guidance — Haramaya University" },
      {
        property: "og:description",
        content:
          "Explore the five CCI departments, take an interest-based assessment, and compare study paths.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="hero-gradient text-primary-foreground">
        <div className="container-page py-20 md:py-28">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5" /> Haramaya University · College of Computing and Informatics
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
            Discover the CCI Department That Matches Your{" "}
            <span className="text-gradient-accent">Interests and Career Goals</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
            Choose based on what you enjoy and what you are willing to learn — not on skills you
            think you must already have. Explore departments, take a short interest assessment and
            compare your options.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/assessment"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Take the Interest Assessment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/departments"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Explore Departments
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Compare Departments
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="font-display text-2xl font-bold md:text-3xl">How it works</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Layers,
              title: "1. Explore the five departments",
              text: "Read clear profiles of IT, Software Engineering, Computer Science, Information Systems and Information Science — what you study, build and become.",
            },
            {
              icon: Compass,
              title: "2. Take the interest assessment",
              text: "Answer about 20 questions about activities and subjects you enjoy. No technical knowledge is needed — only honesty about your interests.",
            },
            {
              icon: GitCompareArrows,
              title: "3. Compare and decide",
              text: "See your interest alignment for each department, compare them side by side, and explore the careers they lead to.",
            },
          ].map((step) => (
            <div key={step.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <step.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold md:text-3xl">The five CCI departments</h2>
            <Link to="/departments" className="hidden items-center gap-1 text-sm font-semibold text-primary md:inline-flex">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <Link
                key={dept.id}
                to="/departments/$departmentId"
                params={{ departmentId: dept.id }}
                className="group rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-primary">{dept.abbreviation}</p>
                <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-primary">{dept.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{dept.tagline}</p>
                <p className="mt-3 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-2xl border border-accent/50 bg-accent/10 p-8 md:p-10">
          <h2 className="font-display text-xl font-bold md:text-2xl">A note for every student</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/85">
            {skillsEncouragement} Every CCI department starts from the basics — curiosity and
            willingness to learn matter far more than experience.
          </p>
          <Link
            to="/assessment"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start now — it takes about 5 minutes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
