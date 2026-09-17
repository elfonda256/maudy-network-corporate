const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'public', 'extracted');
const files = fs.readdirSync(p).filter(f => f.endsWith('.jpg'));
let html = `<!DOCTYPE html><html><head><style>
body { background: #0b1f3a; color: #fff; font-family: sans-serif; display: flex; flex-wrap: wrap; gap: 15px; padding: 20px; }
.card { background: #081522; border: 1px solid rgba(0,198,255,0.3); border-radius: 8px; padding: 10px; width: 220px; text-align: center; }
h4 { margin: 0 0 8px 0; font-size: 13px; color: #00c6ff; }
img { width: 100%; height: 140px; object-fit: cover; border-radius: 4px; background: #000; }
</style></head><body>`;
files.forEach(f => {
  html += `<div class="card"><h4>${f}</h4><img src="./${f}" /></div>`;
});
html += '</body></html>';
fs.writeFileSync(path.join(p, 'preview.html'), html);
console.log('Created preview.html for ' + files.length + ' images');
