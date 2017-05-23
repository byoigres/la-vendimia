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
  getCustomer,
  updateCustomer,
  initializeEditCustomer,
  resetErrors,
} from 'actions';

class EditCustomer extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = this.props.configuration;
  }

  componentWillMount() {
    const {
      match: {
        params: {
          clave,
        },
      },
    } = this.props;
    this.props.getCustomer(clave);
    this.props.initializeEditCustomer();
    this.props.resetErrors();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isUpdated) {
      this.props.history.push('/customers');
    }

    [
      'nombre',
      'apellidoPaterno',
      'apellidoMaterno',
      'rfc',
    ].forEach(item => (
      this.shouldUpdateStateFromNewProps(this.props, newProps, item)
    ));
  }

  shouldUpdateStateFromNewProps(props, newProps, field) {
    if (props.customer[field] !== newProps.customer[field]) {
      const state = {};
      state[field] = newProps.customer[field];
      this.setState(() => (state));
    }
  }

  update() {
    this.props.updateCustomer(
      this.clave.getValue(),
      this.nombre.getValue(),
      this.apellidoPaterno.getValue(),
      this.apellidoMaterno.getValue(),
      this.rfc.getValue(),
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
        <Header text="Editar Cliente" />
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
            label="Nombre"
            labelSpace={2}
            input={
              <TextInput
                value={this.state.nombre}
                maxLength={80}
                onChange={(e) => { this.updateField('nombre', e.target.value); }}
                error={messages.nombre}
                ref={(f) => { this.nombre = f; }}
              />
            }
            inputSpace={3}
          />
          <FormGroup
            label="Apellido Paterno"
            labelSpace={2}
            input={
              <TextInput
                value={this.state.apellidoPaterno}
                maxLength={80}
                onChange={(e) => { this.updateField('apellidoPaterno', e.target.value); }}
                error={messages['apellido-paterno']}
                ref={(f) => { this.apellidoPaterno = f; }}
              />
            }
            inputSpace={3}
          />
          <FormGroup
            label="Apellido Materno"
            labelSpace={2}
            input={
              <TextInput
                value={this.state.apellidoMaterno}
                maxLength={80}
                onChange={(e) => { this.updateField('apellidoMaterno', e.target.value); }}
                error={messages['apellido-materno']}
                ref={(f) => { this.apellidoMaterno = f; }}
              />
            }
            inputSpace={3}
          />
          <FormGroup
            label="RFC"
            labelSpace={2}
            input={
              <TextInput
                value={this.state.rfc}
                maxLength={13}
                onChange={(e) => { this.updateField('rfc', e.target.value); }}
                error={messages.rfc}
                ref={(f) => { this.rfc = f; }}
              />
            }
            inputSpace={3}
          />
          <FormActions space={5}>
            <Button>
              <Link to="/customers">Cancelar</Link>
            </Button>
            <Button onClick={this.update}>Guardar</Button>
          </FormActions>
        </Form>
      </div>
    );
  }
}

EditCustomer.propTypes = {
  messages: propTypes.objectOf(propTypes.string),
  customer: propTypes.shape({
    clave: propTypes.string,
    nombre: propTypes.string,
    apellidoPaterno: propTypes.string,
    apellidoMaterno: propTypes.string,
    rfc: propTypes.string,
  }),
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  match: propTypes.shape({
    params: propTypes.shape({
      clave: propTypes.string.isRequired,
    }),
  }).isRequired,
  getCustomer: propTypes.func.isRequired,
  updateCustomer: propTypes.func.isRequired,
  initializeEditCustomer: propTypes.func.isRequired,
  resetErrors: propTypes.func.isRequired,
};

EditCustomer.defaultProps = {
  messages: {},
  clave: '',
  customer: {
    clave: '',
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    rfc: '',
  },
};

const mapStateToProps = (state, props) => {
  const {
    errors: {
      messages,
    },
    entities: {
      customers: {
        [props.match.params.clave]: customer,
      },
    },
    customers: {
      updated: isUpdated,
    },
  } = state;

  return {
    messages,
    customer,
    isUpdated,
  };
};

export default withRouter(connect(
  mapStateToProps,
  {
    getCustomer,
    updateCustomer,
    initializeEditCustomer,
    resetErrors,
  },
)(EditCustomer));
