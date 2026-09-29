import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const repository = fileURLToPath(new URL('../../', import.meta.url));
const excluded = new Set(['node_modules', 'assets', 'dist', 'public', 'images']);
const extensions = new Set(['.js', '.jsx', '.mjs', '.css', '.html', '.json', '.md']);
const violations = [];
let count = 0;
let largest = { lines: 0, path: '' };

async function check(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || excluded.has(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await check(path);
      continue;
    }
    if (!entry.isFile() || entry.name.endsWith('lock.json')) continue;
    if (!extensions.has(extname(path)) && entry.name !== 'Makefile') continue;

    const contents = await readFile(path, 'utf8');
    const lines = contents.replace(/\n$/, '').split('\n');
    const label = relative(repository, path);
    count++;
    if (lines.length > largest.lines) largest = { lines: lines.length, path: label };
    if (lines.length > 2000) violations.push(`${label}: ${lines.length} lines`);
    lines.forEach((line, index) => {
      if ([...line].length > 2000) violations.push(`${label}:${index + 1}: more than 2000 characters`);
    });
  }
}

await check(repository);
if (violations.length) {
  console.error(violations.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`${count} authored files checked. Largest: ${largest.path}, ${largest.lines} lines.`);
  console.log('All authored files and lines satisfy the 2000 limit. Generated assets are excluded.');
}
