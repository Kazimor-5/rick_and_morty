// ! FILES
import ky from 'ky';
import { useCallback, useEffect, useState } from 'react';

const useFetch = (url) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesTotal, setPagesTotal] = useState(0);

  const getCharacters = useCallback(async () => {
    try {
      const response = await ky.get(`${url}${page}`).json();
      const { info, results } = response;

      setPagesTotal(info.pages);
      setCharacters(results);
    } catch (error) {
      throw new Error(error.message || error);
    }
  }, [url, page]);

  useEffect(() => {
    getCharacters();
  }, [url, getCharacters, page]);

  return { characters, page, setPage, pagesTotal };
};

export default useFetch;
