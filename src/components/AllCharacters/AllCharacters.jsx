// ! COMPONENTS
import SingleCharacter from '../SingleCharacter/SingleCharacter';
// ! FILES
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import useFetch from '../../useFetch';
import BtnUp from '../BtnUp/BtnUp';
import styles from './AllCharacters.module.css';
import SearchBar from '../SearchBar/SearchBar';

const url = 'https://rickandmortyapi.com/api/character/?page=';

const AllCharacters = () => {
  const { characters, page, setPage, pagesTotal } = useFetch(url);
  const [error, setError] = useState(false);

  const changePage = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <>
      <SearchBar setError={setError} />
      {error ? (
        <main className={styles.main__error}>
          <h2 className={styles.heading__error}>
            There&apos;s no character(s) found.
          </h2>
        </main>
      ) : (
        <>
          <main className={styles.main__allCharacters}>
            {characters.map((character, i) => {
              return (
                <section key={i} className={styles.section__allCharacters}>
                  <SingleCharacter {...character} />
                </section>
              );
            })}
          </main>
          <footer className={styles.footer__allCharacters}>
            <ReactPaginate
              previousLabel='Prev'
              nextLabel='Next'
              pageCount={pagesTotal}
              onPageChange={changePage}
              containerClassName={styles.footer__pagination}
              previousLinkClassName={styles.footer__pagination_prev}
              nextLinkClassName={styles.footer__pagination_next}
              pageClassName={styles.footer__pagination_btn}
              activeClassName={styles.footer__pagination_active}
              disabledClassName={styles.footer__pagination_disabled}
              forcePage={page - 1}
            />
            <BtnUp />
          </footer>
        </>
      )}
    </>
  );
};

export default AllCharacters;
