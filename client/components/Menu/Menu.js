import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.css';

const Menu = ({ items }) => (
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

Menu.propTypes = {
  items: propTypes.arrayOf(propTypes.element).isRequired,
};

export default Menu;
