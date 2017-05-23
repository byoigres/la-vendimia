import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Header,
  Table,
} from 'components';
import { Link } from 'react-router-dom';
import { getCustomers } from 'actions';

class Customers extends Component {
  componentWillMount() {
    this.props.getCustomers();
  }

  render() {
    const { customers } = this.props;

    return (
      <div>
        <Header
          text="Clientes Registrados"
          subtext={<Link to="/customers/add">Agregar</Link>}
        />
        <Table
          columns={['Clave', 'Nombre', '']}
          data={
            Object.keys(customers).map(key => [
              customers[key].clave,
              `${customers[key].nombre} ${customers[key].apellidoPaterno} ${customers[key].apellidoMaterno}`,
              <Link to={`/customers/edit/${key}`}>Editar</Link>,
            ])
          }
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
