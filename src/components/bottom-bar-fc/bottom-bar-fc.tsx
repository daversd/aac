import { FC } from 'react';
import style from '../../style-sheets/main-style.module.scss';
import { Link } from 'react-router-dom';

export const BottomBarFC: FC = () => {
  return <div className={style.bottomBarContainer}>
    <Link className={style.bottomBarLink} to='/'>pesquise</Link>
    <Link className={style.bottomBarLink} to='/sobre'>sobre</Link>
    <Link className={style.bottomBarLink} to='/colabore'>colabore</Link>
    <label>🍪 esta página não utiliza cookies 🍪</label>
  </div>
}