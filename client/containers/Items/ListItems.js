import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Header,
  Table,
} from 'components';
import { Link } from 'react-router-dom';
import { getItems } from 'actions';

class ListItems extends Component {
  componentWillMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        <Header
          text="Artículos Registrados"
          subtext={<Link to="/items/add">Agregar</Link>}
        />
        <Table
          columns={['Clave', 'Descripción', '']}
          data={
            Object.keys(items).map(key => [
              items[key].clave,
              items[key].descripcion,
              <Link to={`/items/edit/${key}`}>Editar</Link>,
            ])
          }
        />
      </div>
    );
  }
}

ListItems.propTypes = {
  items: propTypes.objectOf(
    propTypes.shape({
      descripcion: propTypes.string,
      precio: propTypes.number,
      modelo: propTypes.string,
      existencia: propTypes.number,
      rfc: propTypes.string,
    }),
  ).isRequired,
  getItems: propTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    entities: {
      items,
    },
  } = state;

  return {
    items,
  };
};

export default connect(mapStateToProps, {
  getItems,
})(ListItems);
