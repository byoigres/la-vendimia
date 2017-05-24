import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  TextInput,
  Form,
  FormGroup,
  FormActions,
  Button,
  Header,
} from 'components';
import {
  addConfiguration,
  updateConfiguration,
  getConfiguration,
  initializeConfiguration,
} from 'actions';

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.addOrUpdate = this.addOrUpdate.bind(this);
    this.state = {
      id: '',
      financiamiento: 0,
      enganche: 0,
      plazo: 0,
    };
  }

  componentWillMount() {
    this.state = Object.assign({}, this.state, this.props.configuration);
    this.props.initializeConfiguration();
    this.props.getConfiguration();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isSaved) {
      alert('Bien Hecho. La configuración ha sido registrada.');
    }

    [
      'financiamiento',
      'enganche',
      'plazo',
    ].forEach(item => (
      this.shouldUpdateStateFromNewProps(this.props, newProps, item)
    ));
  }

  shouldUpdateStateFromNewProps(props, newProps, field) {
    if (props.configuration[field] !== newProps.configuration[field]) {
      const state = {};
      state[field] = newProps.configuration[field];
      this.setState(() => (state));
    }
  }

  updateField(name, value) {
    const state = {};
    state[name] = value;
    this.setState(state);
  }

  addOrUpdate() {
    const { configuration } = this.props;

    if (Object.keys(configuration).filter(item => configuration[item] !== '').length) {
      this.props.updateConfiguration(
        this.financiamiento.getValue(),
        this.enganche.getValue(),
        this.plazo.getValue(),
      );
    } else {
      this.props.addConfiguration(
        this.financiamiento.getValue(),
        this.enganche.getValue(),
        this.plazo.getValue(),
      );
    }
  }

  render() {
    const {
      messages,
    } = this.props;

    return (
      <div>
        <Header text="Configuración General" />
        <Form>
          <FormGroup
            label="Tasa de financiamiento"
            labelSpace={3}
            input={
              <TextInput
                value={this.state.financiamiento}
                onChange={(e) => { this.updateField('financiamiento', e.target.value); }}
                error={messages.financiamiento}
                ref={(f) => { this.financiamiento = f; }}
              />
            }
            inputSpace={1}
          />
          
          <FormGroup
            label="Enganche (%)"
            labelSpace={3}
            input={
              <TextInput
                value={this.state.enganche}
                onChange={(e) => { this.updateField('enganche', e.target.value); }}
                error={messages.enganche}
                ref={(f) => { this.enganche = f; }}
              />
            }
            inputSpace={1}
          />
          <FormGroup
            label="Plazo máximo"
            labelSpace={3}
            input={
              <TextInput
                value={this.state.plazo}
                onChange={(e) => { this.updateField('plazo', e.target.value); }}
                error={messages.plazo}
                ref={(f) => { this.plazo = f; }}
              />
            }
            inputSpace={1}
          />
          <FormActions space={4}>
            <Button>Cancelar</Button>
            <Button onClick={this.addOrUpdate}>Guardar</Button>
          </FormActions>
        </Form>
      </div>
    );
  }
}

Configuration.propTypes = {
  addConfiguration: propTypes.func.isRequired,
  updateConfiguration: propTypes.func.isRequired,
  getConfiguration: propTypes.func.isRequired,
  initializeConfiguration: propTypes.func.isRequired,
  messages: propTypes.objectOf(propTypes.string),
  configuration: propTypes.shape({
    id: propTypes.string,
    financiamiento: propTypes.number,
    enganche: propTypes.number,
    plazo: propTypes.number,
  }).isRequired,
};

Configuration.defaultProps = {
  messages: {},
  configuration: {
    id: '',
    financiamiento: 0,
    enganche: 0,
    plazo: 0,
  },
};

const mapStateToProps = (state) => {
  const {
    errors: {
      messages,
    },
    entities: {
      configurations,
    },
    states: {
      configuration: {
        saved: isSaved,
      },
    },
  } = state;

  let configuration = {};

  if (configurations && Object.keys(configurations).length === 1) {
    configuration = configurations[Object.keys(configurations)[0]];
  }

  return {
    isSaved,
    messages,
    configuration,
  };
};

export default connect(mapStateToProps, {
  addConfiguration,
  updateConfiguration,
  getConfiguration,
  initializeConfiguration,
})(Configuration);
