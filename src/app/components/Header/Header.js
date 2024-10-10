import MenuOpen from '../MenuOpen/MenuOpen.js';
import Burger from '../UI/burger/Burger.js';
import Logo from '../UI/logo/Logo.js';
import styles from './_Header.module.scss';
import { useState } from 'react';

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(!menuState);
    console.log('click')
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles['header__logo-container']}>
          <Logo/>
        </div>
        {/* <ul className={styles['header__list']}>
          <li className={styles['header__item']}><a href="#home">Home</a></li>
          <li className={styles['header__item']}><a href="#about">About</a></li>
          <li className={styles['header__item']}><a href="#services">Services</a></li>
          <li className={styles['header__item']}><a href="#contact">Contact</a></li>
        </ul> */}
        <Burger menuState={menuState} toggleMenu={toggleMenu} />
        
      </header>
      <MenuOpen menuState={menuState} />
    </>
  );
};

export default Header;


