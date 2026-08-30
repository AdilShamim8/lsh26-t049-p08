/* Dump engine-verified numbers for every DEMO-EDGE-10 student. */
import { getEdgeDemoResult } from "../src/lib/p08/edge-demo";

const demo = getEdgeDemoResult();
for (const r of demo.results) {
  const comp = r.traces
    .filter((t) => t.compulsory)
    .map((t) => `${t.subjectId}:${t.gradePoint.toFixed(1)}`)
    .join(" ");
  console.log(
    `${r.student.id} ${r.student.name.padEnd(18)} class=${r.student.classId} | Σ=${r.compulsorySum.toFixed(1)} opt=${r.optionalGradePoint.toFixed(1)} bonus=${r.optionalContribution.toFixed(1)} raw=${r.uncancelledRaw.toFixed(4)} unc=${r.uncancelledGpa.toFixed(2)} final=${r.finalGpa.toFixed(2)} ${r.letter} | ${comp} | lists: OPT=${r.checking.optionalList ? 1 : 0} PRAC=${r.checking.practicalFailList ? 1 : 0} AB=${r.checking.absentList ? 1 : 0}`
  );
}
console.log("roll of first student:", demo.results[0].student.roll);
