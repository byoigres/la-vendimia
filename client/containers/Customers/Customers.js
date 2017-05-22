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

  render() {
    return (
      <div>
        <h1>Customers</h1>
        <Button>
          <Link to="/customers/add">Agregar</Link>
        </Button>
        <Table
          columns={['Clave', 'Nombre']}
          data={this.props.customers}
        />
      </div>
    );
  }
}

Customers.propTypes = {
  customers: propTypes.arrayOf(propTypes.arrayOf(propTypes.string)).isRequired,
  getCustomers: propTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    entities: {
      customers,
    },
  } = state;

  const customersArray = Object.keys(customers).map(key => [
    customers[key].id,
    `${customers[key].nombre} ${customers[key].apellidoPaterno} ${customers[key].apellidoMaterno}`,
  ]);

  return {
    customers: customersArray,
  };
};

export default connect(
  mapStateToProps,
  {
    getCustomers,
  },
)(Customers);
