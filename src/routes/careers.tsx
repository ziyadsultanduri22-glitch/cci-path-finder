import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { careers } from "@/data/careers";
import { departments, type DepartmentId } from "@/data/departments";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — CCI Guidance" },
      {
        name: "description",
        content: "Explore career areas connected to each CCI department at Haramaya University.",
      },
      { property: "og:title", content: "Careers — CCI Guidance" },
      { property: "og:description", content: "Career areas grouped by CCI department." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  const [filter, setFilter] = useState<DepartmentId | "all">("all");
  const visible = filter === "all" ? careers : careers.filter((c) => c.department === filter);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-page py-12">
        <h1 className="font-display text-3xl font-bold">Career areas</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Careers connected to each CCI department. Real opportunities depend on the skills, projects
          and experience you build — and on the job market.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full border px-4 py-2 text-sm font-semibold ${
              filter === "all"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:border-primary/50"
            }`}
          >
            All
          </button>
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setFilter(dept.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                filter === dept.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {dept.abbreviation}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((career) => {
            const dept = departments.find((d) => d.id === career.department)!;
            return (
              <div key={career.id} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-wide text-primary">{dept.abbreviation}</p>
                <h2 className="mt-2 font-display text-lg font-semibold">{career.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{career.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {career.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
