import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import style from './style-sheets/main-style.module.scss';
import { NavBarFC } from './components/nav-bar-fc/nav-bar-fc';
import { BottomBarFC } from './components/bottom-bar-fc/bottom-bar-fc';

export const SiteFC: FC = () => {
  return <div className={style.mainContent}>
    <NavBarFC />
    <div className={style.nestedContent}>
      <Outlet />
      <BottomBarFC />
    </div>
  </div>;
};
