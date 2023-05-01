import { FC, useState } from 'react';
import { Entry } from '../../core/entry';
import mainStyle from '../../style-sheets/main-style.module.scss';

export interface EntryFCProps {
  entry: Entry;
}

export const EntryFC: FC<EntryFCProps> = ({ entry }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return <div className={mainStyle.entryContainer}>
    <label className={mainStyle.entryTitle}>{entry.name}</label>
    <div className={mainStyle.entryExpandButton} onClick={() => setIsOpen(!isOpen)}>{`${isOpen ? '-' : '+'}`}</div>
    <EntryProperty value={[entry.year.toString()]} label={'Ano'} />
    <div className={mainStyle.regularContainer}>
      <p className={isOpen ? mainStyle.p : mainStyle.pCollapsed}>{entry.abstract}</p>
    </div>
    <EntryProperty value={entry.authors} label={'Autorxs'} />
    {isOpen && <EntryProperty value={entry.keywords} label={'Palavras-chave'} />}
    {isOpen && <EntryProperty value={entry.types} label={'Tipos'} />}
    {isOpen &&  <div className={mainStyle.regularContainer}>
      <label className={mainStyle.entryPropLabel}>Links: </label>
      {entry.links.map((l, i) =>
        <div key={i}>
          <a className={mainStyle.regularLink} href={l}> {l} </a>
          <br />
        </div>
      )}
    </div>}
  </div>;
};

interface EntryPropertyProps {
  value: string[];
  label: string;
}

const EntryProperty: FC<EntryPropertyProps> = ({ value, label }) => {
  return <div className={mainStyle.regularContainer}>
    <label className={mainStyle.entryPropLabel}>{label}:</label>
    {value.map((v, i) =>
      <EntryTag key={i} value={v} />
    )}

  </div>
}

interface EntryTagProps {
  value: string;
  onClick?: (val: string) => void;
}

const EntryTag: FC<EntryTagProps> = ({ value, onClick }) => {
  return <div className={mainStyle.entryTag} >{value}</div>
}
