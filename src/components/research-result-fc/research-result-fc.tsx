import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { acervo } from "../../data/acervo";
import mainStyle from '../../style-sheets/main-style.module.scss';
import { FilterEntriesByData, FilterEntriesGeneric } from "../../utils/filter-entries";
import { stringToPatterns } from "../../utils/string-to-patterns";
import { EntryFC } from "../entry-fc/entry-fc";
import { getFiltersFromSearchParams } from "../../utils/get-filters-from-search-params";

/**
 * Componente que renderiza os resultados da pesquisa em uma página, puxando os filtros
 * de pesquisa da url (utilizando `searchParams`), partindo do acervo completo.
 */
export const ResearchResultFC: FC = () => {
  const [searchParams] = useSearchParams();

  let content = acervo;

  // aplica o filtro genérico de busca, caso tenha sido definido
  const search = searchParams.get('search') ?? '';
  if (search.length > 0) {
    const pattern = stringToPatterns(search);
    if (pattern) content = FilterEntriesGeneric(acervo, pattern);
  }

  // coleta os filtros individuais do search params
  const { keywords, authors, types, years, abstract, name } = getFiltersFromSearchParams(searchParams);

  // aplica os filtros selecionados 
  content = FilterEntriesByData({
    entries: content,
    nameFilter: stringToPatterns(name),
    keywordsFilter: stringToPatterns(keywords),
    authorFilter: stringToPatterns(authors),
    typeFilter: stringToPatterns(types),
    yearFilter: stringToPatterns(years),
    abstractFilter: stringToPatterns(abstract)
  });

  return <div className={mainStyle.resultContainer}>
    <div className={mainStyle.title}>{`resultados [${content.length} itens]`}</div>
    <SortBar />
    {content.map((e, i) =>
      <div key={i}>
        <EntryFC entry={e} />
        <br />
      </div>
    )}
  </div>
}

const SortBar: FC = () => {
  return <div className={mainStyle.sortBarContainer}>
    <button className={mainStyle.sortToggleButton}>A - Z</button>
    <button className={mainStyle.sortToggleButton}>Z - A</button>
    <button className={mainStyle.sortToggleButton}>1 - 9</button>
    <button className={mainStyle.sortToggleButton}>9 - 1</button>
    <button className={mainStyle.sortDownloadButton}>csv</button>
  </div>
}
