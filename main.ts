// Entry: one funny single-line developer excuse for when code breaks in production.
// The joke's setup/turn: the developer blames production as if it were a person
// with feelings — the code was fine, the server just got offended by an old TODO
// comment and decided to take revenge. The fault is framed as a grudge, not a bug.
import * as fs from "node:fs";

const ENTRY =
  "Production didn't break my code, it just finally read the TODO I left in 2019 and took it personally.";

if (ENTRY.length === 0) throw new Error("entry is empty");
if (ENTRY.length > 200) throw new Error(`entry is ${ENTRY.length} chars, over the 200 limit`);
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

const back = fs.readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY + "\n") throw new Error("round-trip mismatch in /output/entry.txt");

console.log(`entry written: ${ENTRY.length} chars`);
console.log(ENTRY);
