import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, '..', 'dist');
const indexPath = join(distPath, 'index.html');
const notFoundPath = join(distPath, '404.html');

try {
  const indexContent = readFileSync(indexPath, 'utf-8');
  writeFileSync(notFoundPath, indexContent, 'utf-8');
  console.log('✓ Created 404.html for GitHub Pages SPA routing');
} catch (error) {
  console.error('Error creating 404.html:', error);
  process.exit(1);
}

