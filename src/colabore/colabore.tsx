import { FC, useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import comoColaborar from '../docs/como-colaborar.md?raw';
import mainStyle from '../style-sheets/main-style.module.scss';

/** Página de colaboração, expõe o arquivo markdown que também está presente no repositório */
export const ColaboreApp: FC = () => {
  // retorna para o topo da página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className={mainStyle.mdContainer}>
    <ReactMarkdown className={mainStyle.reactMarkdown} children={comoColaborar} remarkPlugins={[remarkGfm]}></ReactMarkdown>
  </div>;
};
