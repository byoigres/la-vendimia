import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './styles.css';

class Table extends Component {
  render() {
    const { columns, data, canEdit } = this.props;

    return (
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
                {[
                  row.values.map(column => (
                    <td key={Math.random()}>
                      {column.value}
                    </td>
                  )),
                  ...(
                    canEdit ?
                      <td key={Math.random()}><button onClick={() => alert(row.key)}>Edit</button></td> :
                      null
                  ),
                ]}
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  columns: propTypes.arrayOf(propTypes.string).isRequired,
  /*
  data: propTypes.arrayOf(
    propTypes.arrayOf(
      propTypes.oneOfType([
        propTypes.string,
        propTypes.element,
      ]),
    ),
  ).isRequired,
  */
};

export default Table;
