import { Link, createFileRoute } from "@tanstack/react-router";
import { Compass, GitCompareArrows, RotateCcw } from "lucide-react";
import { useMemo } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { departments } from "@/data/departments";
import {
  clearAnswersLocally,
  guidanceDisclaimer,
  loadAnswersLocally,
  scoreAssessment,
} from "@/lib/assessment";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Your Results — CCI Guidance" },
      {
        name: "description",
        content: "See how your interests align with the five CCI departments and explore next steps.",
      },
      { property: "og:title", content: "Your Results — CCI Guidance" },
      { property: "og:description", content: "Your interest alignment across the CCI departments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  const answers = useMemo(() => loadAnswersLocally(), []);
  const outcome = useMemo(() => scoreAssessment(answers), [answers]);

  if (answers.length === 0) {
    return (
      <div className="min-h-screen">
        <SiteHeader />
        <main className="container-page max-w-2xl py-20 text-center">
          <h1 className="font-display text-2xl font-bold">No assessment answers yet</h1>
          <p className="mt-3 text-muted-foreground">
            Take the interest assessment first — it takes about five minutes.
          </p>
          <Link
            to="/assessment"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <Compass className="h-4 w-4" /> Take the assessment
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const top = outcome.results[0]!;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-page max-w-4xl py-12">
        <h1 className="font-display text-3xl font-bold">Your interest profile</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Based on {outcome.answeredCount} answers, here is how your interests align with each
          department. This is a comparison of interests — guidance, not a verdict.
        </p>

        <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
          <h2 className="font-display text-lg font-semibold">Department alignment</h2>
          <div className="mt-5 space-y-4">
            {outcome.results.map((result, i) => {
              const dept = departments.find((d) => d.id === result.departmentId)!;
              return (
                <div key={result.departmentId}>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <p className="font-semibold">
                      {i + 1}. {dept.name}
                      {i === 0 && (
                        <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground">
                          Strongest alignment
                        </span>
                      )}
                    </p>
                    <p className="text-muted-foreground">{result.alignment}%</p>
                  </div>
                  <div className="mt-1.5 h-2.5 rounded-full bg-secondary">
                    <div
                      className={`h-2.5 rounded-full ${i === 0 ? "bg-primary" : "bg-primary/40"}`}
                      style={{ width: `${result.alignment}%` }}
                    />
                  </div>
                  {result.interests.length > 0 && (
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      Matched interests: {result.interests.join(", ")}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold">What you said you enjoy</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {outcome.interestProfile.map((interest) => (
                <span
                  key={interest.label}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {interest.label}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold">Career areas to explore</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
              {departments
                .find((d) => d.id === top.departmentId)!
                .careers.slice(0, 5)
                .map((career) => (
                  <li key={career} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {career}
                  </li>
                ))}
            </ul>
            <Link to="/careers" className="mt-4 inline-block text-sm font-semibold text-primary">
              Browse all careers →
            </Link>
          </section>
        </div>

        <section className="mt-6 rounded-xl border border-accent/50 bg-accent/10 p-6">
          <h2 className="font-display text-base font-semibold">Next steps</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/85">
            <li>Read the full profile of your top departments.</li>
            <li>Compare two or three departments side by side.</li>
            <li>Talk to students or instructors in those departments.</li>
            <li>Remember: your choice should follow your interests and goals.</li>
          </ol>
          <p className="mt-4 text-sm italic text-muted-foreground">{guidanceDisclaimer}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/departments/$departmentId"
              params={{ departmentId: top.departmentId }}
              className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              View {departments.find((d) => d.id === top.departmentId)!.abbreviation} profile
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-secondary"
            >
              <GitCompareArrows className="h-4 w-4" /> Compare departments
            </Link>
            <button
              onClick={() => {
                clearAnswersLocally();
                window.location.href = "/assessment";
              }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-secondary"
            >
              <RotateCcw className="h-4 w-4" /> Retake
            </button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
