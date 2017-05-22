import { schema } from 'normalizr';

const customer = new schema.Entity('customers', {}, { idAttribute: 'id' });
const customers = new schema.Array(customer);

const schemas = {
  customer,
  customers,
};

export default schemas;
