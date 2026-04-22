import type { OnboardingCase } from "../models/case";

export interface RuleResult {
  ok: boolean;
  flags: string[];
}

export function validateCase(input: OnboardingCase): RuleResult {
  const flags: string[] = [];

  if (!input.employeeName.trim()) flags.push("Missing employee name");
  if (!input.country.trim()) flags.push("Missing country");
  if (!input.startDate.trim()) flags.push("Missing start date");
  if (!input.contractType.trim()) flags.push("Missing contract type");
  if (!input.documents.contract) flags.push("Missing employment contract");
  if (!input.documents.signature) flags.push("Missing signature");
  if (!input.documents.rightToWork) flags.push("Missing right-to-work evidence");

  return { ok: flags.length === 0, flags };
}
