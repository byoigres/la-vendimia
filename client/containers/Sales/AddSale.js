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
  Table,
} from 'components';


class AddSale extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header text="Registro de Venta" />
        <div>
          <Form>
            <FormGroup
              label="Cliente"
              labelSpace={1}
              input={
                <div>
                  <TextInput
                    ref={(f) => { this.clave = f; }}
                  />
                </div>
              }
              inputSpace={4}
            />
          </Form>
          <div>RFC</div>
        </div>
        <Table
          columns={['Descripción', 'Modelo', 'Cantidad', 'Precio', 'Importe']}
          data={[
            ['Mesa', 'RJ25D', <TextInput defaultValue={1} />, 5000, 5000],
            ['Mesa', 'RJ25D', <TextInput defaultValue={1} />, 5000, 5000],
            ['Mesa', 'RJ25D', <TextInput defaultValue={1} />, 5000, 5000],
            ['Mesa', 'RJ25D', <TextInput defaultValue={1} />, 5000, 5000],
            ['Mesa', 'RJ25D', <TextInput defaultValue={1} />, 5000, 5000],
            ['Mesa', 'RJ25D', <TextInput defaultValue={1} />, 5000, 5000],
          ]}
        />
      </div>
    );
  }
}

AddSale.propTypes = {};

AddSale.defaultProps = {};

const mapStateToProps = state => state;

const connectedComponent = connect(mapStateToProps, {})(AddSale);

export default withRouter(connectedComponent);
