// ! FILES
import React from 'react';
import styles from './Error.module.css';

const Error = () => {
  return (
    <section className={styles.errorRoute__section}>
      <p className={styles.errorRoute__text}>
        Aucunes routes ne correspond à votre recherche. 🙁
      </p>
    </section>
  );
};

export default Error;
