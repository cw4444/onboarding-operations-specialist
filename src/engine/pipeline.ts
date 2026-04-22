import type { OnboardingCase } from "../models/case";
import { summarizeCase, draftFollowUp } from "./assistant";
import { routeCase } from "./router";
import { validateCase } from "./rules";

export interface PipelineResult {
  case: OnboardingCase;
  summary: string;
  followUpDraft: string;
}

export function processCase(input: OnboardingCase): PipelineResult {
  const validation = validateCase(input);
  const riskFlags = [...validation.flags, ...input.riskFlags];
  const routed: OnboardingCase = { ...input, riskFlags };
  routed.route = routeCase(routed);
  routed.status = validation.ok ? "in_progress" : "needs_review";

  return {
    case: routed,
    summary: summarizeCase(routed),
    followUpDraft: draftFollowUp(routed),
  };
}
