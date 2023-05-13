import { Entry } from '../core/entry';
import { cleanString } from './clean-string';
import { fuzzyStringMatch } from './compare-strings';

export interface FilterEntryProps {
  weightedEntries: WeightedEntry[],
  nameFilter?: string[],
  keywordsFilter?: string[],
  authorFilter?: string[],
  yearFilter?: string[],
  typeFilter?: string[],
  abstractFilter?: string[],
}
export function FilterWeightedEntriesByData({ weightedEntries, nameFilter, keywordsFilter, authorFilter, yearFilter, typeFilter, abstractFilter }: FilterEntryProps): WeightedEntry[] {
  const filtered: WeightedEntry[] = [];
  for (const wEntry of weightedEntries) {
    if (nameFilter && !matchPattern(wEntry.entry.name, nameFilter)) continue;
    if (keywordsFilter && !wEntry.entry.keywords.some(e => matchPattern((e), keywordsFilter))) continue;
    if (authorFilter && !wEntry.entry.authors.some(e => matchPattern((e), authorFilter))) continue;
    if (typeFilter && !wEntry.entry.types.some(e => matchPattern((e), typeFilter))) continue;
    if (yearFilter && !matchPattern(wEntry.entry.year.toString(), yearFilter)) continue;
    if (abstractFilter && !matchPattern(wEntry.entry.abstract, abstractFilter)) continue;
    filtered.push(wEntry);
  }

  return filtered;
}

export function FilterEntriesGeneric(entries: Entry[], pattern: string[]): Entry[] {
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

export interface WeightedEntry {
  entry: Entry,
  weight: number
}

export function WeightedGenericEntryFilter(entries: Entry[], pattern: string[]): WeightedEntry[] {
  const result: WeightedEntry[] = [];

  for (const entry of entries) {
    let weight = 0;
    weight += patternMatchRatio(entry.keywords.join(' '), pattern) * 1;
    weight += patternMatchRatio(entry.authors.join(' '), pattern) * 1;
    weight += patternMatchRatio(entry.types.join(' '), pattern) * .5;
    weight += patternMatchRatio(entry.year.toString(), pattern) * 1;
    weight += patternMatchRatio(entry.abstract, pattern) * .5;
    weight += patternMatchRatio(entry.name, pattern) * 1;

    if (weight > 0) result.push({ entry, weight });
  }

  return result;
}

function matchPattern(str: string, patterns: string[]): boolean {
  return patterns.some(pattern => fuzzyStringMatch(cleanString(str), cleanString(pattern)));
}

function patternMatchRatio(str: string, patterns: string[]): number {
  let matches = 0;
  for (const pattern of patterns) {
    if (matchPattern(str, [pattern])) matches++;
  }

  return matches / patterns.length;
}
