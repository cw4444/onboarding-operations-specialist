import type { OnboardingCase } from "../models/case";

export function summarizeCase(input: OnboardingCase): string {
  const issues = input.riskFlags.length ? input.riskFlags.join("; ") : "No immediate blockers detected";

  return [
    `Case ${input.id} for ${input.employeeName}`,
    `Country: ${input.country}`,
    `Start date: ${input.startDate}`,
    `Contract: ${input.contractType}`,
    `Route: ${input.route}`,
    `Flags: ${issues}`,
  ].join("\n");
}

export function draftFollowUp(input: OnboardingCase): string {
  if (!input.riskFlags.length) {
    return `Hi ${input.employeeName}, your onboarding case is progressing and we do not need anything else from you right now.`;
  }

  return `Hi ${input.employeeName}, we are reviewing your onboarding information and need a few items before we can continue: ${input.riskFlags.join(", ")}.`;
}
