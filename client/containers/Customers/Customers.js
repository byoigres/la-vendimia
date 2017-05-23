import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Table,
} from 'components';
import { Link } from 'react-router-dom';
import { getCustomers } from 'actions';

class Customers extends Component {
  componentWillMount() {
    this.props.getCustomers();
  }

  edit(key) {
    console.log(`Editing customer ${key}`);
  }

  render() {
    const { customers } = this.props;

    return (
      <div>
        <h1>Customers</h1>
        <Button>
          <Link to="/customers/add">Agregar</Link>
        </Button>
        <Table
          columns={['Clave', 'Nombre', '']}
          data={
            Object.keys(customers).map(key => (
              {
                key,
                values: [
                  {
                    value: customers[key].clave,
                  },
                  {
                    canEdit: true,
                    value: `${customers[key].nombre} ${customers[key].apellidoPaterno} ${customers[key].apellidoMaterno}`,
                  },
                ],
              } 
            ))
          }
          canEdit
        />
      </div>
    );
  }
}

Customers.propTypes = {
  customers: propTypes.objectOf(
    propTypes.shape({
      clave: propTypes.string,
      nombre: propTypes.string,
      apellidoPaterno: propTypes.string,
      apellidoMaterno: propTypes.string,
      rfc: propTypes.string,
    }),
  ).isRequired,
  getCustomers: propTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    entities: {
      customers,
    },
  } = state;

  /*
  const customersArray = Object.keys(customers).map(key => [
    customers[key].clave,
    `${customers[key].nombre} ${customers[key].apellidoPaterno} ${customers[key].apellidoMaterno}`,
  ]);
  */
  return {
    customers, // : customersArray,
  };
};

export default connect(
  mapStateToProps,
  {
    getCustomers,
  },
)(Customers);
