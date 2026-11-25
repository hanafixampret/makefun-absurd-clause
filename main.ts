import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "In the event of your death, your account shall pass to your nearest living houseplant, which must accept these terms by photosynthesizing within thirty (30) days.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
if (!/shall|hereby|terms|agree/.test(ENTRY)) {
  throw new Error("entry must read like a terms-of-service clause");
}
if (!ENTRY.endsWith(".")) {
  throw new Error("entry must be one complete sentence ending with a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
