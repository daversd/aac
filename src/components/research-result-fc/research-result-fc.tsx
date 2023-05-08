import { FC, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { acervo } from "../../data/acervo";
import mainStyle from '../../style-sheets/main-style.module.scss';
import { FilterWeightedEntriesByData, WeightedEntry, WeightedGenericEntryFilter } from "../../utils/filter-entries";
import { getFiltersFromSearchParams } from "../../utils/get-filters-from-search-params";
import { stringToPatterns } from "../../utils/string-to-patterns";
import { EntryFC } from "../entry-fc/entry-fc";

/**
 * Componente que renderiza os resultados da pesquisa em uma página, puxando os filtros
 * de pesquisa da url (utilizando `searchParams`), partindo do acervo completo.
 */
export const ResearchResultFC: FC = () => {
  const [searchParams] = useSearchParams();

  const [weightedResult, setWeightedResult] = useState<WeightedEntry[]>([]);

  const getContent = () => {
    let weightedContent: WeightedEntry[] = acervo.map(e => ({ entry: e, weight: 1 }));

    // aplica o filtro genérico de busca, caso tenha sido definido
    const search = searchParams.get('search') ?? '';
    if (search.length > 0) {
      const pattern = stringToPatterns(search);
      if (pattern) weightedContent = WeightedGenericEntryFilter(acervo, pattern);
    }

    // coleta os filtros individuais do search params
    const { keywords, authors, types, years, abstract, name } = getFiltersFromSearchParams(searchParams);

    // aplica os filtros selecionados 
    weightedContent = FilterWeightedEntriesByData({
      weightedEntries: weightedContent,
      nameFilter: stringToPatterns(name),
      keywordsFilter: stringToPatterns(keywords),
      authorFilter: stringToPatterns(authors),
      typeFilter: stringToPatterns(types),
      yearFilter: stringToPatterns(years),
      abstractFilter: stringToPatterns(abstract)
    });
    
    return weightedContent;
  }

  const sortNameAscending = useCallback(() => {
    const sortedContent = weightedResult.slice();
    sortedContent.sort((a, b) => a.entry.name.localeCompare(b.entry.name));
    setWeightedResult(sortedContent);
  }, [weightedResult]);

  const sortNameDescending = () => {
    const sortedContent = weightedResult.slice();
    sortedContent.sort((a, b) => b.entry.name.localeCompare(a.entry.name));
    setWeightedResult(sortedContent);
  };

  const sortDateAscending = () => {
    const sortedContent = weightedResult.slice();
    sortedContent.sort((a, b) => a.entry.year - b.entry.year);
    setWeightedResult(sortedContent);
  };

  const sortDateDescending = () => {
    const sortedContent = weightedResult.slice();
    sortedContent.sort((a, b) => b.entry.year - a.entry.year);
    setWeightedResult(sortedContent);
  };

  const sortRelevance = () => {
    setWeightedResult(weightedResult.slice().sort((a, b) => b.weight - a.weight));
  };

  useEffect(() => {
    setWeightedResult(getContent());
  }, [searchParams]);

  return <div className={mainStyle.resultContainer}>
    <div className={mainStyle.title}>{`resultados [${weightedResult.length} ${weightedResult.length === 1 ? 'item' : 'itens'}]`}</div>
    <SortBar nameAscending={sortNameAscending} nameDescending={sortNameDescending} dateAscending={sortDateAscending} dateDescending={sortDateDescending} relevance={sortRelevance} />
    {weightedResult.map(e => e.entry).map((e, i) =>
      <div key={i}>
        <EntryFC entry={e} />
        <br />
      </div>
    )}
  </div>
}

interface SortBarProps {
  nameAscending: () => void;
  nameDescending: () => void;
  dateAscending: () => void;
  dateDescending: () => void;
  relevance: () => void;
}

enum SortType {
  NameAscending = 0,
  NameDescending = 1,
  DateAscending = 2,
  DateDescending = 3,
  Relevance = 4
}

const SortBar: FC<SortBarProps> = ({ nameAscending, nameDescending, dateAscending, dateDescending, relevance }) => {
  const [sortType, setSortType] = useState<SortType>(SortType.Relevance);
  const [searchParams] = useSearchParams();

  const setSortFilter = (sortOption: SortType) => {
    if (sortOption === SortType.NameAscending) nameAscending();
    if (sortOption === SortType.NameDescending) nameDescending();
    if (sortOption === SortType.DateAscending) dateAscending();
    if (sortOption === SortType.DateDescending) dateDescending();
    if (sortOption === SortType.Relevance) relevance();

    setSortType(sortOption);
  };

  useEffect(() => {setSortFilter(SortType.Relevance)}, [searchParams])


  return <div className={mainStyle.sortBarContainer}>
    <button className={sortType === SortType.Relevance ? mainStyle.sortToggleButtonActive : mainStyle.sortToggleButton} onClick={() => setSortFilter(SortType.Relevance)}>relevância</button>
    <button className={sortType === SortType.NameAscending ? mainStyle.sortToggleButtonActive : mainStyle.sortToggleButton} onClick={() => setSortFilter(SortType.NameAscending)}>A - Z</button>
    <button className={sortType === SortType.NameDescending ? mainStyle.sortToggleButtonActive : mainStyle.sortToggleButton} onClick={() => setSortFilter(SortType.NameDescending)}>Z - A</button>
    <button className={sortType === SortType.DateAscending ? mainStyle.sortToggleButtonActive : mainStyle.sortToggleButton} onClick={() => setSortFilter(SortType.DateAscending)}>1 - 9</button>
    <button className={sortType === SortType.DateDescending ? mainStyle.sortToggleButtonActive : mainStyle.sortToggleButton} onClick={() => setSortFilter(SortType.DateDescending)}>9 - 1</button>
    <button className={mainStyle.sortDownloadButton}>csv</button>
  </div>
}
