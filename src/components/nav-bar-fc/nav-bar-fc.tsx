import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import style from '../../style-sheets/main-style.module.scss';
import { SearchBarFC } from '../search-bar-fc/search-bar-fc';

export const NavBarFC: FC = () => {
  return <nav>
    <div className={style.navContainer}>
      <div className={style.navTitleContainer}><div className={style.navTitle}>AAC</div></div>
      <SearchBarFC />
      <NavBarLinks />
      <NavBarMenu />
    </div>
  </nav>
};

const NavBarLinks: FC = () => {
  return <div className={style.navLi}>
    <Link className={style.navLinkText} to='/'>pesquise</Link>
    <Link className={style.navLinkText} to='/sobre'>sobre</Link>
    <Link className={style.navLinkText} to='/colabore'>colabore</Link>
  </div>
}

const NavBarMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return <>
    <div className={style.navMenuButtonContainer}>
      <div className={style.navMenuButton} onClick={() => setIsOpen(!isOpen)}>
        <div className={style.navMenuButtonLine}></div>
        <div className={style.navMenuButtonLine}></div>
        <div className={style.navMenuButtonLine}></div>
      </div>
    </div>
    {isOpen && <div>
      <div className={style.navMenuBlocker} onClick={() => setIsOpen(!isOpen)}></div>
      <div className={style.navMenuContainer}>
        <Link className={style.navMenuLink} onClick={() => setIsOpen(false)} to='/'>pesquise</Link>
        <Link className={style.navMenuLink} onClick={() => setIsOpen(false)} to='/sobre'>sobre</Link>
        <Link className={style.navMenuLink} onClick={() => setIsOpen(false)} to='/colabore'>colabore</Link>
      </div>
    </div>}
  </>
}