import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  TextInput,
  Form,
  FormGroup,
  FormActions,
  Button,
  Header,
} from 'components';
import {
  addItem,
  getItemHash,
  initializeAddItem,
  resetErrors,
} from 'actions';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  componentWillMount() {
    this.props.initializeAddItem();
    this.props.getItemHash();
    this.props.resetErrors();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isRegistered) {
      this.props.history.push('/items');
    }
  }

  add() {
    this.props.addItem(
      this.clave.getValue(),
      this.descripcion.getValue(),
      this.precio.getValue(),
      this.modelo.getValue(),
      this.existencia.getValue(),
    );
  }
  render() {
    const { messages, clave } = this.props;

    return (
      <div>
        <Header text="Registro de Artículo" />
        <Form>
          <FormGroup
            label="Clave"
            labelSpace={2}
            input={
              <TextInput
                value={clave}
                name="clave"
                disabled
                error={messages.clave}
                ref={(f) => { this.clave = f; }}
              />
            }
            inputSpace={1}
          />
          <FormGroup
            label="Descripción"
            labelSpace={2}
            input={
              <TextInput
                defaultValue={''}
                error={messages.descripcion}
                ref={(f) => { this.descripcion = f; }}
              />
            }
            inputSpace={3}
          />
          <FormGroup
            label="Precio"
            labelSpace={2}
            input={
              <TextInput
                defaultValue={''}
                error={messages.precio}
                ref={(f) => { this.precio = f; }}
              />
            }
            inputSpace={3}
          />
          <FormGroup
            label="Modelo"
            labelSpace={2}
            input={
              <TextInput
                defaultValue={''}
                error={messages.modelo}
                ref={(f) => { this.modelo = f; }}
              />
            }
            inputSpace={3}
          />
          <FormGroup
            label="Existencia"
            labelSpace={2}
            input={
              <TextInput
                defaultValue={''}
                error={messages.existencia}
                ref={(f) => { this.existencia = f; }}
              />
            }
            inputSpace={3}
          />
          <FormActions space={5}>
            <Button>
              <Link to="/items">Cancelar</Link>
            </Button>
            <Button onClick={this.add}>Guardar</Button>
          </FormActions>
        </Form>
      </div>
    );
  }
}

AddItem.propTypes = {
  messages: propTypes.objectOf(propTypes.string),
  clave: propTypes.string,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  getItemHash: propTypes.func.isRequired,
  addItem: propTypes.func.isRequired,
  initializeAddItem: propTypes.func.isRequired,
  resetErrors: propTypes.func.isRequired,
};

AddItem.defaultProps = {
  messages: {},
  clave: '',
};

const mapStateToProps = (state) => {
  const {
    errors: {
      messages,
    },
    hashes: {
      item: clave,
    },
    states: {
      item: {
        registered: isRegistered,
      },
    },
  } = state;

  return {
    messages,
    clave: clave || '',
    isRegistered,
  };
};

const connectedComponent = connect(mapStateToProps, {
  addItem,
  getItemHash,
  initializeAddItem,
  resetErrors,
})(AddItem);

export default withRouter(connectedComponent);
