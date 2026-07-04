import fs from 'fs';
import path from 'path';

const markdownPath = path.join(process.cwd(), '..', '..', '..', '.gemini', 'antigravity', 'brain', 'c9bbb2f9-bb9b-4d72-9f56-d79b9e6c9ac7', 'tn_local_seo_metadata.md');
// Wait, the path to the artifact is absolute: C:\Users\thang\.gemini\antigravity\brain\c9bbb2f9-bb9b-4d72-9f56-d79b9e6c9ac7\tn_local_seo_metadata.md

const absolutePath = 'C:\\Users\\thang\\.gemini\\antigravity\\brain\\c9bbb2f9-bb9b-4d72-9f56-d79b9e6c9ac7\\tn_local_seo_metadata.md';

const content = fs.readFileSync(absolutePath, 'utf8');

const blocks = content.split('# ').filter(b => b.trim() !== '');

const data = {};

blocks.forEach(block => {
  const lines = block.split('\n').map(l => l.trim()).filter(l => l !== '');
  const city = lines[0].toLowerCase().replace(/\s+/g, '-');
  
  const metadata = {};
  lines.forEach(line => {
    if (line.startsWith('Meta Title:')) metadata.title = line.replace('Meta Title:', '').trim();
    if (line.startsWith('Meta Description:')) metadata.description = line.replace('Meta Description:', '').trim();
    if (line.startsWith('SEO Keywords:')) metadata.keywords = line.replace('SEO Keywords:', '').trim();
    if (line.startsWith('AEO Summary:')) metadata.aeoSummary = line.replace('AEO Summary:', '').trim();
  });
  
  if (metadata.title) {
    data[city] = metadata;
  }
});

const output = `// Auto-generated from tn_local_seo_metadata.md

const locationMetadata = ${JSON.stringify(data, null, 2)};

export default locationMetadata;
`;

const dir = path.join(process.cwd(), 'src', 'data');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

fs.writeFileSync(path.join(dir, 'locationMetadata.js'), output);
console.log('Successfully generated src/data/locationMetadata.js');
