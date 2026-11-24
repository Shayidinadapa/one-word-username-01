import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: the entrant's own make.fun username, one word, nothing else.
const USERNAME = "shayidinadapa";

// The gate requires 1-30 characters and not only whitespace.
if (USERNAME.length < 1 || USERNAME.length > 30) {
  throw new Error(`entry text must be 1-30 characters, got ${USERNAME.length}`);
}
if (USERNAME.trim().length === 0) {
  throw new Error("entry text must not be only whitespace");
}

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });

const filePath = join(outputDir, "entry.txt");
writeFileSync(filePath, USERNAME, "utf8");

// Read the file back and compare byte-for-byte with what was written.
const written = readFileSync(filePath, "utf8");
if (written !== USERNAME) {
  throw new Error(
    `read-back mismatch: expected ${JSON.stringify(USERNAME)}, got ${JSON.stringify(written)}`,
  );
}

console.log(USERNAME);
