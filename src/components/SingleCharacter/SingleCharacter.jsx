// ! FILES
import { Link } from 'react-router-dom';
import styles from './SingleCharacter.module.css';

const SingleCharacter = (character) => {
  const { name, image, id } = character;

  return (
    <article className={styles.singleCharacter__article}>
      <h2 className={styles.singleCharacter__name}>{name}</h2>
      <div className={styles.singleCharacter__imgContainer}>
        <img
          src={image}
          alt={name}
          className={`${styles.singleCharacter__img} img`}
        />
      </div>
      <Link className='btn' to={`/details/${id}`}>
        Détails
      </Link>
    </article>
  );
};

export default SingleCharacter;
