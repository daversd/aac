import { FC } from 'react';
import { Link } from 'react-router-dom';

import style from '../../style-sheets/main-style.module.scss';
import { SearchBarFC } from '../search-bar-fc/search-bar-fc';

export const NavBarFC: FC = () => {
  return <nav>
    <div className={style.navContainer}>
      <div className={style.navTitleContainer}><div className={style.navTitle}>AAC</div></div>
      <SearchBarFC />
      <div className={style.navLi}>
          <Link className={style.navLinkText} to='/'>pesquise</Link>
          <Link className={style.navLinkText} to='/sobre'>sobre</Link>
          <Link className={style.navLinkText} to='/colabore'>colabore</Link>
      </div>
    </div>
  </nav>
};
