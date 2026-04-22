import type { OnboardingCase } from "../models/case";

export const sampleCase: OnboardingCase = {
  id: "ONB-1001",
  source: "form",
  status: "intake",
  employeeName: "Jordan Taylor",
  country: "United Kingdom",
  startDate: "2026-05-01",
  contractType: "Employment",
  entity: "Remote UK Ltd",
  payrollPath: "UK payroll",
  documents: {
    contract: true,
    signature: false,
    rightToWork: true,
  },
  notes: ["Received via internal onboarding form"],
  riskFlags: [],
  route: "none",
};
