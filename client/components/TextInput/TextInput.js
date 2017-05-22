import React from 'react';
import styles from './styles.css';

const TextInput = () => (
  <div className={styles['text-input-container']}>
    <input
      className={styles['text-input']}
      type="text"
    />
  </div>
);

TextInput.propTypes = {};

export default TextInput;
