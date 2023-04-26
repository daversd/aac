import { FC, useCallback, useEffect, useState } from 'react';
import { EntryType } from '../../core/entry';
import mainStyle from '../../style-sheets/main-style.module.scss';
import { useSearchParams } from 'react-router-dom';

export interface TypeFilterFCProps {
  /** função responsável pela atualização dos filtros de tipo na URL */
  updateFilter: (types: string) => void;
}

export const TypeFilterFC: FC<TypeFilterFCProps> = ({ updateFilter }) => {
  // aqui os searchParams são apenas coletados, não setados
  const [searchParams] = useSearchParams();
  // coleta os tipos disponíveis
  const [allTypes] = useState<EntryType[]>(Object.keys(EntryType) as EntryType[]);

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
      const typeFilter = searchParams.get('types') || '';
      for (let i = 0; i < selected.length; i++) {
        if (typeFilter.includes(allTypes[i])) selected[i] = true;
      }
      return selected;
    });
  }, [searchParams]);

  return <div>
    {allTypes.map((_, i) =>
      <div key={i}>
        <input type={'checkbox'} checked={selectedTypes[i]} onChange={_ => updateSelected(i, !selectedTypes[i])} />
        <label className={mainStyle.regular}>{Object.values(EntryType)[i]}</label>
      </div>
    )}
  </div>;
};