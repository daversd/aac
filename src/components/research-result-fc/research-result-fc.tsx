import { FC } from "react";
import { Entry } from "../../core/entry";
import { EntryFC } from "../entry-fc/entry-fc";
import navBarStyle from './research-result-fc.module.scss';
import mainStyle from '../../style-sheets/main-style.module.scss';

export interface ResearchResultProps {
  content: Entry[]
}

export const ResearchResultFC: FC<ResearchResultProps> = ({ content }) => {
  return <div className={navBarStyle.container}>
    <div className={mainStyle.title}>{`Resultados [${content.length} itens]`}</div>
    {content.map((e, i) =>
      <div key={i}>
        <EntryFC entry={e} />
        <br />
      </div>
    )}
  </div>
}