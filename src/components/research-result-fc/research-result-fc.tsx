import { FC, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { acervo } from '../../data/acervo';
import style from '../../style-sheets/main-style.module.scss';
import { FilterWeightedEntriesByData, WeightedMaterial, WeightedGenericMaterialFilter } from '../../utils/filter-materials';
import { getFiltersFromSearchParams } from '../../utils/get-filters-from-search-params';
import { stringToPatterns } from '../../utils/string-to-patterns';
import { MaterialFC } from '../material-fc/material-fc';
import { materialsToCSV } from '../../utils/materials-to-csv';
import { downloadAsCSV } from '../../utils/download-file';

/**
 * Componente que renderiza os resultados da pesquisa em uma página, puxando os filtros
 * de pesquisa da url (utilizando `searchParams`), partindo do acervo completo.
 */
export const ResearchResultFC: FC = () => {
  const [searchParams] = useSearchParams();

  const [weightedResult, setWeightedResult] = useState<WeightedMaterial[]>([]);

  /** Aplica a pesquisa e filtros no material do acervo */
  const getContent = () => {
    // inicialmente define o material sem pesos associados
    let weightedContent: WeightedMaterial[] = acervo.map(e => ({ material: e, weight: 1 }));

    // aplica o filtro genérico de busca, caso tenha sido definido
    const search = searchParams.get('search') ?? '';
    if (search.length > 0) {
      const pattern = stringToPatterns(search);
      if (pattern) weightedContent = WeightedGenericMaterialFilter(acervo, pattern);
    }

    // coleta os filtros individuais do search params
    const { keywords, authors, types, years, abstract, name } = getFiltersFromSearchParams(searchParams);

    // aplica os filtros selecionados
    weightedContent = FilterWeightedEntriesByData({
      weightedMaterials: weightedContent,
      nameFilter: stringToPatterns(name),
      keywordsFilter: stringToPatterns(keywords),
      authorFilter: stringToPatterns(authors),
      typeFilter: stringToPatterns(types),
      yearFilter: stringToPatterns(years),
      abstractFilter: stringToPatterns(abstract)
    });

    // retorna o resultado da pesquisa e dos filtros, ordenados por peso
    return weightedContent.slice().sort((a, b) => b.weight - a.weight);
  };

  /** Ordena os materiais por ordem alfabética ascendente dos títulos */
  const sortNameAscending = useCallback(() => {
    const sortedContent = weightedResult.slice();
    sortedContent.sort((a, b) => a.material.name.localeCompare(b.material.name));
    setWeightedResult(sortedContent);
  }, [weightedResult]);

  /** Ordena os materiais por ordem alfabética descendente dos títulos */
  const sortNameDescending = useCallback(() => {
    const sortedContent = weightedResult.slice();
    sortedContent.sort((a, b) => b.material.name.localeCompare(a.material.name));
    setWeightedResult(sortedContent);
  }, [weightedResult]);

  /** Ordena os materiais por ordem ascendente dos anos */
  const sortDateAscending = useCallback(() => {
    const sortedContent = weightedResult.slice();
    sortedContent.sort((a, b) => a.material.year - b.material.year);
    setWeightedResult(sortedContent);
  }, [weightedResult]);

  /** Ordena os materiais por ordem descendente dos anos */
  const sortDateDescending = useCallback(() => {
    const sortedContent = weightedResult.slice();
    sortedContent.sort((a, b) => b.material.year - a.material.year);
    setWeightedResult(sortedContent);
  }, [weightedResult]);

  /** Ordena os materiais por ordem ascendente dos pesos */
  const sortRelevance = useCallback(() => {
    setWeightedResult(weightedResult.slice().sort((a, b) => b.weight - a.weight));
  }, [weightedResult]);

  /** Baixa o resultado atual da pesquisa como um arquivo csv */
  const downloadCSV = () => {
    const fileName = 'pesquisa-aac.csv';
    downloadAsCSV(fileName, materialsToCSV(weightedResult.map(w => w.material)));
  };

  // Atualiza os resultados e navega até o topo da página toda vez que se retorna à página de pesquisa
  useEffect(() => {
    setWeightedResult(getContent());
    window.scrollTo(0, 0);
  }, [searchParams]);

  return <div className={style.resultContainer}>
    <div className={style.title}>{`resultados [${weightedResult.length} ${weightedResult.length === 1 ? 'item' : 'itens'}]`}</div>
    <SortBar
      nameAscending={sortNameAscending}
      nameDescending={sortNameDescending}
      dateAscending={sortDateAscending}
      dateDescending={sortDateDescending}
      relevance={sortRelevance}
      downloadCSV={downloadCSV}
    />
    {weightedResult.map(e => e.material).map((e, i) =>
      <div key={i}>
        <MaterialFC material={e} />
        <br />
      </div>
    )}
  </div>;
};

/** As funções de input que serão expostas pela barra de ordenamento */
interface SortBarProps {
  nameAscending: () => void;
  nameDescending: () => void;
  dateAscending: () => void;
  dateDescending: () => void;
  relevance: () => void;
  downloadCSV: () => void;
}

/** Tipos de ordenamento do material de pesquisa */
enum SortType {
  NameAscending = 0,
  NameDescending = 1,
  DateAscending = 2,
  DateDescending = 3,
  Relevance = 4
}

/** Componente que expõe as funções da barra de ordenamento como uma série de botões */
const SortBar: FC<SortBarProps> = ({ nameAscending, nameDescending, dateAscending, dateDescending, relevance, downloadCSV }) => {
  const [sortType, setSortType] = useState<SortType>(SortType.Relevance);
  const [searchParams] = useSearchParams();

  /** Função que gerencia os estados dos botões da barra de ordenamento */
  const setSortFilter = (sortOption: SortType) => {
    if (sortOption === SortType.NameAscending) nameAscending();
    if (sortOption === SortType.NameDescending) nameDescending();
    if (sortOption === SortType.DateAscending) dateAscending();
    if (sortOption === SortType.DateDescending) dateDescending();
    if (sortOption === SortType.Relevance) relevance();

    setSortType(sortOption);
  };

  useEffect(() => { setSortFilter(SortType.Relevance); }, [searchParams]);

  return <div className={style.sortBarContainer}>
    <button className={sortType === SortType.Relevance ? style.sortToggleButtonActive : style.sortToggleButton} onClick={() => setSortFilter(SortType.Relevance)}>relevância</button>
    <button className={sortType === SortType.NameAscending ? style.sortToggleButtonActive : style.sortToggleButton} onClick={() => setSortFilter(SortType.NameAscending)}>A - Z</button>
    <button className={sortType === SortType.NameDescending ? style.sortToggleButtonActive : style.sortToggleButton} onClick={() => setSortFilter(SortType.NameDescending)}>Z - A</button>
    <button className={sortType === SortType.DateAscending ? style.sortToggleButtonActive : style.sortToggleButton} onClick={() => setSortFilter(SortType.DateAscending)}>1 - 9</button>
    <button className={sortType === SortType.DateDescending ? style.sortToggleButtonActive : style.sortToggleButton} onClick={() => setSortFilter(SortType.DateDescending)}>9 - 1</button>
    <button className={style.sortDownloadButton} onClick={downloadCSV}>csv</button>
  </div>;
};
