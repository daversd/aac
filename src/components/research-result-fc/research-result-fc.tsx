import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { acervo } from "../../data/acervo";
import mainStyle from '../../style-sheets/main-style.module.scss';
import { FilterEntriesByData, FilterEntriesGeneric } from "../../utils/filter-entries";
import { stringToPatterns } from "../../utils/string-to-patterns";
import { EntryFC } from "../entry-fc/entry-fc";

/**
 * Componente que renderiza os resultados da pesquisa em uma página, puxando os filtros
 * de pesquisa da url (utilizando `searchParams`), partindo do acervo completo.
 */
export const ResearchResultFC: FC = () => {
  const [searchParams] = useSearchParams();

  let content = acervo;

  // aplica o filtro genérico de busca, caso tenha sido definido
  const search = searchParams.get('search') ?? '';
  if (search.length > 0) {
    const pattern = stringToPatterns(search);
    if (pattern) content = FilterEntriesGeneric(acervo, pattern);
  }

  // coleta os filtros individuais do search params
  // @todo substituir por uma função unificada que faz isso
  const keywords = searchParams.get('keywords') ?? '';
  const authors = searchParams.get('authors') ?? '';
  const types = searchParams.get('types') ?? '';
  const years = searchParams.get('years') ?? '';
  const abstract = searchParams.get('abstract') ?? '';
  const name = searchParams.get('name') ?? '';

  // aplica os filtros selecionados 
  content = FilterEntriesByData({
    entries: content,
    nameFilter: stringToPatterns(name),
    keywordsFilter: stringToPatterns(keywords),
    authorFilter: stringToPatterns(authors),
    typeFilter: stringToPatterns(types),
    yearFilter: stringToPatterns(years),
    abstractFilter: stringToPatterns(abstract)
  });

  return <div className={mainStyle.resultContainer}>
    <div className={mainStyle.title}>{`Resultados [${content.length} itens]`}</div>
    {content.map((e, i) =>
      <div key={i}>
        <EntryFC entry={e} />
        <br />
      </div>
    )}
  </div>
}