import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.css';

const Form = ({ children }) => (
  <div className={styles.form}>
    {children}
  </div>
);

Form.propTypes = {
  children: propTypes.arrayOf(propTypes.element).isRequired,
};

export default Form;
