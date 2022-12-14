// ! FILES
import styles from './Error.module.css';

const Error = () => {
  return (
    <section>
      <p className={styles.errorRoute__text}>
        Aucunes routes ne correspond à votre recherche. 🙁
      </p>
    </section>
  );
};

export default Error;
