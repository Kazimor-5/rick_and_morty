// ! FILES
import ky from 'ky';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Details.module.css';

const url = 'https://rickandmortyapi.com/api/character/';

const Details = () => {
  const [singleCharacter, setSingleCharacter] = useState([]);
  const { id } = useParams();

  const getSingleCharacter = useCallback(async () => {
    const response = await ky.get(`${url}${id}`).json();
    setSingleCharacter(response);
  }, [id]);

  useEffect(() => {
    getSingleCharacter();
  }, [getSingleCharacter]);

  const { name, status, species, gender, image, location, origin } =
    singleCharacter;
  const locationArr = [];
  const originArr = [];

  locationArr.push(location);
  originArr.push(origin);

  return (
    <section className={styles.detailsCharacter__section}>
      <Link
        className={`${styles.detailsCharacter__back_btn} btn btn--white`}
        to='/'
      >
        Back home
      </Link>
      <article className={styles.detailsCharacter__article}>
        <div className={styles.detailsCharacter__imgContainer}>
          <img src={image} alt={name} className='img' />
        </div>
        <h2 className={styles.detailsCharacter__name}>{name}</h2>
        <p className={styles.detailsCharacter__gender}>Gender: {gender}</p>
        {/* {originArr.map((origins) => {
          const { name } = origins;

          return (
            <p key={id} className={styles.detailsCharacter__origins}>
              Origins: {name}
            </p>
          );
        })} */}
        <p className={styles.detailsCharacter__status}>Status: {status}</p>
        <p className={styles.detailsCharacter__species}>Species: {species}</p>
        {/* {locationArr.map((place) => {
          const { name } = place;

          return (
            <p key={id} className={styles.detailsCharacter__place}>
              Last known location: {name}
            </p>
          );
        })} */}
      </article>
    </section>
  );
};

export default Details;
