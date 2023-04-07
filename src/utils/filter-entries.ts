import { Entry } from "../core/entry";

export interface FilterEntryProps {
  entries: Entry[],
  keywordsFilter?: string[],
  authorFilter?: string[],
  yearFilter?: string[],
  typeFilter?: string[],
  abstractFilter?: string[],
}
export function FilterEntriesByData({entries, keywordsFilter, authorFilter, yearFilter, typeFilter, abstractFilter}: FilterEntryProps): Entry[] {
  const filtered: Entry[] = [];
  for (const entry of entries) {
    if (keywordsFilter && !entry.keywords.some(e => matchPattern((e), keywordsFilter))) continue;
    if (authorFilter && !entry.authors.some(e => matchPattern((e), authorFilter))) continue;
    if (typeFilter && !entry.types.some(e => matchPattern((e), typeFilter))) continue;
    if (yearFilter && !matchPattern(entry.year.toString(), yearFilter)) continue;
    if (abstractFilter && !matchPattern(entry.abstract.toString(), abstractFilter)) continue;
    filtered.push(entry);
  }

  return filtered;
}

function cleanString(str: string): string {
  return str.toLowerCase();
}

function matchPattern(str: string, patterns: string[]): boolean {
  str = cleanString(str);
  return patterns.some(pattern => cleanString(str).includes(pattern));
}