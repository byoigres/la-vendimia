import React from 'react';
import propTypes from 'prop-types';
import styles from './styles';

const Header = ({ text, subtext }) => (
  <h1 className={styles.header}>
    <p>{text}</p>
    <small className={styles.subtext}>
      {subtext}
    </small>
  </h1>
);

Header.propTypes = {
  text: propTypes.string.isRequired,
  subtext: propTypes.oneOfType([
    propTypes.string,
    propTypes.element,
  ]),
};

Header.defaultProps = {
  subtext: null,
};

export default Header;
