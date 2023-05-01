import { Filters } from "../core/filters";

export function getFiltersFromSearchParams(params: URLSearchParams) {
  const keywords = params.get(Filters.keywords) ?? '';
  const authors = params.get(Filters.authors) ?? '';
  const types = params.get(Filters.types) ?? '';
  const years = params.get(Filters.years) ?? '';
  const abstract = params.get(Filters.abstract) ?? '';
  const name = params.get(Filters.name) ?? '';

  return { keywords, authors, types, years, abstract, name }
}