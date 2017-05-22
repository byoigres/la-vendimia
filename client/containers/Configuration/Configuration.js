import React from 'react';
import {
  TextInput,
  Form,
  FormGroup,
  FormActions,
  Button,
} from 'components';

const Configuration = () => (
  <div>
    <h1>Configuración General</h1>
    <Form>
      <FormGroup
        label="Tasa de financiamiento"
        labelSpace={3}
        input={<TextInput />}
        inputSpace={1}
      />
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
      <FormActions space={4}>
        <Button>Cancelar</Button>
        <Button>Guardar</Button>
      </FormActions>
    </Form>
  </div>
);

export default Configuration;
