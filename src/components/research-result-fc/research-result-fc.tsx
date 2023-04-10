import { FC } from "react"
import { Entry } from "../../core/entry"
import { EntryFC } from "../entry-fc/entry-fc"

export interface ResearchResultProps {
  content: Entry[]
}

export const ResearchResultFC: FC<ResearchResultProps> = ({ content }) => {
    return <>
    {content.map((e, i) =>
      <div key={i}>
        <EntryFC entry={e} />
        <br />
      </div>
    )}</>
}