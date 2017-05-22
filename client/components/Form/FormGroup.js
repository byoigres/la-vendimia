import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.css';

const FormGroup = ({ label, input, labelSpace, inputSpace }) => (
  <div className={styles['form-group']}>
    <label
      htmlFor={label.toLocaleLowerCase().replace(/\s/g, '-')}
      className={styles[`form-label-space-${labelSpace}`]}
    >
      {label}
    </label>
    <div className={`${styles['form-control']} ${styles[`form-control-space-${inputSpace}`]}`}>
      {input}
    </div>
  </div>
);

FormGroup.propTypes = {
  label: propTypes.string.isRequired,
  input: propTypes.element.isRequired,
  labelSpace: propTypes.number.isRequired,
  inputSpace: propTypes.number.isRequired,
};

export default FormGroup;
