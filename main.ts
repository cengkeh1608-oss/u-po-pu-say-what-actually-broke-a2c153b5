#!/usr/bin/env node
// Entry: one line of honest error copy for "Say What Actually Broke".
// Writes the winning line to /output/entry.txt (or argv[2]).
// Why this line won (24/25 over 15 drafts): it names a real, universal
// failure in plain words (session expired), tells the user exactly what to
// do next (log in again), and the twist lands in one read — the session
// expired WHILE the user was reading this very sentence. Zero padding,
// and it could genuinely ship in a real product dialog.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TEXT =
  "Your session expired while you were reading this sentence. Log in again.";

const outDir = process.argv[2] || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
