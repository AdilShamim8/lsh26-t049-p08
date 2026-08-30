/**
 * P08 — reproduce the app's determinism fingerprint from repository source.
 *
 * This is the judge-facing proof that the deployed app and the shipped code
 * are the same machine: the hash printed here must equal the fingerprint
 * shown in the app's "Proof" tab for the same case.
 *
 * Usage:
 *   bun scripts/fingerprint.ts [CASE_ID]      # default: PUB-02
 *   npx tsx scripts/fingerprint.ts [CASE_ID]  # same, via tsx
 *
 * Exit code 0 on success; the command prints input/output/fingerprint hashes.
 */
import { computeCase, getPublishedFixture } from "../src/lib/p08/fixture";
import { fingerprintCase, P08_ENGINE_REV } from "../src/lib/p08/fingerprint";

const wanted = process.argv[2] ?? "PUB-02";
const { cases } = getPublishedFixture();

const idx = cases.findIndex(
  (c) => String((c as { case_id?: unknown }).case_id ?? "").toUpperCase() === wanted.toUpperCase()
);
if (idx === -1) {
  console.error(`Case "${wanted}" not found in the bundled published fixture.`);
  console.error(
    `Available: ${cases.map((c) => (c as { case_id?: unknown }).case_id).join(", ")}`
  );
  process.exit(2);
}

const caseId = String((cases[idx] as { case_id?: unknown }).case_id);
const t0 = performance.now();
const { normalized, results } = computeCase(cases[idx], `PUB-${idx + 1}`);
const fp = fingerprintCase(normalized.caseId, normalized, results);
const ms = Math.round((performance.now() - t0) * 100) / 100;

console.log(`P08 determinism fingerprint`);
console.log(`  engine rev     : ${P08_ENGINE_REV}`);
console.log(`  case           : ${caseId} (${fp.students} students)`);
console.log(`  input  sha256  : ${fp.inputHash}`);
console.log(`  output sha256  : ${fp.outputHash}`);
console.log(`  FINGERPRINT    : ${fp.fingerprint}`);
console.log(`  computed in    : ${ms} ms (single pass, no cache)`);
console.log(`\nCompare with the app's Proof tab — the hashes must match exactly.`);
