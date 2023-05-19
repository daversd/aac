import React, { FC, useCallback, useEffect, useState } from 'react';
import mainStyle from '../../style-sheets/main-style.module.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';

/**
 * Componente que gerencia e renderiza a barra de pesquisa na página. Aplica a busca na URL
 * através do `searchParams`
 */
export const SearchBarFC: FC = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  // atualiza a busca inicial da página a partir da URL
  useEffect(() => {
    setSearch(searchParams.get('search') || '');
  }, [searchParams]);

  /** Função que aplica o termo de busca no `searchParams` da URL */
  const applySearch = useCallback(() => {
    navigate(`/?search=${search}`);
  }, [search, searchParams]);

  const searchOnEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && document.activeElement === document.getElementById('searchBar')) {
      applySearch();
    }
  };

  return <div className={mainStyle.searchBarContainer}>
    <input id='searchBar' className={mainStyle.searchBarInput} value={search} onChange={e => setSearch(e.target.value)} onKeyUp={searchOnEvent}></input>
    <div className={mainStyle.searchBarButton} onClick={applySearch}>buscar</div>
  </div>;
};
