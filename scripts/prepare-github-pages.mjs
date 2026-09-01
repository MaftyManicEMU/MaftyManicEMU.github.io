import { copyFile, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const clientDir = path.join(projectRoot, 'dist', 'client');
const cleanRoutes = ['author', 'pilgrims', 'world'];

for (const route of cleanRoutes) {
  const source = path.join(clientDir, `${route}.html`);
  const destinationDir = path.join(clientDir, route);

  await mkdir(destinationDir, { recursive: true });
  await copyFile(source, path.join(destinationDir, 'index.html'));
}

async function removePdfFiles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await removePdfFiles(entryPath);
    } else if (entry.name.toLowerCase().endsWith('.pdf')) {
      await rm(entryPath);
    }
  }
}

await removePdfFiles(clientDir);
