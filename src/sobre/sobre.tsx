import { FC } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import manifesto from '../data/manifesto.md?raw';
import mainStyle from '../style-sheets/main-style.module.scss';
import remarkGfm from 'remark-gfm';

export const SobreApp: FC = () => {
  return <div>
    <ReactMarkdown className={mainStyle.reactMarkdown} children={manifesto} remarkPlugins={[remarkGfm]}></ReactMarkdown>
  </div>;
};
