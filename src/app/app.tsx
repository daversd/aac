import { FC, useCallback, useState } from 'react';
import { FilterPanelFC } from '../components/filter-panel-fc/filter-panel-fc';
import { ResearchResultFC } from '../components/research-result-fc/research-result-fc';
import { Entry } from '../core/entry';
import { acervo } from '../data/acervo';

export const App: FC = () => {
  const [allData] = useState<Entry[]>(acervo);
  const [filteredData, setFilteredData] = useState<Entry[]>(allData);

  const updateFilteredData = useCallback((filtered: Entry[]) => {
    setFilteredData(filtered);
  }, [])

  return <>
    <FilterPanelFC updateFilteredData={updateFilteredData} />
    <ResearchResultFC content={filteredData}/>
  </>;
};
