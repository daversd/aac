import { FC } from 'react';
import { FilterPanelFC } from '../components/filter-panel-fc/filter-panel-fc';
import { ResearchResultFC } from '../components/research-result-fc/research-result-fc';
import { SearchBarFC } from '../components/search-bar-fc/search-bar-fc';

export const App: FC = () => {
  return <>
    <SearchBarFC />
    <FilterPanelFC />
    <ResearchResultFC />
  </>;
};
