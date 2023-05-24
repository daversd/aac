import { Entry } from '../core/entry';
import { cleanString } from './clean-string';
import { fuzzyStringMatch } from './compare-strings';

/** Parâmetros de filtro */
export interface FilterEntryProps {
  /** Items que serão filtrados */
  weightedEntries: WeightedEntry[],
  /** Filtros a serem aplicados ao campo de título dos items */
  nameFilter?: string[],
  /** Filtros a serem aplicados ao campo de palavras-chave dos items */
  keywordsFilter?: string[],
  /** Filtros a serem aplicados ao campo de autores dos items */
  authorFilter?: string[],
  /** Filtros a serem aplicados ao campo de ano dos items */
  yearFilter?: string[],
  /** Filtros a serem aplicados ao campo de tipo dos items */
  typeFilter?: string[],
  /** Filtros a serem aplicados ao campo de resumo dos items */
  abstractFilter?: string[],
}

/** Filtra as um grupo de entras através da aplicação de diversos filtros, aplicados em conjunto */
export function FilterWeightedEntriesByData ({ weightedEntries, nameFilter, keywordsFilter, authorFilter, yearFilter, typeFilter, abstractFilter }: FilterEntryProps): WeightedEntry[] {
  const filtered: WeightedEntry[] = [];
  for (const wEntry of weightedEntries) {
    if (nameFilter && !matchPattern(wEntry.entry.name, nameFilter)) continue;
    if (keywordsFilter && !wEntry.entry.keywords.some(e => matchPattern((e), keywordsFilter))) continue;
    if (authorFilter && !wEntry.entry.authors.some(e => matchPattern((e), authorFilter))) continue;
    if (typeFilter && !wEntry.entry.types.some(e => matchPattern((e), typeFilter))) continue;
    if (yearFilter && !strictMatch(wEntry.entry.year.toString(), yearFilter)) continue;
    if (abstractFilter && !matchPattern(wEntry.entry.abstract, abstractFilter)) continue;
    filtered.push(wEntry);
  }

  return filtered;
}

/**
 * Interface que representa uma entrada e o seu peso resultante da pesquisa atual
 */
export interface WeightedEntry {
  entry: Entry,
  weight: number
}

/**
 * Aplica um filtro em um grupo de `Entry`, buscando os padrões no texto das propriedades dos itens.
 * O resultado é um conjunto de itens compatíveis com os padrões buscados, associados a pesos que
 * representam a sua relevância em relação aos padrões de pesquisa submetidos.
 * @param entries itens a serem filtrados
 * @param pattern padrões de filtro a serem utilizados na pesquisa
 * @returns os itens compatíveis com a pesquisa, com seu peso relacionado à busca
 */
export function WeightedGenericEntryFilter (entries: Entry[], pattern: string[]): WeightedEntry[] {
  const result: WeightedEntry[] = [];

  for (const entry of entries) {
    let weight = 0;
    weight += fuzzyPatternMatchRatio(entry.keywords.join(' '), pattern) * 1;
    weight += fuzzyPatternMatchRatio(entry.authors.join(' '), pattern) * 1;
    weight += fuzzyPatternMatchRatio(entry.types.join(' '), pattern) * 0.5;
    weight += strictPatternMatchRatio(entry.year.toString(), pattern) * 1;
    weight += fuzzyPatternMatchRatio(entry.abstract, pattern) * 0.5;
    weight += fuzzyPatternMatchRatio(entry.name, pattern) * 1;

    if (weight > 0) result.push({ entry, weight });
  }

  return result;
}

/**
 * Verifica se uma string é compatível com um array de padrões de pesquisa
 * @param str a string a ser verificada
 * @param patterns os diversos padrões a serem aplicados
 * @returns a compatibilidade em relação ao padrão
 */
function matchPattern (str: string, patterns: string[]): boolean {
  return patterns.some(pattern => fuzzyStringMatch(cleanString(str), cleanString(pattern)));
}

/**
 * Retorna o peso de compatibilidade entre uma string e um array de padrões de pesquisa, onde
 * 0 representa nenhuma compatibilidade e 1 representa compatibilidade completa
 * @param str
 * @param patterns
 * @returns a compatibilidade, entre `[0-1]`
 */
function fuzzyPatternMatchRatio (str: string, patterns: string[]): number {
  let matches = 0;
  for (const pattern of patterns) {
    if (matchPattern(str, [pattern])) matches++;
  }

  return matches / patterns.length;
}

/**
 * Compara uma `string` com um array de padrões de pesquisa de maneira estrita
 * @param str 
 * @param patterns 
 * @returns 
 */
function strictMatch(str: string, patterns: string[]): boolean {
  return patterns.some(p => str.includes(p));
}

/**
 * Retorna o peso de compatibilidade entre uma string e um array de padrões de pesquisa de forma estrita, onde
 * 0 representa nenhuma compatibilidade e 1 representa compatibilidade completa
 * @param str 
 * @param patterns 
 * @returns a compatibilidade, entre `[0-1]`
 */
function strictPatternMatchRatio (str: string, patterns: string[]): number {
  let matches = 0;
  for (const pattern of patterns) {
    if (strictMatch(str, [pattern])) matches++;
  }

  return matches / patterns.length;
}