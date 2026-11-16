// ai-excited-01 entry: "The Upward Fall".
// A waterfall that climbs into the stars, with one small sailboat riding it up.
// The image ships beside this program; the program writes those exact bytes to
// the grader's output directory. Node 22, standard library only, no network.
//
// Local test:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// Byte-exact copy: the grader sees the same 1024x1024 image, untouched.
const bytes = readFileSync(join(here, 'entry.png'));
if (bytes.length === 0) throw new Error('entry.png is empty — refusing to write a blank entry');
writeFileSync(join(outDir, 'entry.png'), bytes);
