import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'components';
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
      </div>
    );
  }
}

Customers.propTypes = {
  getCustomers: propTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    entities: {
      customers,
    },
  } = state;

  return {
    customers,
  };
};

export default connect(
  mapStateToProps,
  {
    getCustomers,
  },
)(Customers);
