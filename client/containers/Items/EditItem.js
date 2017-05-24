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
  getItem,
  updateItem,
  initializeEditItem,
  resetErrors,
} from 'actions';

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      clave: '',
      descripcion: '',
      precio: '',
      modelo: '',
      existencia: '',
    };
  }

  componentWillMount() {
    const {
      match: {
        params: {
          clave,
        },
      },
    } = this.props;

    this.state = Object.assign({}, this.state, this.props.item);
    this.props.getItem(clave);
    this.props.initializeEditItem();
    this.props.resetErrors();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isUpdated) {
      this.props.history.push('/items');
    }

    [
      'descripcion',
      'precio',
      'modelo',
      'existencia',
    ].forEach(item => (
      this.shouldUpdateStateFromNewProps(this.props, newProps, item)
    ));
  }

  shouldUpdateStateFromNewProps(props, newProps, field) {
    if (props.item[field] !== newProps.item[field]) {
      const state = {};
      state[field] = newProps.item[field];
      this.setState(() => (state));
    }
  }

  update() {
    this.props.updateItem(
      this.clave.getValue(),
      this.descripcion.getValue(),
      this.precio.getValue(),
      this.modelo.getValue(),
      this.existencia.getValue(),
    );
  }

  updateField(name, value) {
    const state = {};
    state[name] = value;
    this.setState(state);
  }

  render() {
    const {
      match: {
        params: {
          clave,
        },
      },
      messages,
    } = this.props;

    return (
      <div>
        <Header text="Editar Artículo" />
        <Form>
          <FormGroup
            label="Clave"
            labelSpace={2}
            input={
              <TextInput
                defaultValue={clave}
                disabled
                maxLength={6}
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
                value={this.state.descripcion}
                maxLength={80}
                onChange={(e) => { this.updateField('descripcion', e.target.value); }}
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
                value={this.state.precio}
                maxLength={80}
                onChange={(e) => { this.updateField('precio', e.target.value); }}
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
                value={this.state.modelo}
                maxLength={80}
                onChange={(e) => { this.updateField('modelo', e.target.value); }}
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
                value={this.state.existencia}
                maxLength={13}
                onChange={(e) => { this.updateField('existencia', e.target.value); }}
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
            <Button onClick={this.update}>Guardar</Button>
          </FormActions>
        </Form>
      </div>
    );
  }
}

EditItem.propTypes = {
  messages: propTypes.objectOf(propTypes.string),
  item: propTypes.shape({
    clave: propTypes.string,
    descripcion: propTypes.string,
    precio: propTypes.number,
    modelo: propTypes.string,
    existencia: propTypes.number,
  }),
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  match: propTypes.shape({
    params: propTypes.shape({
      clave: propTypes.string.isRequired,
    }),
  }).isRequired,
  getItem: propTypes.func.isRequired,
  updateItem: propTypes.func.isRequired,
  initializeEditItem: propTypes.func.isRequired,
  resetErrors: propTypes.func.isRequired,
};

EditItem.defaultProps = {
  messages: {},
  clave: '',
  item: {
    clave: '',
    descripcion: '',
    precio: 0,
    modelo: '',
    existencia: 0,
  },
};

const mapStateToProps = (state, props) => {
  const {
    errors: {
      messages,
    },
    entities: {
      items: {
        [props.match.params.clave]: item,
      },
    },
    states: {
      item: {
        updated: isUpdated,
      },
    },
  } = state;

  return {
    messages,
    item,
    isUpdated,
  };
};

const connectedComponent = connect(mapStateToProps, {
  getItem,
  updateItem,
  initializeEditItem,
  resetErrors,
})(EditItem);

export default withRouter(connectedComponent);
