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
  getConfiguration,
} from 'actions';

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.configuration;
    console.log('this.state', this.state);
    console.log('this.props.configuration', this.props.configuration);
  }

  componentWillMount() {
    this.props.getConfiguration();
  }

  componentWillReceiveProps(newProps) {
    [
      'financiamiento',
      /* 'enganche',
      'plazo',*/
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
          {/*
          <FormGroup
            label="Enganche (%)"
            labelSpace={3}
            input={<TextInput />}
            inputSpace={1}
          />
          <FormGroup
            label="Plazo máximo"
            labelSpace={3}
            input={<TextInput />}
            inputSpace={1}
          />
          */}
          <FormActions space={4}>
            <Button>Cancelar</Button>
            <Button>Guardar</Button>
          </FormActions>
        </Form>
      </div>
    );
  }
}

Configuration.propTypes = {
  getConfiguration: propTypes.func.isRequired,
  messages: propTypes.objectOf(propTypes.string),
  configuration: propTypes.shape({
    id: propTypes.string,
    financiamiento: propTypes.number,
    enganche: propTypes.number,
    plazo: propTypes.number,
  }),
};

Configuration.defaultProps = {
  messages: {},
  configuration: {
    id: '',
    financiamiento: '',
    enganche: '',
    plazo: '',
  },
};

const mapStateToProps = (state) => {
  const {
    entities: {
      configurations,
    },
  } = state;

  let configuration = null;

  if (configurations && Object.keys(configurations).length === 1) {
    configuration = configurations[Object.keys(configurations)[0]];
  }

  return {
    configuration,
  };
};

export default connect(
  mapStateToProps,
  {
    getConfiguration,
  },
)(Configuration);
