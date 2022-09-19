// ! COMPONENTS
import Navbar from '../Navbar/Navbar';
// ! FILES
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header__mainHeader}>
      <nav className={styles.header__mainHeader_nav}>
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
