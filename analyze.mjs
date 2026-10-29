import fs from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';

const load = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const source = stripTypeScriptTypes(fs.readFileSync('src/lib/kb/causes.ts', 'utf8'));
const { uniqueById, groupByCause, readAs } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const tenants = fs.readdirSync('src/lib/data/tenants').map(f => load(`src/lib/data/tenants/${f}`));
const raw = load('src/lib/data/reports-4471.json');
const reports = uniqueById(raw).filter(r => r.mergedInto === 4471);
const groups = groupByCause(reports, r => tenants.find(t => t.handle === r.tenant));
const summary = {rawRows:raw.length, uniqueReports:reports.length, duplicateRows:raw.length-reports.length, groups:groups.map(g => ({...g, count:g.reports.length, oneDayMoves:readAs(g,load('src/lib/data/desk-notes.json').oneDayMove), reports:g.reports.map(r=>r.id)}))};
fs.writeFileSync('analysis.json', JSON.stringify(summary, null, 2));
console.log(JSON.stringify({...summary,groups:summary.groups.map(({reports,...g})=>g)},null,2));
