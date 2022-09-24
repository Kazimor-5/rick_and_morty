// ! FILES
import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import styles from './BtnUp.module.css';

const BtnUp = () => {
  const [showButton, setShowButton] = useState(false);
  const isShowed = () => {
    document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000
      ? setShowButton(true)
      : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isShowed);
    return () => window.removeEventListener('scroll', isShowed);
  });

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {showButton ? (
        <button
          type='button'
          className={styles.btnUp__btn}
          onClick={scrollToTop}
        >
          <FaChevronUp className={styles.btnUp__icon} />
        </button>
      ) : (
        ''
      )}
    </>
  );
};

export default BtnUp;
