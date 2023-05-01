import { FC, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import mainStyle from '../../style-sheets/main-style.module.scss';
import { TypeFilterFC } from "../type-filter-fc/type-filter-fc";
import { getFiltersFromSearchParams } from "../../utils/get-filters-from-search-params";
import { Filters } from "../../core/filters";

/**
 * Componente que gerencia o painel de filtragem do acervo. Filtros são gerenciados
 * dentro do componente e aplicados na URL através de `searchParams`.
 */
export const FilterPanelFC: FC = () => {
  const [filterParams, setFilterParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // armazena os filtros
  const { name, keywords, authors, years, abstract, types } = getFiltersFromSearchParams(filterParams);
  const [nameFilter, setNameFilter] = useState<string>(name);
  const [keywordFilter, setKeywordFilter] = useState<string>(keywords);
  const [authorFilter, setAuthorFilter] = useState<string>(authors);
  const [yearFilter, setYearFilter] = useState<string>(years);
  const [abstractFilter, setAbstractFilter] = useState<string>(abstract);
  const [typeFilter, setTypeFilter] = useState<string>(types);

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
    if (keywordFilter.length > 0) params.set(Filters.keywords, keywordFilter);
    else params.delete('keywords');
    if (authorFilter.length > 0) params.set(Filters.authors, authorFilter);
    else params.delete('authors');
    if (yearFilter.length > 0) params.set(Filters.years, yearFilter);
    else params.delete('years');
    if (abstractFilter.length > 0) params.set(Filters.years, abstractFilter);
    else params.delete('abstract');
    if (nameFilter.length > 0) params.set(Filters.name, nameFilter);
    else params.delete('name');
    if (typeFilter.length > 0) params.set(Filters.types, typeFilter);
    else params.delete('types');

    setIsOpen(false);
    setFilterParams(params);
  }, [keywordFilter, authorFilter, yearFilter, abstractFilter, nameFilter, filterParams, typeFilter]);

  // atualiza os filtros toda vez que os parâmetros de busca da URL são atualizados
  useEffect(() => {
    const { name, keywords, authors, years, abstract } = getFiltersFromSearchParams(filterParams);
    setNameFilter(name);
    setAuthorFilter(authors);
    setKeywordFilter(keywords);
    setYearFilter(years);
    setAbstractFilter(abstract);
  }, [filterParams]);

  return <div>
    <div className={mainStyle.filterPanelFloatParent}>
      <div className={mainStyle.filterPanelButton} onClick={() => setIsOpen(!isOpen)}>filtros</div>
      {isOpen && <div>
        <div className={mainStyle.filterPanelFloatBlocker} onClick={() => setIsOpen(!isOpen)}></div>
        <div className={mainStyle.filterPanelFloatContainer}>

          <FilterTextInput value={nameFilter} onChange={setNameFilter} title={'título'} />
          <FilterTextInput value={keywordFilter} onChange={setKeywordFilter} title={'palavras-chave'} />
          <FilterTextInput value={authorFilter} onChange={setAuthorFilter} title={'autorxs'} />
          <FilterTextInput value={yearFilter} onChange={setYearFilter} title={'anos'} />
          <FilterTextInput value={abstractFilter} onChange={setAbstractFilter} title={'resumo'} />
          <div className={mainStyle.filterContainer}>
            <label className={mainStyle.label}>tipo</label> <br />
            <TypeFilterFC updateFilter={updateTypeFilter} />
          </div>
          <button className={mainStyle.button} onClick={applyFilter}>aplicar filtros</button>
        </div>
      </div>}
    </div>
    <div className={mainStyle.filterFixedPanelContainer}>
      <div className={mainStyle.title}>filtros</div>
      <FilterTextInput value={nameFilter} onChange={setNameFilter} title={'título'} />
      <FilterTextInput value={keywordFilter} onChange={setKeywordFilter} title={'palavras-chave'} />
      <FilterTextInput value={authorFilter} onChange={setAuthorFilter} title={'autorxs'} />
      <FilterTextInput value={yearFilter} onChange={setYearFilter} title={'anos'} />
      <FilterTextInput value={abstractFilter} onChange={setAbstractFilter} title={'resumo'} />
      <div className={mainStyle.filterContainer}>
        <label className={mainStyle.label}>tipo</label> <br />
        <TypeFilterFC updateFilter={updateTypeFilter} />
      </div>
      <button className={mainStyle.button} onClick={applyFilter}>aplicar filtros</button>
    </div>
  </div>;
};

interface FilterTextInputProps {
  value: string;
  onChange: (val: string) => void;
  title: string;
}

const FilterTextInput: FC<FilterTextInputProps> = ({ value, onChange, title }) => {
  return <div className={mainStyle.filterContainer}>
    <label className={mainStyle.label}>{title}</label> <br />
    <input className={mainStyle.filterInput} value={value} onChange={e => onChange(e.target.value)}></input>
  </div>
}
