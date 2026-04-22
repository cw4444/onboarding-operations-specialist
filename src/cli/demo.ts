import { sampleCase } from "../demo/sample-case.js";
import { processCase } from "../engine/pipeline.js";

const result = processCase(sampleCase);

const divider = "─".repeat(72);

console.log("\nOnboarding Ops Copilot Demo");
console.log(divider);
console.log(`Case ID     : ${result.case.id}`);
console.log(`Employee    : ${result.case.employeeName}`);
console.log(`Country     : ${result.case.country}`);
console.log(`Start date  : ${result.case.startDate}`);
console.log(`Route       : ${result.case.route}`);
console.log(`Status      : ${result.case.status}`);
console.log(`Risk flags  : ${result.case.riskFlags.length ? result.case.riskFlags.join(", ") : "None"}`);
console.log(divider);
console.log("\nSummary\n");
console.log(result.summary);
console.log("\nDraft follow-up\n");
console.log(result.followUpDraft);
console.log("");
