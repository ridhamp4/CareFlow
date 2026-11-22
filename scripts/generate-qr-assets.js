/*
 * Generates self-contained SVG labels for CareFlow's seeded locations.
 * The checked-in SVGs mean the website never needs a QR CDN at runtime.
 * Run with: node scripts/generate-qr-assets.js
 */
const fs = require('fs');
const path = require('path');
const QRCode = require('/opt/homebrew/lib/node_modules/npm/node_modules/qrcode-terminal/vendor/QRCode');
const ErrorLevel = require('/opt/homebrew/lib/node_modules/npm/node_modules/qrcode-terminal/vendor/QRCode/QRErrorCorrectLevel');

const baseUrl = 'https://careflow-iitgn-ux.huedpheasant4.chatgpt.site/';
const locations = ['hostel-h-2', 'academic-4-east', 'library-north', 'dining-corridor'];
const outputDirectory = path.join(__dirname, '..', 'dist', 'assets', 'qr');
fs.mkdirSync(outputDirectory, { recursive: true });

for (const spot of locations) {
  const payload = `${baseUrl}?spot=${encodeURIComponent(spot)}`;
  const qr = new QRCode(-1, ErrorLevel.M);
  qr.addData(payload);
  qr.make();

  const quietZone = 4;
  const count = qr.getModuleCount();
  const size = count + quietZone * 2;
  const cells = [];
  qr.modules.forEach((row, y) => row.forEach((dark, x) => {
    if (dark) cells.push(`M${x + quietZone} ${y + quietZone}h1v1h-1z`);
  }));
  const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" role="img" aria-label="CareFlow QR label for ${spot}" shape-rendering="crispEdges"><rect width="${size}" height="${size}" fill="#ffffff"/><path d="${cells.join('')}" fill="#123e3a"/></svg>\n`;
  fs.writeFileSync(path.join(outputDirectory, `${spot}.svg`), svg);
  console.log(`Created QR label for ${payload}`);
}
