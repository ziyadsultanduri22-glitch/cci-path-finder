import { Link, createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { departments, type DepartmentId } from "@/data/departments";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Departments — CCI Guidance" },
      {
        name: "description",
        content: "Compare CCI departments side by side: focus, study areas, technologies, skills and careers.",
      },
      { property: "og:title", content: "Compare Departments — CCI Guidance" },
      { property: "og:description", content: "Side-by-side comparison of the five CCI departments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComparePage,
});

function Row({ label, values }: { label: string; values: string[] }) {
  return (
    <tr className="border-t border-border align-top">
      <th className="w-40 p-4 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">
        {label}
      </th>
      {values.map((value, i) => (
        <td key={i} className="p-4 text-sm leading-relaxed text-foreground/85">
          {value}
        </td>
      ))}
    </tr>
  );
}

function ComparePage() {
  const [selected, setSelected] = useState<DepartmentId[]>(["it", "software-engineering"]);

  function toggle(id: DepartmentId) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : prev.length < 4 ? [...prev, id] : prev,
    );
  }

  const chosen = departments.filter((d) => selected.includes(d.id));

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-page py-12">
        <h1 className="font-display text-3xl font-bold">Compare departments</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Pick two to four departments and see them side by side. There is no single “best”
          department — only the best fit for your interests.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {departments.map((dept) => {
            const active = selected.includes(dept.id);
            return (
              <button
                key={dept.id}
                onClick={() => toggle(dept.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/50"
                }`}
              >
                {active && <Check className="h-4 w-4" />}
                {dept.abbreviation}
              </button>
            );
          })}
        </div>

        {chosen.length < 2 ? (
          <p className="mt-10 rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            Select at least two departments to compare.
          </p>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-card shadow-card">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th className="w-40 p-4" />
                  {chosen.map((dept) => (
                    <th key={dept.id} className="p-4 text-left">
                      <p className="text-xs font-bold uppercase tracking-wide text-primary">{dept.abbreviation}</p>
                      <Link
                        to="/departments/$departmentId"
                        params={{ departmentId: dept.id }}
                        className="font-display text-base font-semibold hover:text-primary"
                      >
                        {dept.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <Row label="Focus" values={chosen.map((d) => d.focusKeyword)} />
                <Row label="Study areas" values={chosen.map((d) => d.studyAreas.slice(0, 4).join("; "))} />
                <Row label="Technologies" values={chosen.map((d) => d.technologies.slice(0, 5).join(", "))} />
                <Row label="Skills you develop" values={chosen.map((d) => d.skills.slice(0, 4).join("; "))} />
                <Row label="Careers" values={chosen.map((d) => d.careers.join(", "))} />
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-6 text-sm text-muted-foreground">
          Not sure which to pick?{" "}
          <Link to="/assessment" className="font-semibold text-primary">
            Take the interest assessment
          </Link>{" "}
          to see which departments match what you enjoy.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
