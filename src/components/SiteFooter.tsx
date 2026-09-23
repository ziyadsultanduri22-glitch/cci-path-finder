import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3">
        <div>
          <p className="font-display text-base font-semibold">CCI Guidance System</p>
          <p className="mt-2 text-sm text-muted-foreground">
            An interest-based department selection and career guidance system for students of the
            College of Computing and Informatics, Haramaya University.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Explore</p>
          <div className="mt-2 flex flex-col gap-1.5 text-sm text-muted-foreground">
            <Link to="/departments" className="hover:text-foreground">Departments</Link>
            <Link to="/assessment" className="hover:text-foreground">Interest Assessment</Link>
            <Link to="/compare" className="hover:text-foreground">Compare Departments</Link>
            <Link to="/careers" className="hover:text-foreground">Careers</Link>
            <Link to="/about" className="hover:text-foreground">About</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Guidance note</p>
          <p className="mt-2 text-sm text-muted-foreground">
            This system provides guidance based on your interests and willingness to learn. It is an
            educational tool, not an official admissions system.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-4">
        <p className="container-page text-center text-xs text-muted-foreground">
          Haramaya University — College of Computing and Informatics · Student project for educational purposes
        </p>
      </div>
    </footer>
  );
}
