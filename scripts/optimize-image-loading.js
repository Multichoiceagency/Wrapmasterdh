/**
 * Optimize Image Loading Script
 *
 * This script removes unnecessary `priority` attributes from Next.js Image components,
 * keeping only the first hero image with priority for each page.
 *
 * Images without priority automatically use lazy loading in Next.js.
 *
 * Usage: node scripts/optimize-image-loading.js
 */

const fs = require('fs');
const path = require('path');

const PROJECT_DIR = path.join(__dirname, '..');

// Files to process
const filesToProcess = [
  // Service pages - keep first hero, remove rest
  'app/carwrapping/page.tsx',
  'app/bodykit/page.tsx',
  'app/chrome-delete/page.tsx',
  'app/alloygator/page.tsx',
  'app/ambient-light/page.tsx',
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
  // Components - keep strategic priority, remove rest
  'components/ThreeDCarwrapping.tsx',
  'components/NewCustomSection.tsx',
  'app/components/Customsection/CustomSection.tsx',
  'app/components/Diensten/Diensten.tsx',
];

function optimizeFile(filePath) {
  const fullPath = path.join(PROJECT_DIR, filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${filePath} - file not found`);
    return 0;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;

  // Count priority occurrences
  const priorityMatches = content.match(/priority/g) || [];
  const priorityCount = priorityMatches.length;

  if (priorityCount <= 1) {
    console.log(`${filePath}: Already optimized (${priorityCount} priority)`);
    return 0;
  }

  // Strategy: Keep first priority (hero image), remove subsequent ones
  let firstPriorityFound = false;

  // Replace priority attributes after the first one
  // Match patterns like: priority, priority={true}, priority={index === 0}
  content = content.replace(/(\s+)priority(\s*=\s*\{[^}]+\})?/g, (match, whitespace) => {
    if (!firstPriorityFound) {
      firstPriorityFound = true;
      return match; // Keep the first priority
    }
    return ''; // Remove subsequent priorities
  });

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    const newPriorityCount = (content.match(/priority/g) || []).length;
    console.log(`${filePath}: Optimized (${priorityCount} → ${newPriorityCount} priority)`);
    return priorityCount - newPriorityCount;
  }

  return 0;
}

function main() {
  console.log('='.repeat(60));
  console.log('Optimizing Image Loading');
  console.log('='.repeat(60));
  console.log('\nRemoving unnecessary priority attributes...\n');

  let totalRemoved = 0;
  let filesModified = 0;

  for (const file of filesToProcess) {
    const removed = optimizeFile(file);
    if (removed > 0) {
      totalRemoved += removed;
      filesModified++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('Optimization Complete!');
  console.log('='.repeat(60));
  console.log(`Files modified: ${filesModified}`);
  console.log(`Priority attributes removed: ${totalRemoved}`);
  console.log('\nImages without priority will now use lazy loading automatically.');
}

main();
