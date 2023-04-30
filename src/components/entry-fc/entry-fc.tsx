import { FC } from 'react';
import { Entry } from '../../core/entry';
import mainStyle from '../../style-sheets/main-style.module.scss';

export interface EntryFCProps {
  entry: Entry;
}

export const EntryFC: FC<EntryFCProps> = ({ entry }) => {
  return <div className={mainStyle.entryContainer}>
    <label className={mainStyle.entryTitle}>{entry.name}</label>
    <div className={mainStyle.regularContainer}>
      <label className={mainStyle.label}>Ano: </label>
      <label className={mainStyle.regular}>{entry.year}</label>
    </div>
    <div className={mainStyle.regularContainer}>
      <p className={mainStyle.p}>{entry.abstract}</p>
    </div>
    <div className={mainStyle.regularContainer}>
      <label className={mainStyle.label}>Autores: </label>
      <label className={mainStyle.regular}>{entry.authors.join(' | ')}</label>
    </div>
    <div className={mainStyle.regularContainer}>
      <label className={mainStyle.label}>Palavras-chave: </label>
      <label className={mainStyle.regular}>{entry.keywords.join(' | ')}</label>
    </div>
    <div className={mainStyle.regularContainer}>
      <label className={mainStyle.label}>Tipos: </label>
      <label className={mainStyle.regular}>{entry.types.join(' | ')}</label>
    </div>
    <div className={mainStyle.regularContainer}>
    <label className={mainStyle.label}>Links: </label>
      {entry.links.map((l, i) =>
        <div key={i}>
          <a className={mainStyle.regularLink} href={l}> {l} </a>
          <br />
        </div>
      )}
    </div>
  </div>;
};
