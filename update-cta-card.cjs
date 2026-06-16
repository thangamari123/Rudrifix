const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

let modifiedCount = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Reduce card padding
  // From: p-12 md:p-20
  // To: p-8 sm:p-12 md:p-20
  content = content.replace(
    /rounded-\[3rem\] p-12 md:p-20/,
    'rounded-[2rem] md:rounded-[3rem] p-8 sm:p-10 md:p-20'
  );

  // 2. Reduce heading size
  // From: text-4xl md:text-5xl font-black text-white mb-6 relative z-10
  // To: text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 relative z-10
  content = content.replace(
    /text-4xl md:text-5xl font-black text-white mb-6/,
    'text-[28px] leading-tight sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6'
  );

  // 3. Reduce paragraph size
  // From: text-xl text-blue-100 mb-10
  // To: text-base md:text-xl text-blue-100 mb-8 md:mb-10
  content = content.replace(
    /text-xl text-blue-100 mb-10/,
    'text-[15px] sm:text-base md:text-xl text-blue-100 mb-8 md:mb-10 leading-snug md:leading-relaxed'
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    modifiedCount++;
  }
});

console.log(`Successfully made CTA card compact in ${modifiedCount} files.`);
