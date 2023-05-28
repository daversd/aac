import { FC, useCallback, useEffect, useState } from 'react';
import { MaterialType } from '../../core/material';
import mainStyle from '../../style-sheets/main-style.module.scss';
import { useSearchParams } from 'react-router-dom';
import { getFiltersFromSearchParams } from '../../utils/get-filters-from-search-params';

export interface TypeFilterFCProps {
  /** função responsável pela atualização dos filtros de tipo na URL */
  updateFilter: (types: string) => void;
}

export const TypeFilterFC: FC<TypeFilterFCProps> = ({ updateFilter }) => {
  // aqui os searchParams são apenas coletados, não setados
  const [searchParams] = useSearchParams();
  // coleta os tipos disponíveis
  const [allTypes] = useState<MaterialType[]>(Object.keys(MaterialType) as MaterialType[]);

  // controla os tipos selecionados (iniciado com todos desmarcados)
  const [selectedTypes, setSelectedTypes] = useState<boolean[]>(new Array(allTypes.length).fill(false));

  /**
   * Função que atualiza os tipos que são selecionados ou não
   */
  const updateSelected = useCallback((index: number, value: boolean) => {
    const copy = selectedTypes.slice();
    copy[index] = value;
    setSelectedTypes(copy);
    const filterValue = allTypes.filter((_, i) => copy[i]).join(' ');

    updateFilter(filterValue);
  }, [selectedTypes]);

  // atualiza os tipos selecionados de acordo com os searchParams da URL
  useEffect(() => {
    setSelectedTypes(() => {
      const selected = new Array(allTypes.length).fill(false);
      const { types: typeFilter } = getFiltersFromSearchParams(searchParams);
      for (let i = 0; i < selected.length; i++) {
        if (typeFilter.includes(allTypes[i])) selected[i] = true;
      }
      return selected;
    });
  }, [searchParams]);

  return <div>
    {allTypes.map((_, i) =>
      <CheckboxFC key={i} value={selectedTypes[i]} onChange={_ => updateSelected(i, !selectedTypes[i])} label={Object.values(MaterialType)[i]}/>
    )}
  </div>;
};

interface CheckBoxFCProps {
  value: boolean,
  onChange: (val: boolean) => void,
  label: string
}

const CheckboxFC: FC<CheckBoxFCProps> = ({ value, onChange, label }) => {
  return <label className={mainStyle.typeFilterContainer}>{label}
    <input className={mainStyle.checkbox} type={'checkbox'} checked={value} onChange={e => onChange(e.target.checked)} ></input>
    <span className={mainStyle.typeFilterCheckmark}></span>
  </label>;
};
