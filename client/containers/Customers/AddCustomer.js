import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  TextInput,
  Form,
  FormGroup,
  FormActions,
  Button,
} from 'components';

const AddCustomer = () => (
  <div>
    <h1>AddCustomer</h1>
    <Form>
      <FormGroup
        label="Clave"
        labelSpace={2}
        input={<TextInput />}
        inputSpace={1}
      />
      <FormGroup
        label="Nombre"
        labelSpace={2}
        input={<TextInput />}
        inputSpace={3}
      />
      <FormGroup
        label="Apellido Paterno"
        labelSpace={2}
        input={<TextInput />}
        inputSpace={3}
      />
      <FormGroup
        label="Apellido Materno"
        labelSpace={2}
        input={<TextInput />}
        inputSpace={3}
      />
      <FormGroup
        label="RFC"
        labelSpace={2}
        input={<TextInput />}
        inputSpace={3}
      />
      <FormActions space={5}>
        <Button>
          <Link to="/customers">Cancelar</Link>
        </Button>
        <Button>Guardar</Button>
      </FormActions>
    </Form>
  </div>
);

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {},
)(AddCustomer);
