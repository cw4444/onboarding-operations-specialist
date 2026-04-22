import { sampleCase } from "./sample-case";
import { processCase } from "../engine/pipeline";

const result = processCase(sampleCase);

console.log("=== Summary ===");
console.log(result.summary);
console.log("");
console.log("=== Follow-up Draft ===");
console.log(result.followUpDraft);
console.log("");
console.log("=== Route ===");
console.log(result.case.route);
