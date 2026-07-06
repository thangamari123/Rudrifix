const fs = require("fs");
const files = ["src/pages/AboutPage.jsx", "src/components/AEO/FAQSection.jsx"];

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");

  // Padding
  content = content.replace(/\bpy-24\b/g, "py-12 md:py-20");
  content = content.replace(/\bpy-20\b/g, "py-10 md:py-16");
  
  // Margins
  content = content.replace(/\bmb-24\b/g, "mb-12 md:mb-20");
  content = content.replace(/\bmb-20\b/g, "mb-10 md:mb-16");
  content = content.replace(/\bmb-16\b/g, "mb-8 md:mb-12");

  // Gaps (only large ones)
  content = content.replace(/\bgap-16\b/g, "gap-8 md:gap-16");
  content = content.replace(/\bgap-12\b/g, "gap-6 md:gap-12");
  
  // Padding all around (large ones)
  content = content.replace(/\bp-16\b/g, "p-8 md:p-12");
  content = content.replace(/\bp-12\b/g, "p-6 md:p-10");
  content = content.replace(/\bp-10\b/g, "p-6 md:p-10");

  fs.writeFileSync(file, content, "utf8");
});
console.log("Done");

