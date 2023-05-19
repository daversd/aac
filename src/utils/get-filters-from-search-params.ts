import { Filters } from '../core/filters';

/**
 * Retorna os filtros aplicados a partir do `URLSearchParams` passado.
 * @param params
 * @returns
 */
export function getFiltersFromSearchParams (params: URLSearchParams) {
  const keywords = params.get(Filters.keywords) ?? '';
  const authors = params.get(Filters.authors) ?? '';
  const types = params.get(Filters.types) ?? '';
  const years = params.get(Filters.years) ?? '';
  const abstract = params.get(Filters.abstract) ?? '';
  const name = params.get(Filters.name) ?? '';

  return { keywords, authors, types, years, abstract, name };
}
