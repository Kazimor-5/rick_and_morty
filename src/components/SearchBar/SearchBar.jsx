// ! FILES
import { useState, useEffect, useCallback } from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';
import ky from 'ky';

const url = 'https://rickandmortyapi.com/api/character/?name=';

const SearchBar = () => {
  const [searchedCharacter, setSearchedCharacter] = useState('');

  const findCharacter = useCallback(async () => {
    const response = await ky.get(`${url}${searchedCharacter}`).json(); // * url + value type in input field
    // console.log(response);
    // const {
    //   data: { results },
    // } = response;
    // console.log(results);
    // setSearchedCharacter(results);
  }, [searchedCharacter]);

  const searchCharacter = (e) => setSearchedCharacter(e.target.value);

  useEffect(() => {
    findCharacter();
  }, [findCharacter]);

  return (
    <form className={styles.form__container}>
      <label htmlFor='searchBar' className={styles.form__label}>
        <FaSearch />
      </label>
      <input
        type='text'
        name='searchBar'
        id='searchBar'
        className={styles.form__input}
        // * Value typed in input field
        value={searchedCharacter}
        onChange={searchCharacter}
        placeholder='Search character'
      />
    </form>
  );
};

export default SearchBar;
