const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

let modifiedCount = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Reduce the massive py-24 section gap wrapper to py-4 on mobile and py-24 on desktop
  // If it's already py-24, replace it.
  content = content.replace(
    /<section className="py-24 relative overflow-hidden z-10">/g,
    '<section className="py-2 sm:py-6 md:py-24 relative overflow-hidden z-10">'
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    modifiedCount++;
  }
});

console.log(`Successfully removed gaps from CTA wrapping section in ${modifiedCount} files.`);
