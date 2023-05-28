import { FC, useState, useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import manifesto from '../docs/manifesto.md?raw';
import mainStyle from '../style-sheets/main-style.module.scss';
import remarkGfm from 'remark-gfm';
import { acervo } from '../data/acervo';

export const SobreApp: FC = () => {
  const [showManifesto, setShowManifesto] = useState<boolean>(true);
  const [showStats, setShowStats] = useState<boolean>(false);
  // const visits = 0; //https://countapi.xyz/
  const stats = `
  # Estatísticas
  - Total de itens: _${acervo.length}_
  - Total de autorxs: _${Array.from(new Set(acervo.flatMap(e => e.authors))).length}_
  - Tipos de itens: _${Array.from(new Set(acervo.flatMap(e => e.types))).join(', ')}_
  - Palavras-chave: _${Array.from(new Set(acervo.flatMap(e => e.keywords))).join(', ')}_
  `;

  // retorna para o topo da página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className={mainStyle.mdContainer}>
    <div className={mainStyle.mdToggle} onClick={() => setShowManifesto(!showManifesto)}>{`Manifesto [${showManifesto ? '-' : '+'}]`}</div>
    {showManifesto && <ReactMarkdown className={mainStyle.reactMarkdown} children={manifesto} remarkPlugins={[remarkGfm]}></ReactMarkdown>}
    <div className={mainStyle.mdToggle} onClick={() => setShowStats(!showStats)}>{`Estatísticas [${showStats ? '-' : '+'}]`}</div>
    {showStats && <ReactMarkdown className={mainStyle.reactMarkdown} children={stats} remarkPlugins={[remarkGfm]}></ReactMarkdown>}
  </div>;
};
