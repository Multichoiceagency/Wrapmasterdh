/**
 * Fix Skeleton Animations Script
 * Removes animate-pulse from skeleton loaders and replaces with cleaner styling
 *
 * Usage: node scripts/fix-skeleton-animations.js
 */

const fs = require('fs');
const path = require('path');

const PROJECT_DIR = path.join(__dirname, '..');

const filesToProcess = [
  'app/carwrapping/page.tsx',
  'app/bodykit/page.tsx',
  'app/chrome-delete/page.tsx',
  'app/alloygator/page.tsx',
  'app/lampentinten/page.tsx',
  'app/gordelkleur-veranderen/page.tsx',
  'app/detailing/page.tsx',
  'app/reclame-en-design/page.tsx',
  'app/folie-verwijderen/page.tsx',
  'app/sterrenhemel/page.tsx',
  'app/velgen-poedercoaten/page.tsx',
  'app/ppf/page.tsx',
  'app/ramentinten/page.tsx',
  'app/scooter-motor-wrap/page.tsx',
  'app/remklauwen/page.tsx',
  'app/alarmbeveiliging-auto/page.tsx',
];

function fixSkeletonAnimation(filePath) {
  const fullPath = path.join(PROJECT_DIR, filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${filePath} - file not found`);
    return 0;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;

  // Replace animate-pulse with just bg-white (shimmer is already in Skeleton component)
  // Pattern: <div className="animate-pulse bg-white"> or <div className="animate-pulse">
  content = content.replace(
    /<div className="animate-pulse bg-white">/g,
    '<div className="bg-white min-h-screen">'
  );

  content = content.replace(
    /<div className="animate-pulse">/g,
    '<div className="min-h-screen">'
  );

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return 1;
  }

  console.log(`No changes needed: ${filePath}`);
  return 0;
}

function main() {
  console.log('='.repeat(60));
  console.log('Fixing Skeleton Animations');
  console.log('='.repeat(60));
  console.log('\nRemoving animate-pulse from skeleton loaders...\n');

  let filesFixed = 0;

  for (const file of filesToProcess) {
    const fixed = fixSkeletonAnimation(file);
    filesFixed += fixed;
  }

  console.log('\n' + '='.repeat(60));
  console.log('Done!');
  console.log('='.repeat(60));
  console.log(`Files fixed: ${filesFixed}`);
}

main();
