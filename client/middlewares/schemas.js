import { schema } from 'normalizr';

const customer = new schema.Entity('customers', {}, { idAttribute: 'clave' });
const customers = new schema.Array(customer);
const configuration = new schema.Entity('configurations', {}, { idAttribute: 'id' });

const schemas = {
  customer,
  customers,
  configuration,
};

export default schemas;
