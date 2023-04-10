import { FC, useCallback, useEffect, useState } from 'react';
import { EntryFC } from '../components/entry-fc';
import { Entry, EntryType } from '../core/entry';
import { acervo } from '../data/acervo';
import { FilterEntriesByData, FilterEntriesGeneric } from '../utils/filter-entries';
import { TypeFilterFC } from '../components/type-filter-fc';

export const App: FC = () => {
  const [allData] = useState<Entry[]>(acervo);
  const [filteredData, setFilteredData] = useState<Entry[]>(allData);
  const [nameFilter, setNameFilter] = useState<string>('');
  const [keywordFilter, setKeywordFilter] = useState<string>('');
  const [authorFilter, setAuthorFilter] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string>('');
  const [yearFilter, setYearFilter] = useState<string>('');
  const [abstractFilter, setAbstractFilter] = useState<string>('');
  const [genericFilter, setGenericFilter] = useState<string>('');

  const updateTypeFilter = useCallback((value: EntryType[]) => {
    const string = value.join(' ');
    setTypeFilter(string);
  }, [typeFilter]);

  // filtra os elementos quando os campos individuais são atualizados
  useEffect(() => {
    const allPatterns = ''.concat(keywordFilter, authorFilter, typeFilter, yearFilter, abstractFilter, nameFilter);
    if (allPatterns === '') {
      setFilteredData(allData);
      return;
    }

    setFilteredData(FilterEntriesByData({
      entries: allData,
      nameFilter: stringToPatterns(nameFilter),
      keywordsFilter: stringToPatterns(keywordFilter),
      authorFilter: stringToPatterns(authorFilter),
      typeFilter: stringToPatterns(typeFilter),
      yearFilter: stringToPatterns(yearFilter),
      abstractFilter: stringToPatterns(abstractFilter)
    }));
  }, [keywordFilter, authorFilter, typeFilter, yearFilter, abstractFilter, nameFilter]);

  useEffect(() => {
    const pattern = stringToPatterns(genericFilter);
    if (!pattern) {
      setFilteredData(allData);
      return;
    }

    setFilteredData(FilterEntriesGeneric(allData, pattern));
  }, [genericFilter]);

  return <>
    <div>
      <label >filtro por nome</label> <br />
      <input onChange={e => setNameFilter(e.target.value)}></input>
    </div>
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
      <TypeFilterFC updateFilter={updateTypeFilter} />
    </div>
    <br />
    <div>
      <label >filtro genérico</label> <br />
      <input onChange={e => setGenericFilter(e.target.value)}></input>
    </div>
    <br />
    <br />
    {filteredData.map((e, i) =>
      <div key={i}>
        <EntryFC entry={e} />
        <br />
      </div>
    )}
  </>;
};

function stringToPatterns (str: string): string[] | undefined {
  str.replace(',', '');
  const pattern = str.split(' ').filter(p => p !== '');
  return pattern.length === 0 ? undefined : pattern;
}
