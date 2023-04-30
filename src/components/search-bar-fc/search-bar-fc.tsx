import { FC, useCallback, useEffect, useState } from "react";
import mainStyle from '../../style-sheets/main-style.module.scss';
import { useSearchParams } from "react-router-dom";

/**
 * Componente que gerencia e renderiza a barra de pesquisa na página. Aplica a busca na URL
 * através do `searchParams`
 */
export const SearchBarFC: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>('');

  // atualiza a busca inicial da página a partir da URL
  useEffect(() => {
    setSearch(searchParams.get('search') || '');
  }, [searchParams])

  /** Função que aplica o termo de busca no `searchParams` da URL */
  const applySearch = useCallback(() => {
    const param = { search: search }
    setSearchParams(param);
  }, [search, searchParams]);

  return <div className={mainStyle.searchBarContainer}>
    <input className={mainStyle.searchBarInput} value={search} onChange={e => setSearch(e.target.value)}></input>
    <div className={mainStyle.searchBarButton} onClick={applySearch}>buscar</div>
  </div>;
}