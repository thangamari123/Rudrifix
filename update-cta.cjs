const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

let modifiedCount = 0;
const targetClass = 'className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-gray-50 transition-colors relative z-10 text-lg shadow-xl shadow-black/10 hover:scale-105 transform duration-300"';
const newClass = 'className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-gray-50 transition-colors relative z-10 text-base md:text-lg shadow-xl shadow-black/10 hover:scale-105 transform duration-300"';

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(targetClass)) {
    content = content.replace(targetClass, newClass);
    fs.writeFileSync(filePath, content);
    modifiedCount++;
  }
});
console.log(`Successfully made CTA button compact in ${modifiedCount} files.`);
