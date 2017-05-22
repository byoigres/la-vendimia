import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.css';

const FormActions = ({ children, space }) => (
  <div className={`${styles['form-actions']} ${styles[`form-action-space-${space}`]}`}>
    {children}
  </div>
);

FormActions.propTypes = {
  children: propTypes.arrayOf(propTypes.element).isRequired,
  space: propTypes.number.isRequired,
};

export default FormActions;
