import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

function parseCSV(text) {
  const rows = [];
  let i = 0;
  const lines = [];
  let line = '';

  // Handle \r\n and \n
  const normalized = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();

  // Parse char by char to handle quoted fields properly
  let inQuote = false;
  let field = '';
  const fields = [];

  for (let c = 0; c <= normalized.length; c++) {
    const ch = c < normalized.length ? normalized[c] : '\n'; // sentinel newline at end
    if (inQuote) {
      if (ch === '"') {
        if (normalized[c + 1] === '"') { field += '"'; c++; }
        else inQuote = false;
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') { inQuote = true; }
      else if (ch === ',') { fields.push(field); field = ''; }
      else if (ch === '\n') {
        fields.push(field); field = '';
        lines.push([...fields]); fields.length = 0;
      } else {
        field += ch;
      }
    }
  }

  if (lines.length === 0) return [];
  const headers = lines[0];
  for (const row of lines.slice(1)) {
    if (row.every(v => v === '')) continue;
    const obj = {};
    headers.forEach((h, i) => { obj[h.trim()] = (row[i] || '').trim(); });
    rows.push(obj);
  }
  return rows;
}

const dataDir = resolve('./src/data');

// candidates2022.csv -> candidates2022.json
const csv2022 = readFileSync(`${dataDir}/candidates2022.csv`, 'utf-8');
const nodes2022 = parseCSV(csv2022);
writeFileSync(`${dataDir}/candidates2022.json`, JSON.stringify({ nodes: nodes2022 }, null, 2));
console.log(`candidates2022.json: ${nodes2022.length} rows`);

// primaryCandidates2023.csv -> primaryCandidates2023.json
const csvPrimary2023 = readFileSync(`${dataDir}/primaryCandidates2023.csv`, 'utf-8');
const nodesPrimary2023 = parseCSV(csvPrimary2023);
writeFileSync(`${dataDir}/primaryCandidates2023.json`, JSON.stringify({ nodes: nodesPrimary2023 }, null, 2));
console.log(`primaryCandidates2023.json: ${nodesPrimary2023.length} rows`);
