import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CCI Guidance, Haramaya University" },
      {
        name: "description",
        content:
          "Why this interest-based department guidance system exists, how it works, and what it is (and is not).",
      },
      { property: "og:title", content: "About — CCI Guidance" },
      { property: "og:description", content: "The purpose and approach of the CCI guidance system." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-page max-w-3xl py-12">
        <h1 className="font-display text-3xl font-bold">About this system</h1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/85 md:text-base">
          <section className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold">The problem it addresses</h2>
            <p className="mt-2">
              Many students at the College of Computing and Informatics (CCI), Haramaya University,
              must choose between five departments — Information Technology, Software Engineering,
              Computer Science, Information Systems and Information Science — often without a clear
              picture of what each one involves. Choosing by guesswork, or by what friends choose,
              can lead to frustration later.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold">How it works</h2>
            <p className="mt-2">
              The system offers clear department profiles, an interest-based assessment of about
              twenty questions, a transparent alignment score, side-by-side comparison and a career
              explorer. The assessment asks about activities and subjects you enjoy — never about
              technical knowledge you may not have yet.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold">Why interest-based guidance</h2>
            <p className="mt-2">
              Every CCI department teaches its skills from the beginning. What predicts success far
              better than current skill is genuine interest and willingness to learn. This system
              therefore guides students based on what they enjoy and what they want to become.
            </p>
          </section>

          <section className="rounded-xl border border-accent/50 bg-accent/10 p-6">
            <h2 className="font-display text-lg font-semibold">Important</h2>
            <p className="mt-2">
              This is an educational student project. It is <strong>not</strong> an official
              admissions or placement system of Haramaya University, and its results are guidance —
              not a decision. Always confirm official requirements with the university and the
              college.
            </p>
          </section>
        </div>

        <Link
          to="/assessment"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Try the assessment <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
