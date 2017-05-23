import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ children, ...props }) => (
  <button
    className={styles.button}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.element,
    propTypes.arrayOf(propTypes.element),
  ]).isRequired,
};

export default Button;
