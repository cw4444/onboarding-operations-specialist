import type { OnboardingCase, RouteQueue } from "../models/case";

export function routeCase(input: OnboardingCase): RouteQueue {
  const combined = `${input.country} ${input.contractType} ${input.entity ?? ""}`.toLowerCase();

  if (combined.includes("mobility") || combined.includes("visa")) return "mobility";
  if (combined.includes("payroll")) return "payroll";
  if (combined.includes("benefit")) return "benefits";
  if (combined.includes("legal") || combined.includes("contractor")) return "legal";

  return input.riskFlags.length > 0 ? "onboarding_ops" : "none";
}
