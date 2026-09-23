import { Link, createFileRoute } from "@tanstack/react-router";
import { GitCompareArrows, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { departments } from "@/data/departments";

export const Route = createFileRoute("/departments/")({
  head: () => ({
    meta: [
      { title: "Departments — CCI Guidance, Haramaya University" },
      {
        name: "description",
        content:
          "Explore the five departments of the College of Computing and Informatics: IT, Software Engineering, Computer Science, Information Systems and Information Science.",
      },
      { property: "og:title", content: "Departments — CCI Guidance" },
      { property: "og:description", content: "Explore all five CCI departments and what each one offers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DepartmentsPage,
});

function DepartmentsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return departments;
    return departments.filter((d) =>
      [d.name, d.abbreviation, d.tagline, d.focusKeyword, ...d.studyAreas, ...d.careers]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-page py-12">
        <h1 className="font-display text-3xl font-bold md:text-4xl">CCI Departments</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Each profile explains what you study, what you build, the careers it leads to, and who may
          enjoy the field. You do not need prior technical skills for any of them.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, subject or career…"
              className="w-full rounded-md border border-input bg-card py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <Link
            to="/compare"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            <GitCompareArrows className="h-4 w-4" /> Compare departments
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((dept) => (
            <Link
              key={dept.id}
              to="/departments/$departmentId"
              params={{ departmentId: dept.id }}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-primary">{dept.abbreviation}</p>
              <h2 className="mt-2 font-display text-lg font-semibold group-hover:text-primary">{dept.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{dept.tagline}</p>
              <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-foreground/80">{dept.intro}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {dept.studyAreas.slice(0, 3).map((area) => (
                  <span key={area} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm font-medium text-primary">View full profile →</p>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No departments match “{query}”. Try a different search.
          </p>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
