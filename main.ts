import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (122 chars) explaining the modern internet to a traveler
// from 1800. Every word predates 1800: a web the traveler knows, a whisper,
// London, Boston, a candle. One picture, no list of features.
const SENTENCE =
  "Imagine a web spun across the whole earth, where a whisper in London reaches Boston before the candle beside you flickers.";

const OUTPUT = "/output/entry.txt";
const MAX_CHARS = 200;

function validate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.endsWith("\n")) {
    throw new Error("entry must not end with a newline");
  }
  const sentences = text.split(".").filter((s) => s.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error(`entry must be exactly one sentence, got ${sentences.length}`);
  }
}

validate(SENTENCE);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, SENTENCE, "utf8");
