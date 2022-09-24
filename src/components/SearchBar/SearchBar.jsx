// ! FILES
import React, { useState, useEffect, useCallback } from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character/?name=';

const SearchBar = ({ setError }) => {
  const [searchedCharacter, setSearchedCharacter] = useState('');

  const findCharacter = useCallback(async () => {
    try {
      const response = await axios.get(`${url}${searchedCharacter}`);
      const { data } = response;
      const { results } = data;
      console.log(results);
    } catch (error) {
      setError(true);
      throw new Error(error.message || error);
    }
  }, [searchedCharacter]);

  useEffect(() => {
    findCharacter();
  }, [findCharacter, searchedCharacter]);

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
        value={searchedCharacter}
        onChange={(e) => setSearchedCharacter(e.target.value)}
        placeholder='Search character'
      />
    </form>
  );
};

export default SearchBar;
