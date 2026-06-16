const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

let modifiedCount = 0;
files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('Locations We Serve')) {
    // Also match in case the hidden class is already there to prevent duplicates
    if (!content.includes('className="hidden py-24 relative z-10 bg-white/50 border-t border-blue-100"')) {
      content = content.replace(
        '<section className="py-24 relative z-10 bg-white/50 border-t border-blue-100">',
        '<section className="hidden py-24 relative z-10 bg-white/50 border-t border-blue-100">'
      );
      fs.writeFileSync(filePath, content);
      modifiedCount++;
    }
  }
});
console.log(`Successfully hid Locations We Serve in ${modifiedCount} files.`);
