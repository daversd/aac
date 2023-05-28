import { Material } from '../core/material';
import { cleanString } from './clean-string';
import { fuzzyStringMatch } from './compare-strings';

/** Parâmetros de filtro */
export interface FilterMaterialProps {
  /** Items que serão filtrados */
  weightedMaterials: WeightedMaterial[],
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
export function FilterWeightedEntriesByData ({ weightedMaterials, nameFilter, keywordsFilter, authorFilter, yearFilter, typeFilter, abstractFilter }: FilterMaterialProps): WeightedMaterial[] {
  const filtered: WeightedMaterial[] = [];
  for (const weightedMaterial of weightedMaterials) {
    if (nameFilter && !strictMatch(weightedMaterial.material.name, nameFilter)) continue;
    if (keywordsFilter && !weightedMaterial.material.keywords.some(e => strictMatch((e), keywordsFilter))) continue;
    if (authorFilter && !weightedMaterial.material.authors.some(e => strictMatch((e), authorFilter))) continue;
    if (typeFilter && !weightedMaterial.material.types.some(e => strictMatch((e), typeFilter))) continue;
    if (yearFilter && !strictMatch(weightedMaterial.material.year.toString(), yearFilter)) continue;
    if (abstractFilter && !strictMatch(weightedMaterial.material.abstract, abstractFilter)) continue;
    filtered.push(weightedMaterial);
  }

  return filtered;
}

/**
 * Interface que representa uma entrada e o seu peso resultante da pesquisa atual
 */
export interface WeightedMaterial {
  material: Material,
  weight: number
}

/**
 * Aplica um filtro em um grupo de `Material`, buscando os padrões no texto das propriedades dos itens.
 * O resultado é um conjunto de itens compatíveis com os padrões buscados, associados a pesos que
 * representam a sua relevância em relação aos padrões de pesquisa submetidos.
 * @param materials itens a serem filtrados
 * @param pattern padrões de filtro a serem utilizados na pesquisa
 * @returns os itens compatíveis com a pesquisa, com seu peso relacionado à busca
 */
export function WeightedGenericMaterialFilter (materials: Material[], pattern: string[]): WeightedMaterial[] {
  const result: WeightedMaterial[] = [];

  for (const material of materials) {
    let weight = 0;
    weight += fuzzyPatternMatchRatio(material.keywords.join(' '), pattern) * 1;
    weight += fuzzyPatternMatchRatio(material.authors.join(' '), pattern) * 1;
    weight += fuzzyPatternMatchRatio(material.types.join(' '), pattern) * 0.5;
    weight += strictPatternMatchRatio(material.year.toString(), pattern) * 1;
    weight += strictPatternMatchRatio(material.abstract, pattern) * 0.1;
    weight += fuzzyPatternMatchRatio(material.name, pattern) * 1;

    if (weight > 0) result.push({ material, weight });
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
function strictMatch (str: string, patterns: string[]): boolean {
  return patterns.some(p => cleanString(str).includes(cleanString(p)));
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
