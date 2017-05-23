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
} from 'components';
import {
  addCustomer,
  getHash,
  initializeAddCustomer,
  resetErrors,
} from 'actions';

class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  componentWillMount() {
    this.props.initializeAddCustomer();
    this.props.getHash();
    this.props.resetErrors();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isRegistered) {
      this.props.history.push('/customers');
    }
  }

  add() {
    this.props.addCustomer(
      this.clave.getValue(),
      this.nombre.getValue(),
      this.apellidoPaterno.getValue(),
      this.apellidoMaterno.getValue(),
      this.rfc.getValue(),
    );
  }
  render() {
    const { messages, clave } = this.props;

    return (
      <div>
        <h1>AddCustomer</h1>
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
            label="Nombre"
            labelSpace={2}
            input={
              <TextInput
                defaultValue={''}
                name="name"
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
                defaultValue={''}
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
                defaultValue={''}
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
                defaultValue={''}
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
            <Button onClick={this.add}>Guardar</Button>
          </FormActions>
        </Form>
      </div>
    );
  }
}

AddCustomer.propTypes = {
  messages: propTypes.objectOf(propTypes.string),
  clave: propTypes.string,
  // isRegistered: propTypes.boolean,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  getHash: propTypes.func.isRequired,
  addCustomer: propTypes.func.isRequired,
  initializeAddCustomer: propTypes.func.isRequired,
  resetErrors: propTypes.func.isRequired,
};

AddCustomer.defaultProps = {
  messages: {},
  clave: '',
  // message: null,
};

const mapStateToProps = (state) => {
  const {
    errors: {
      // message,
      messages,
    },
    hashes: {
      customer: clave,
    },
    customers: {
      registered: isRegistered,
    },
  } = state;

  return {
    // message,
    messages,
    clave: clave || '',
    isRegistered,
  };
};

export default withRouter(connect(
  mapStateToProps,
  {
    addCustomer,
    getHash,
    initializeAddCustomer,
    resetErrors,
  },
)(AddCustomer));
