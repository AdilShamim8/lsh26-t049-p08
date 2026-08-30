/**
 * P08 engine + adapter verification (CLI).
 * Runs the exact same assertion suite the in-app "Verify" panel uses, so the
 * judged artifact and the shipped app can never drift apart.
 * Run: bun scripts/verify-p08.ts
 */
import { runSelfTests } from "../src/lib/p08/selftest";

const results = runSelfTests();
let lastCategory = "";
let failures = 0;
let passed = 0;

for (const r of results) {
  if (r.category !== lastCategory) {
    console.log(`\n${r.category}`);
    lastCategory = r.category;
  }
  if (r.passed) {
    passed++;
    console.log(`  PASS  ${r.label}`);
  } else {
    failures++;
    console.error(`  FAIL  ${r.label}${r.detail ? `  [${r.detail}]` : ""}`);
  }
}

console.log(`\n${passed} passed, ${failures} failed, ${results.length} total`);
console.log(failures === 0 ? "ALL CHECKS PASSED" : "CHECKS FAILED");
process.exit(failures === 0 ? 0 : 1);
