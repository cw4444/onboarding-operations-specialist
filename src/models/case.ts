export type CaseSource = "ticket" | "form" | "message" | "manual";

export type CaseStatus =
  | "intake"
  | "needs_review"
  | "queued"
  | "in_progress"
  | "blocked"
  | "complete";

export type RouteQueue =
  | "onboarding_ops"
  | "payroll"
  | "mobility"
  | "benefits"
  | "legal"
  | "none";

export interface OnboardingCase {
  id: string;
  source: CaseSource;
  status: CaseStatus;
  employeeName: string;
  country: string;
  startDate: string;
  contractType: string;
  entity?: string;
  payrollPath?: string;
  documents: {
    contract?: boolean;
    signature?: boolean;
    rightToWork?: boolean;
  };
  notes: string[];
  riskFlags: string[];
  route: RouteQueue;
}
