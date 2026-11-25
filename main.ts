// The Funniest Office Joke, Judged Head to Head
// Writes a single one-line office joke to /output/entry.txt.
// The joke: a meeting about too many meetings that runs over, so a
// follow-up is scheduled to discuss why it ran over — the problem
// reproducing itself is the punchline, and it lands last.
// Kept to one line and well under the 200-character gate (117 chars),
// with no trailing newline, so the file holds exactly the joke.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "We had a meeting about having too many meetings; it ran over, so we scheduled a follow-up to discuss why it ran over.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
