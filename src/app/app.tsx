import { FC, useEffect, useState } from "react";
import { EntryFC } from "../components/entry-fc";
import { Entry } from "../core/entry";
import { acervo } from "../data/acervo";
import { FilterEntriesByData } from "../utils/filter-entries";

export const App: FC = () => {
  const [allData] = useState<Entry[]>(acervo);
  const [filteredData, setFilteredData] = useState<Entry[]>(allData);
  const [keywordFilter, setKeywordFilter] = useState<string>('');
  const [authorFilter, setAuthorFilter] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string>('');
  const [yearFilter, setYearFilter] = useState<string>('');
  const [abstractFilter, setAbstractFilter] = useState<string>('');

  // filtra os elementos quando os campos são atualizados
  useEffect(() => {
    const allPatterns = ''.concat(keywordFilter, authorFilter, typeFilter, yearFilter, abstractFilter);
    if (allPatterns === '') {
      setFilteredData(allData)
      return;
    }

    setFilteredData(FilterEntriesByData({ 
      entries: allData, 
      keywordsFilter: stringToPatterns(keywordFilter),
      authorFilter: stringToPatterns(authorFilter),
      typeFilter: stringToPatterns(typeFilter),
      yearFilter: stringToPatterns(yearFilter),
      abstractFilter: stringToPatterns(abstractFilter)
    }));
  }, [keywordFilter, authorFilter, typeFilter, yearFilter, abstractFilter]);

  return <>
    <div>
      <label >filtro por keywords</label> <br />
      <input onChange={e => setKeywordFilter(e.target.value)}></input>
    </div>
    <div>
      <label >filtro por autorxs</label> <br />
      <input onChange={e => setAuthorFilter(e.target.value)}></input>
    </div>
    <div>
      <label >filtro por ano</label> <br />
      <input onChange={e => setYearFilter(e.target.value)}></input>
    </div>
    <div>
      <label >filtro por resumo</label> <br />
      <input onChange={e => setAbstractFilter(e.target.value)}></input>
    </div>
    <div>
      <label >filtro por tipo</label> <br />
      <input onChange={e => setTypeFilter(e.target.value)}></input>
    </div>
    <br />
    <br />
    <br />
    {filteredData.map((e, i) =>
      <div key={i}>
        <EntryFC entry={e} />
        <br />
      </div>
    )}
  </>
}

function stringToPatterns(str: string): string[] | undefined {
  str.replace(',', '');
  const pattern = str.split(' ').filter(p => p !== '');
  return pattern.length === 0 ? undefined : pattern;
}