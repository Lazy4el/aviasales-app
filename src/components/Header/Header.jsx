import { React } from 'react';

import logoImage from '../../assets/Logo.png';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className="header">
      <div className={classes.logo}>
        <a className={classes.logo__link} href="#app">
          <img className={classes.logo__img} src={logoImage} alt="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
