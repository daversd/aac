import { Entry } from '../core/entry';

export function entriesToCsv (entries: Entry[]): string {
  const headers = Object.keys(entries[0]).join('|') + '\n';
  const rows = entries.map((entry) => Object.values(entry).map(v => v || '').join('|') + '\n');
  return headers + rows.join('');
}
