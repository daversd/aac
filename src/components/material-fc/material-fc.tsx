import { FC, useCallback, useEffect, useState } from 'react';
import { Material } from '../../core/material';
import style from '../../style-sheets/main-style.module.scss';
import { useSearchParams } from 'react-router-dom';
import { Filters } from '../../core/filters';

export interface MaterialFCProps {
  /** O item a ser exibido por este componente */
  material: Material;
}

/** Component que renderiza as informações de uma item do acervo no formato de um painel */
export const MaterialFC: FC<MaterialFCProps> = ({ material }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [_, setSearchParams] = useSearchParams();

  /** Atualiza os `searchParams` da URL para filtrar resultados que tenham o mesmo ano */
  const setYearFilter = useCallback((value: string) => {
    setSearchParams({ [Filters.years]: value });
  }, []);

  /** Atualiza os `searchParams` da URL para filtrar resultados que tenham o mesmo autor */
  const setAuthorFilter = useCallback((value: string) => {
    setSearchParams({ [Filters.authors]: value });
  }, []);

  /** Atualiza os `searchParams` da URL para filtrar resultados que tenham a mesma palavra-chave */
  const setKeywordsFilter = useCallback((value: string) => {
    setSearchParams({ [Filters.keywords]: value });
  }, []);

  /** Atualiza os `searchParams` da URL para filtrar resultados que tenham o mesmo tipo */
  const setTypesFilter = useCallback((value: string) => {
    setSearchParams({ [Filters.types]: value });
  }, []);

  // fecha o painel toda vez que o item é atualizado
  useEffect(() => {
    setIsOpen(false);
  }, [material]);

  return <div className={style.materialContainer}>
    <label className={style.materialTitle}>{material.name}</label>
    <div className={style.materialExpandButton} onClick={() => setIsOpen(!isOpen)}>{`${isOpen ? '-' : '+'}`}</div>
    <MaterialProperty value={[material.year.toString()]} label={'Ano'} onClick={setYearFilter}/>
    <div className={style.regularContainer}>
      <p className={isOpen ? style.p : style.pCollapsed}>{material.abstract}</p>
    </div>
    <MaterialProperty value={material.authors} label={'Autorxs'} onClick={setAuthorFilter}/>
    {isOpen && <MaterialProperty value={material.keywords} label={'Palavras-chave'} onClick={setKeywordsFilter}/>}
    {isOpen && <MaterialProperty value={material.types} label={'Tipos'} onClick={setTypesFilter}/>}
    {isOpen && <div className={style.regularContainer}>
      <label className={style.materialPropLabel}>Links: </label>
      {material.links.map((l, i) =>
        <div key={i}>
          <a className={style.regularLink} href={l}> {l} </a>
          <br />
        </div>
      )}
    </div>}
  </div>;
};

interface MaterialPropertyProps {
  /** valores da propriedade */
  value: string[];
  /** nome da propriedade */
  label: string;
  /** ação a ser realizada quando clicado */
  onClick?: (val: string) => void;
}

/** Componente que renderiza as propriedades de um material como tags, realizando ações quando clicado */
const MaterialProperty: FC<MaterialPropertyProps> = ({ value, label, onClick }) => {
  return <div className={style.regularContainer}>
    <label className={style.materialPropLabel}>{label}:</label>
    {value.map((v, i) =>
      <MaterialTag key={i} value={v} onClick={onClick}/>
    )}

  </div>;
};

interface MaterialTagProps {
  /** valor da tag */
  value: string;
  /** ação a ser realizada quando clicada */
  onClick?: (val: string) => void;
}

/** Componente que renderiza uma propriedade como uma tag e realiza uma ação quando clicada */
const MaterialTag: FC<MaterialTagProps> = ({ value, onClick }) => {
  return <div className={style.materialTag} onClick={onClick && (() => onClick(value))}>{value}</div>;
};
