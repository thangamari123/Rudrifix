const fs = require("fs");
const files = ["src/pages/AboutPage.jsx", "src/components/AEO/FAQSection.jsx"];

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");

  // Adjust headings
  content = content.replace(/text-4xl md:text-5xl/g, "text-3xl md:text-5xl");
  content = content.replace(/text-3xl md:text-4xl/g, "text-2xl md:text-4xl");
  
  // Update Hero text size
  content = content.replace(/text-5xl md:text-7xl/g, "text-4xl md:text-6xl lg:text-7xl");
  
  // Card paddings
  content = content.replace(/p-8 md:p-10/g, "p-6 md:p-10");
  
  // Section layout
  content = content.replace(/max-w-7xl mx-auto px-4 sm:px-6 lg:px-8/g, "max-w-7xl mx-auto px-4 md:px-6 lg:px-8");

  fs.writeFileSync(file, content, "utf8");
});
console.log("Done");

