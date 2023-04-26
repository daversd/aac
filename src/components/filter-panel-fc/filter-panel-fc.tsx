import { FC, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import mainStyle from '../../style-sheets/main-style.module.scss';
import { TypeFilterFC } from "../type-filter-fc/type-filter-fc";
import filterPanelStyle from './filter-panel-fc.module.scss';

/**
 * Componente que gerencia o painel de filtragem do acervo. Filtros são gerenciados
 * dentro do componente e aplicados na URL atraves de `searchParams`.
 */
export const FilterPanelFC: FC = () => { 
  const [filterParams, setFilterParams] = useSearchParams();

  // armazena os filtros
  const [nameFilter, setNameFilter] = useState<string>(filterParams.get('name') ?? '');
  const [keywordFilter, setKeywordFilter] = useState<string>(filterParams.get('keywords') ?? '');
  const [authorFilter, setAuthorFilter] = useState<string>(filterParams.get('authors') ?? '');
  const [yearFilter, setYearFilter] = useState<string>(filterParams.get('years') ?? '');
  const [abstractFilter, setAbstractFilter] = useState<string>(filterParams.get('abstract') ?? '');
  const [typeFilter, setTypeFilter] = useState<string>(filterParams.get('types') || '');

  /** Função utilizada para controlar o filtro de tipos remotamente */
  const updateTypeFilter = useCallback((value: string) => {
    setTypeFilter(value);
  }, []);

  /** 
   * Função utilizada para atualizar os valores dos filtros na URL da página
   * através de seus `searchParams`
   */
  const applyFilter = useCallback(() => {
    const params = filterParams;
    if (keywordFilter.length > 0) params.set('keywords', keywordFilter);
    else params.delete('keywords');
    if (authorFilter.length > 0) params.set('authors', authorFilter);
    else params.delete('authors');
    if (yearFilter.length > 0) params.set('years', yearFilter);
    else params.delete('years');
    if (abstractFilter.length > 0) params.set('abstract', abstractFilter);
    else params.delete('abstract');
    if (nameFilter.length > 0) params.set('name', nameFilter);
    else params.delete('name');
    if (typeFilter.length > 0) params.set('types', typeFilter);
    else params.delete('types');

    setFilterParams(params);
  }, [keywordFilter, authorFilter, yearFilter, abstractFilter, nameFilter, filterParams, typeFilter]);

  // atualiza os filtros toda vez que os parâmetros de busca da URL são atualizados
  useEffect(() => {
    setNameFilter(filterParams.get('name') ?? '');
    setKeywordFilter(filterParams.get('keywords') ?? '');
    setYearFilter(filterParams.get('years') ?? '');
    setAbstractFilter(filterParams.get('abstract') ?? '');
  }, [filterParams]);

  return <div className={filterPanelStyle.container}>
    <div className={mainStyle.title}>Filtros</div>
    <div className={mainStyle.filterContainer}>
      <label className={mainStyle.label}>filtro por nome</label> <br />
      <input className={mainStyle.filterInput} value={nameFilter} onChange={e => setNameFilter(e.target.value)}></input>
    </div>
    <div className={mainStyle.filterContainer}>
      <label className={mainStyle.label}>filtro por keywords</label> <br />
      <input className={mainStyle.filterInput} value={keywordFilter} onChange={e => setKeywordFilter(e.target.value)}></input>
    </div>
    <div className={mainStyle.filterContainer}>
      <label className={mainStyle.label}>filtro por autorxs</label> <br />
      <input className={mainStyle.filterInput} value={authorFilter} onChange={e => setAuthorFilter(e.target.value)}></input>
    </div>
    <div className={mainStyle.filterContainer}>
      <label className={mainStyle.label}>filtro por ano</label> <br />
      <input className={mainStyle.filterInput} value={yearFilter} onChange={e => setYearFilter(e.target.value)}></input>
    </div>
    <div className={mainStyle.filterContainer}>
      <label className={mainStyle.label}>filtro por resumo</label> <br />
      <input className={mainStyle.filterInput} value={abstractFilter} onChange={e => setAbstractFilter(e.target.value)}></input>
    </div>
    <div className={mainStyle.filterContainer}>
      <label className={mainStyle.label}>filtro por tipo</label> <br />
      <TypeFilterFC updateFilter={updateTypeFilter}/>
    </div>
    <button onClick={applyFilter}>filtrar</button>
  </div>;
};
