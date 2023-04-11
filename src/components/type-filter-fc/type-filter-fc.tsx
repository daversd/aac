import { FC, useCallback, useState } from 'react';
import { EntryType } from '../../core/entry';
import mainStyle from '../../style-sheets/main-style.module.scss';

export interface TypeFilterFCProps {
  updateFilter: (value: EntryType[]) => void;
}

export const TypeFilterFC: FC<TypeFilterFCProps> = ({ updateFilter }) => {
  const [allTypes] = useState<EntryType[]>(Object.keys(EntryType) as EntryType[]);
  const [selectedTypes, setSelectedTypes] = useState<boolean[]>(new Array(allTypes.length).fill(false));

  const updateSelected = useCallback((index: number, value: boolean) => {
    const copy = selectedTypes.slice();
    copy[index] = value;
    setSelectedTypes(copy);
    updateFilter(allTypes.filter((_, i) => copy[i]));
  }, [selectedTypes]);

  return <div>
    {allTypes.map((_, i) =>
      <div key={i}>
        <input type={'checkbox'} checked={selectedTypes[i]} onChange={_ => updateSelected(i, !selectedTypes[i])} />
        <label className={mainStyle.regular}>{Object.values(EntryType)[i]}</label>
      </div>
    )}
  </div>;
};
