import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './styles.css';

class TextInput extends Component {
  getValue() {
    return this.input.value;
  }

  render() {
    const { error, ...props } = this.props;

    let errorContainer = null;

    if (error) {
      errorContainer = (
        <span className={styles['textbox-error']}>{error}</span>
      );
    }

    return (
      <div className={styles['text-input-container']}>
        <input
          {...props}
          className={styles['text-input']}
          type="text"
          ref={(f) => { this.input = f; }}
        />
        {errorContainer}
      </div>
    );
  }
}

TextInput.propTypes = {
  error: propTypes.string,
};

TextInput.defaultProps = {
  error: null,
};

export default TextInput;
