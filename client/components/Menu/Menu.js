import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.css';

export const Menu = ({ items }) => (
  <ul className={styles.menu}>
    {
      items.map(item => (
        <li key={Math.random()}>
          {item}
        </li>
      ))
    }
  </ul>
);

export const MenuSeparator = () => (
  <span key={Math.random()} className={styles.separator} />
);

Menu.propTypes = {
  items: propTypes.arrayOf(propTypes.element).isRequired,
};
