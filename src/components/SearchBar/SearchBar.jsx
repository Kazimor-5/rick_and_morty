// ! FILES
import { useState, useEffect, useCallback } from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';
import ky from 'ky';

const url = 'https://rickandmortyapi.com/api/character/?name=';

const SearchBar = ({ setError, setCharacters }) => {
  const [searchedCharacter, setSearchedCharacter] = useState('');

  const findCharacter = useCallback(async () => {
    const urlResponse = await ky.get(`${url}${searchedCharacter}`).json(); // * url + value type in input field
    const { results } = urlResponse;

    if (results) {
      setError(false);
      setCharacters(results);
    } else {
      setError(true);
    }
  }, [searchedCharacter, setCharacters, setError]);

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
