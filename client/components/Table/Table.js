import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.css';

const Table = ({ columns, data }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        {
          columns.map(item => (
            <th key={Math.random()}>
              {item}
            </th>
          ))
        }
      </tr>
    </thead>
    <tbody>
      {
        data.map(row => (
          <tr key={Math.random()}>
            {
              row.map(column => (
                <td key={Math.random()}>{column}</td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  </table>
);

Table.propTypes = {
  columns: propTypes.arrayOf(propTypes.string).isRequired,
  data: propTypes.arrayOf(propTypes.arrayOf(propTypes.string)).isRequired,
};

export default Table;
