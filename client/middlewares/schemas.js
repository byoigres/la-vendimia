import { schema } from 'normalizr';

const customer = new schema.Entity('customers', {}, { idAttribute: 'clave' });
const customers = new schema.Array(customer);

const schemas = {
  customer,
  customers,
};

export default schemas;
