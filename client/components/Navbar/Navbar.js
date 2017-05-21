import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.css';

const Layout = ({ title }) => (
  <div className={styles.navbar}>
    <div className={styles['navbar-container']}>
      <h1>{title}</h1>
    </div>
  </div>
);

Layout.propTypes = {
  title: propTypes.string.isRequired,
};

export default Layout;
