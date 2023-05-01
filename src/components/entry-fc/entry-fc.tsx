import { FC, useCallback, useState } from 'react';
import { Entry } from '../../core/entry';
import mainStyle from '../../style-sheets/main-style.module.scss';
import { useSearchParams } from 'react-router-dom';

export interface EntryFCProps {
  entry: Entry;
}

export const EntryFC: FC<EntryFCProps> = ({ entry }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [_, setSearchParams] = useSearchParams();

  const setYearFilter = useCallback((value: string) => {
    setSearchParams({years: value});
  }, []);

  const setAuthorFilter = useCallback((value: string) => {
    setSearchParams({authors: value});
  }, []);
  
  const setKeywordsFilter = useCallback((value: string) => {
    setSearchParams({keywords: value});
  }, []);
  
  const setTypesFilter = useCallback((value: string) => {
    setSearchParams({types: value});
  }, []);
  
  return <div className={mainStyle.entryContainer}>
    <label className={mainStyle.entryTitle}>{entry.name}</label>
    <div className={mainStyle.entryExpandButton} onClick={() => setIsOpen(!isOpen)}>{`${isOpen ? '-' : '+'}`}</div>
    <EntryProperty value={[entry.year.toString()]} label={'Ano'} onClick={setYearFilter}/>
    <div className={mainStyle.regularContainer}>
      <p className={isOpen ? mainStyle.p : mainStyle.pCollapsed}>{entry.abstract}</p>
    </div>
    <EntryProperty value={entry.authors} label={'Autorxs'} onClick={setAuthorFilter}/>
    {isOpen && <EntryProperty value={entry.keywords} label={'Palavras-chave'} onClick={setKeywordsFilter}/>}
    {isOpen && <EntryProperty value={entry.types} label={'Tipos'} onClick={setTypesFilter}/>}
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
  onClick?: (val: string) => void;
}

const EntryProperty: FC<EntryPropertyProps> = ({ value, label, onClick }) => {
  return <div className={mainStyle.regularContainer}>
    <label className={mainStyle.entryPropLabel}>{label}:</label>
    {value.map((v, i) =>
      <EntryTag key={i} value={v} onClick={onClick}/>
    )}

  </div>
}

interface EntryTagProps {
  value: string;
  onClick?: (val: string) => void;
}

const EntryTag: FC<EntryTagProps> = ({ value, onClick }) => {
  return <div className={mainStyle.entryTag} onClick={onClick && (() => onClick(value))}>{value}</div>
}
