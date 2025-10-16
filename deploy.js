import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy dist contents to root
const distDir = path.join(__dirname, 'dist');
const rootDir = __dirname;

// Files to copy to root
const filesToCopy = ['index.html', 'assets'];

// Backup old files
const backupDir = path.join(__dirname, 'old-site');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

// Backup old index.html
if (fs.existsSync(path.join(rootDir, 'index.html'))) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  fs.copyFileSync(
    path.join(rootDir, 'index.html'),
    path.join(backupDir, `index-${timestamp}.html`)
  );
}

// Copy files from dist to root
function copyRecursive(src, dest) {
  if (fs.statSync(src).isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(item => {
      copyRecursive(path.join(src, item), path.join(dest, item));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy index-vite.html as index.html
const viteHtmlPath = path.join(distDir, 'index-vite.html');
if (fs.existsSync(viteHtmlPath)) {
  fs.copyFileSync(viteHtmlPath, path.join(rootDir, 'index.html'));
  console.log('✓ Copied index-vite.html as index.html to root');
} else if (fs.existsSync(path.join(distDir, 'index.html'))) {
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(rootDir, 'index.html'));
  console.log('✓ Copied index.html to root');
}

// Copy assets folder
const assetsPath = path.join(distDir, 'assets');
if (fs.existsSync(assetsPath)) {
  const destAssets = path.join(rootDir, 'assets');
  if (fs.existsSync(destAssets)) {
    fs.rmSync(destAssets, { recursive: true, force: true });
  }
  copyRecursive(assetsPath, destAssets);
  console.log('✓ Copied assets folder to root');
}

console.log('\n✅ Deployment complete! Your site is ready at the root directory.');
console.log('📁 Old files backed up to:', backupDir);
