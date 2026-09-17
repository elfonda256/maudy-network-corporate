const fs = require('fs');
const path = require('path');

const pdfPath = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\15854043-88f0-42fe-8a2b-7f4622ecb92d\\.user_uploaded\\media_1789629232372.pdf';
const outDir = path.join(__dirname, 'public', 'extracted');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const buf = fs.readFileSync(pdfPath);
let count = 0;
let pos = 0;
const images = [];

while ((pos = buf.indexOf(Buffer.from([0xFF, 0xD8, 0xFF]), pos)) !== -1) {
  const end = buf.indexOf(Buffer.from([0xFF, 0xD9]), pos);
  if (end !== -1 && end > pos + 1000) {
    const imgData = buf.subarray(pos, end + 2);
    count++;
    const filename = `img_${String(count).padStart(3, '0')}.jpg`;
    const fullPath = path.join(outDir, filename);
    fs.writeFileSync(fullPath, imgData);
    images.push({ filename, size: imgData.length });
    pos = end + 2;
  } else {
    pos += 3;
  }
}

console.log(`Successfully extracted ${count} images to ${outDir}`);
