import { FC, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import mainStyle from '../../style-sheets/main-style.module.scss';
import { TypeFilterFC } from "../type-filter-fc/type-filter-fc";

/**
 * Componente que gerencia o painel de filtragem do acervo. Filtros são gerenciados
 * dentro do componente e aplicados na URL através de `searchParams`.
 */
export const FilterPanelFC: FC = () => {
  const [filterParams, setFilterParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          <button onClick={applyFilter}>filtrar</button>
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
      <button onClick={applyFilter}>filtrar</button>
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
