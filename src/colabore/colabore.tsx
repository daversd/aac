import { FC } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import comoColaborar from '../docs/como-colaborar.md?raw';
import mainStyle from '../style-sheets/main-style.module.scss';

export const ColaboreApp: FC = () => {
  return <div className={mainStyle.mdContainer}>
    <ReactMarkdown className={mainStyle.reactMarkdown} children={comoColaborar} remarkPlugins={[remarkGfm]}></ReactMarkdown>
  </div>;
};
