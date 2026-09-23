import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { questions } from "@/data/questions";
import { loadAnswersLocally, saveAnswersLocally, type AssessmentAnswer } from "@/lib/assessment";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Interest Assessment — CCI Guidance" },
      {
        name: "description",
        content:
          "Answer interest-based questions to see which CCI department aligns with what you enjoy. No technical knowledge required.",
      },
      { property: "og:title", content: "Interest Assessment — CCI Guidance" },
      { property: "og:description", content: "Discover which CCI department matches your interests." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssessmentPage,
});

function AssessmentPage() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<AssessmentAnswer[]>(() => loadAnswersLocally());
  const [index, setIndex] = useState(() => {
    const saved = loadAnswersLocally();
    return Math.min(saved.length, questions.length - 1);
  });

  const question = questions[index];
  const selected = answers.find((a) => a.questionId === question.id)?.optionId;
  const progress = Math.round(((index + 1) / questions.length) * 100);
  const isLast = index === questions.length - 1;

  const answeredCount = useMemo(() => answers.length, [answers]);

  function choose(optionId: string) {
    const next = [...answers.filter((a) => a.questionId !== question.id), { questionId: question.id, optionId }];
    setAnswers(next);
    saveAnswersLocally(next);
  }

  function goNext() {
    if (!selected) return;
    if (isLast) {
      navigate({ to: "/results" });
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-page max-w-3xl py-12">
        <h1 className="font-display text-3xl font-bold">Interest Assessment</h1>
        <p className="mt-3 text-muted-foreground">
          These questions ask about what you enjoy and what you are willing to learn — not what you
          already know. There are no wrong answers.
        </p>

        <div className="mt-8">
          <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
            <span>
              Question {index + 1} of {questions.length} · {answeredCount} answered
            </span>
            <span>{progress}%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-secondary">
            <div className="h-2 rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">{question.category}</p>
          <h2 className="mt-2 font-display text-xl font-semibold md:text-2xl">{question.question}</h2>

          <div className="mt-6 space-y-3">
            {question.options.map((option) => {
              const active = selected === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => choose(option.id)}
                  className={`w-full rounded-lg border p-4 text-left text-sm leading-relaxed transition-colors ${
                    active
                      ? "border-primary bg-primary/5 font-medium text-foreground ring-1 ring-primary"
                      : "border-border bg-background text-foreground/85 hover:border-primary/50 hover:bg-secondary/50"
                  }`}
                >
                  {option.text}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setIndex(Math.max(0, index - 1))}
              disabled={index === 0}
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <button
              onClick={goNext}
              disabled={!selected}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-40"
            >
              {isLast ? "See my results" : "Next"} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
