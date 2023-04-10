import { FC, useCallback, useState } from 'react';
import { EntryType } from '../../core/entry';

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
        <label>{Object.values(EntryType)[i]}</label>
        <input type={'checkbox'} checked={selectedTypes[i]} onChange={_ => updateSelected(i, !selectedTypes[i])} />
      </div>
    )}
  </div>;
};
