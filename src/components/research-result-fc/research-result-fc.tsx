import { FC, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { acervo } from "../../data/acervo";
import mainStyle from '../../style-sheets/main-style.module.scss';
import { FilterEntriesByData, FilterEntriesGeneric } from "../../utils/filter-entries";
import { stringToPatterns } from "../../utils/string-to-patterns";
import { EntryFC } from "../entry-fc/entry-fc";
import { getFiltersFromSearchParams } from "../../utils/get-filters-from-search-params";
import { Entry } from "../../core/entry";

/**
 * Componente que renderiza os resultados da pesquisa em uma página, puxando os filtros
 * de pesquisa da url (utilizando `searchParams`), partindo do acervo completo.
 */
export const ResearchResultFC: FC = () => {
  const [searchParams] = useSearchParams();

  const [content, setContent] = useState<Entry[]>([]);

  useEffect(() => {
    setContent(() => {
      let c = acervo;

    // aplica o filtro genérico de busca, caso tenha sido definido
    const search = searchParams.get('search') ?? '';
    if (search.length > 0) {
      const pattern = stringToPatterns(search);
      if (pattern) c = FilterEntriesGeneric(acervo, pattern);
    }

    // coleta os filtros individuais do search params
    const { keywords, authors, types, years, abstract, name } = getFiltersFromSearchParams(searchParams);

    // aplica os filtros selecionados 
    c = FilterEntriesByData({
      entries: c,
      nameFilter: stringToPatterns(name),
      keywordsFilter: stringToPatterns(keywords),
      authorFilter: stringToPatterns(authors),
      typeFilter: stringToPatterns(types),
      yearFilter: stringToPatterns(years),
      abstractFilter: stringToPatterns(abstract)
    });

    return c;
    })
  }, [searchParams]);


  const sortNameAscending = () => {
    const sortedContent = content.slice();
    sortedContent.sort((a, b) => a.name.localeCompare(b.name));
    setContent(sortedContent);
  };
  
  const sortNameDescending = () => {
    const sortedContent = content.slice();
    sortedContent.sort((a, b) => b.name.localeCompare(a.name));
    setContent(sortedContent);
  };
  
  const sortDateAscending = () => {
    const sortedContent = content.slice();
    sortedContent.sort((a, b) => a.year - b.year);
    setContent(sortedContent);
  };
  
  const sortDateDescending = () => {
    const sortedContent = content.slice();
    sortedContent.sort((a, b) => b.year - a.year);
    setContent(sortedContent);
  };

  return <div className={mainStyle.resultContainer}>
    <div className={mainStyle.title}>{`resultados [${content.length} itens]`}</div>
    <SortBar nameAscending={sortNameAscending} nameDescending={sortNameDescending} dateAscending={sortDateAscending} dateDescending={sortDateDescending}/>
    {content.map((e, i) =>
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
}

const SortBar: FC<SortBarProps> = ({ nameAscending, nameDescending, dateAscending, dateDescending }) => {
  const [isNameAscending, setIsNameAscending] = useState<boolean>(false);
  const [isNameDescending, setIsNameDescending] = useState<boolean>(false);
  const [isDateAscending, setIsDateAscending] = useState<boolean>(false);
  const [isDateDescending, setIsDateDescending] = useState<boolean>(false);

  const setSortFilter = useCallback((sortOption: 0 | 1 | 2 | 3) => {
    setIsNameAscending(sortOption === 0);
    if (sortOption === 0) nameAscending();
    setIsNameDescending(sortOption === 1);
    if (sortOption === 1) nameDescending();
    setIsDateAscending(sortOption === 2);
    if (sortOption === 2) dateAscending();
    setIsDateDescending(sortOption === 3);
    if (sortOption === 3) dateDescending();
  },[isNameAscending, isNameDescending, isDateAscending, isDateDescending]);


  return <div className={mainStyle.sortBarContainer}>
    <button className={isNameAscending ? mainStyle.sortToggleButtonActive : mainStyle.sortToggleButton} onClick={() => setSortFilter(0)}>A - Z</button>
    <button className={isNameDescending ? mainStyle.sortToggleButtonActive : mainStyle.sortToggleButton} onClick={() => setSortFilter(1)}>Z - A</button>
    <button className={isDateAscending ? mainStyle.sortToggleButtonActive : mainStyle.sortToggleButton} onClick={() => setSortFilter(2)}>1 - 9</button>
    <button className={isDateDescending ? mainStyle.sortToggleButtonActive : mainStyle.sortToggleButton} onClick={() => setSortFilter(3)}>9 - 1</button>
    <button className={mainStyle.sortDownloadButton}>csv</button>
  </div>
}
