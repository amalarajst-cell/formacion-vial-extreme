
const fs = require('fs');

// Helpers
const toBase64 = (svg) => `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;

// SVGs
const giroObligatorioSvg = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="90" fill="#1976D2" stroke="#FFFFFF" stroke-width="4"/>
  <path d="M60 100 L110 100 L110 140 L150 90 L110 40 L110 80 L60 80 Z" fill="#FFFFFF" transform="rotate(-45 100 100)"/>
</svg>`;

const prohibidoGiroDerechaSvg = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="90" fill="#FFFFFF" stroke="#D32F2F" stroke-width="20"/>
  <path d="M60 100 L100 100 L100 70 L140 110 L100 150 L100 120 L60 120 Z" fill="#000000"/>
  <path d="M40 160 L160 40" stroke="#D32F2F" stroke-width="15"/>
</svg>`;

const policiaSvg = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="180" height="180" rx="20" fill="#1976D2" stroke="#FFFFFF" stroke-width="4"/>
  <path d="M100 40 L160 60 V120 C160 150 100 180 100 180 C100 180 40 150 40 120 V60 Z" fill="none" stroke="#FFFFFF" stroke-width="8"/>
  <text x="100" y="110" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="30" fill="#FFFFFF">POLICIA</text>
</svg>`;

const estacionamientoSvg = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="180" height="180" rx="20" fill="#1976D2" stroke="#FFFFFF" stroke-width="4"/>
  <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="120" fill="#FFFFFF">E</text>
</svg>`;

const materialCalzadaSvg = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="41.4" y="41.4" width="117.2" height="117.2" transform="rotate(45 100 100)" fill="#FFA726" stroke="#000000" stroke-width="2"/>
  <path d="M60 140 Q100 80 140 140 Z" fill="#000000"/>
  <circle cx="80" cy="110" r="10" fill="#000000"/>
  <circle cx="110" cy="90" r="8" fill="#000000"/>
</svg>`;

const equipoPesadoSvg = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="41.4" y="41.4" width="117.2" height="117.2" transform="rotate(45 100 100)" fill="#FFA726" stroke="#000000" stroke-width="2"/>
  <path d="M60 120 L140 120 L140 100 L110 100 L110 80 L90 80 L90 100 L60 100 Z" fill="#000000"/>
  <circle cx="75" cy="130" r="10" fill="#000000"/>
  <circle cx="125" cy="130" r="10" fill="#000000"/>
</svg>`;

const trianguloCedaSvg = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#333333"/>
  <path d="M20 20 L180 20 L100 180 Z" fill="#FFFFFF"/>
</svg>`;

const flechaRectaSvg = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#333333"/>
  <path d="M80 120 L80 180 L120 180 L120 120 L160 120 L100 20 L40 120 Z" fill="#FFFFFF"/>
</svg>`;

const output =
  `GIRO_OBLIGATORIO=${toBase64(giroObligatorioSvg)}\n` +
  `PROHIBIDO_GIRO=${toBase64(prohibidoGiroDerechaSvg)}\n` +
  `POLICIA=${toBase64(policiaSvg)}\n` +
  `ESTACIONAMIENTO=${toBase64(estacionamientoSvg)}\n` +
  `MATERIAL=${toBase64(materialCalzadaSvg)}\n` +
  `EQUIPO=${toBase64(equipoPesadoSvg)}\n` +
  `TRIANGULO=${toBase64(trianguloCedaSvg)}\n` +
  `FLECHA_RECTA=${toBase64(flechaRectaSvg)}`;

fs.writeFileSync('new_signs.txt', output);
console.log('Signs generated in new_signs.txt');
