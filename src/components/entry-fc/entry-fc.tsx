import { FC } from 'react';
import { Entry } from '../../core/entry';

export interface EntryFCProps {
  entry: Entry;
}

export const EntryFC: FC<EntryFCProps> = ({ entry }) => {
  return <div>
    <div>{entry.name}</div>
    <div>{entry.year}</div>
    <div>{entry.authors.join('|')}</div>
    <div>{entry.keywords.join('|')}</div>
    <div>{entry.types.join('|')}</div>
    <div>{entry.address}</div>
    {entry.links.map((l, i) =>
      <a key={i} href={l}> {l} </a>
    )}
  </div>;
};
