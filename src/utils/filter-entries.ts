import { Entry } from '../core/entry';
import { cleanString } from './clean-string';

export interface FilterEntryProps {
  entries: Entry[],
  nameFilter?: string[],
  keywordsFilter?: string[],
  authorFilter?: string[],
  yearFilter?: string[],
  typeFilter?: string[],
  abstractFilter?: string[],
}
export function FilterEntriesByData ({ entries, nameFilter, keywordsFilter, authorFilter, yearFilter, typeFilter, abstractFilter }: FilterEntryProps): Entry[] {
  const filtered: Entry[] = [];
  for (const entry of entries) {
    if (nameFilter && !matchPattern(entry.name, nameFilter)) continue;
    if (keywordsFilter && !entry.keywords.some(e => matchPattern((e), keywordsFilter))) continue;
    if (authorFilter && !entry.authors.some(e => matchPattern((e), authorFilter))) continue;
    if (typeFilter && !entry.types.some(e => matchPattern((e), typeFilter))) continue;
    if (yearFilter && !matchPattern(entry.year.toString(), yearFilter)) continue;
    if (abstractFilter && !matchPattern(entry.abstract, abstractFilter)) continue;
    filtered.push(entry);
  }

  return filtered;
}

export function FilterEntriesGeneric (entries: Entry[], pattern: string[]): Entry[] {
  const filtered: Entry[] = [];
  for (const entry of entries) {
    if (entry.keywords.some(e => matchPattern((e), pattern))) {
      filtered.push(entry);
      continue;
    }
    if (entry.authors.some(e => matchPattern((e), pattern))) {
      filtered.push(entry);
      continue;
    }
    if (entry.types.some(e => matchPattern((e), pattern))) {
      filtered.push(entry);
      continue;
    }
    if (matchPattern(entry.year.toString(), pattern)) {
      filtered.push(entry);
      continue;
    }
    if (matchPattern(entry.abstract, pattern)) {
      filtered.push(entry);
      continue;
    }
    if (matchPattern(entry.name, pattern)) {
      filtered.push(entry);
      continue;
    }
  }

  return filtered;
}

function matchPattern (str: string, patterns: string[]): boolean {
  return patterns.some(pattern => cleanString(str).includes(cleanString(pattern)));
}
