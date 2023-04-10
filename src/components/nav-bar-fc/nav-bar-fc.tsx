import { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './nav-bar-fc.module.scss';

export const NavBarFC: FC = () => {
  return <nav>
    <ul className={style.ul}>
      <li className={style.li}><a className={style.title}>{'aac'}</a></li>
      <li className={style.li}><Link className={style.linkText} to='/'>pesquisar</Link></li>
    </ul>
  </nav>;
};
