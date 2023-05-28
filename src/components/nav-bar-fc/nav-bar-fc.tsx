import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from '../../style-sheets/main-style.module.scss';
import { SearchBarFC } from '../search-bar-fc/search-bar-fc';

/** Componente que renderiza a barra de navegação */
export const NavBarFC: FC = () => {
  return <nav>
    <div className={style.navContainer}>
      <div className={style.navTitleContainer}><NavLink className={style.navTitle} to='/'>AAC</NavLink></div>
      <SearchBarFC />
      <NavBarLinks />
      <NavBarMenu />
    </div>
  </nav>;
};

/** Componente que renderiza os botões de links da barra de navegação */
const NavBarLinks: FC = () => {
  return <div className={style.navLi}>
    <Link className={style.navLinkText} to='/'>pesquise</Link>
    <Link className={style.navLinkText} to='/sobre'>sobre</Link>
    <Link className={style.navLinkText} to='/colabore'>colabore</Link>
  </div>;
};

/** Componente que renderiza o menu da barra de navegação, quando em modo compacto */
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
  </>;
};
