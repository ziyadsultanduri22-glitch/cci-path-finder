import { departments, type DepartmentId } from "@/data/departments";
import { questions, type Scores } from "@/data/questions";

export interface AssessmentAnswer {
  questionId: number;
  optionId: string;
}

export interface DepartmentResult {
  departmentId: DepartmentId;
  points: number;
  /** Interest alignment as a percentage of the highest scoring department. */
  alignment: number;
  interests: string[];
}

export interface AssessmentOutcome {
  results: DepartmentResult[];
  interestProfile: { label: string; count: number }[];
  answeredCount: number;
  completedAt: string;
}

const emptyScores = (): Record<DepartmentId, number> => ({
  it: 0,
  "software-engineering": 0,
  "computer-science": 0,
  "information-systems": 0,
  "information-science": 0,
});

/**
 * Transparent scoring: each chosen option adds its points to one or more
 * departments. Alignment is expressed relative to the top department, so the
 * result is a comparison of interests — not a verdict.
 */
export function scoreAssessment(answers: AssessmentAnswer[]): AssessmentOutcome {
  const totals = emptyScores();
  const interestsByDept: Record<DepartmentId, Set<string>> = {
    it: new Set(),
    "software-engineering": new Set(),
    "computer-science": new Set(),
    "information-systems": new Set(),
    "information-science": new Set(),
  };
  const interestCount = new Map<string, number>();

  for (const answer of answers) {
    const question = questions.find((q) => q.id === answer.questionId);
    const option = question?.options.find((o) => o.id === answer.optionId);
    if (!option) continue;

    const scores: Scores = option.scores;
    for (const key of Object.keys(scores) as DepartmentId[]) {
      const value = scores[key] ?? 0;
      totals[key] += value;
      for (const interest of option.interests ?? []) {
        if (value > 0) interestsByDept[key].add(interest);
      }
    }
    for (const interest of option.interests ?? []) {
      interestCount.set(interest, (interestCount.get(interest) ?? 0) + 1);
    }
  }

  const max = Math.max(1, ...Object.values(totals));

  const results: DepartmentResult[] = departments
    .map((department) => ({
      departmentId: department.id,
      points: totals[department.id],
      alignment: Math.round((totals[department.id] / max) * 100),
      interests: Array.from(interestsByDept[department.id]).slice(0, 5),
    }))
    .sort((a, b) => b.points - a.points);

  const interestProfile = Array.from(interestCount.entries())
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return {
    results,
    interestProfile,
    answeredCount: answers.length,
    completedAt: new Date().toISOString(),
  };
}

const STORAGE_KEY = "cci-assessment-answers";

export function saveAnswersLocally(answers: AssessmentAnswer[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
}

export function loadAnswersLocally(): AssessmentAnswer[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AssessmentAnswer[]) : [];
  } catch {
    return [];
  }
}

export function clearAnswersLocally() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export const guidanceDisclaimer =
  "Your result is guidance, not a final decision. Explore the department details and consider your personal goals before making your choice.";

export const skillsEncouragement =
  "Your current skill level does not define your future. Choose based on your interests, willingness to learn, and career goals.";
