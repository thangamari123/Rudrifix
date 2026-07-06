
const fs = require("fs");
const path = require("path");

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
}

const files = walkSync("src").filter(f => f.endsWith(".jsx"));
let output = "";

files.forEach(file => {
  const content = fs.readFileSync(file, "utf8");
  const h1Match = content.match(/<(?:motion\.)?h1[^>]*>([\s\S]*?)<\/(?:motion\.)?h1>/g);
  
  if (h1Match) {
    output += `\n--- ${file} ---\n`;
    h1Match.forEach(m => output += m.replace(/\s+/g, " ") + "\n");
  } else {
    // Check if it might have an h2 as the main title
    const h2Match = content.match(/<(?:motion\.)?h2[^>]*>([\s\S]*?)<\/(?:motion\.)?h2>/g);
    if (h2Match && content.includes("export default function")) {
        output += `\n--- ${file} (NO H1) ---\n`;
        output += h2Match[0].replace(/\s+/g, " ") + "\n";
    }
  }
});

fs.writeFileSync("h1_audit_results.txt", output);
console.log("Scan complete");

