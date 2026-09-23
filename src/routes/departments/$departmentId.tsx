import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Compass, GitCompareArrows, Heart, Lightbulb } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { departments } from "@/data/departments";

export const Route = createFileRoute("/departments/$departmentId")({
  loader: ({ params }) => {
    const department = departments.find((d) => d.id === params.departmentId);
    if (!department) throw notFound();
    return { department };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.department.name} — CCI Guidance` },
      { name: "description", content: loaderData?.department.intro ?? "" },
      { property: "og:title", content: `${loaderData?.department.name} — CCI Guidance` },
      { property: "og:description", content: loaderData?.department.intro ?? "" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DepartmentDetailsPage,
});

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-card">
      <h2 className="font-display text-lg font-semibold">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-foreground/85">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function DepartmentDetailsPage() {
  const { department } = Route.useLoaderData();
  const related = departments.filter((d) => department.related.includes(d.id));

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="hero-gradient text-primary-foreground">
          <div className="container-page py-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">
              {department.abbreviation} · College of Computing and Informatics
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold md:text-4xl">{department.name}</h1>
            <p className="mt-2 max-w-2xl text-primary-foreground/85">{department.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/assessment"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
              >
                <Compass className="h-4 w-4" /> Take Interest Assessment
              </Link>
              <Link
                to="/compare"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-4 py-2.5 text-sm font-semibold hover:bg-primary-foreground/10"
              >
                <GitCompareArrows className="h-4 w-4" /> Compare With Other Departments
              </Link>
            </div>
          </div>
        </section>

        <div className="container-page space-y-5 py-12">
          <section className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold">Overview</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">{department.intro}</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">{department.focus}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{department.modernTechnology}</p>
          </section>

          <div className="grid gap-5 md:grid-cols-2">
            <Section title="Main study areas" items={department.studyAreas} />
            <Section title="Common subjects" items={department.subjects} />
            <Section title="Technologies you will meet" items={department.technologies} />
            <Section title="Skills you can develop" items={department.skills} />
            <Section title="Example projects" items={department.projects} />
            <Section title="Careers this can lead to" items={department.careers} />
          </div>

          <section className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold">Career paths</h2>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {department.careerPaths.map((path) => (
                <div key={path} className="rounded-lg bg-surface p-4 text-sm text-surface-foreground">
                  {path}
                </div>
              ))}
            </div>
          </section>

          <div className="grid gap-5 md:grid-cols-2">
            <section className="rounded-xl border border-accent/50 bg-accent/10 p-6">
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
                <Heart className="h-5 w-5 text-primary" /> Who may enjoy this field
              </h2>
              <ul className="mt-3 space-y-2">
                {department.whoMayEnjoy.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
                <Lightbulb className="h-5 w-5 text-primary" /> What you can learn
              </h2>
              <ul className="mt-3 space-y-2">
                {department.whatYouCanLearn.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="rounded-xl border border-border bg-secondary/60 p-6">
            <h2 className="font-display text-base font-semibold">About your current skills</h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">{department.skillsNote}</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold">Related departments</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {related.map((d) => (
                <Link
                  key={d.id}
                  to="/departments/$departmentId"
                  params={{ departmentId: d.id }}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-lift"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-primary">{d.abbreviation}</p>
                    <p className="mt-1 font-display font-semibold group-hover:text-primary">{d.name}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
