import { schema } from 'normalizr';

const customer = new schema.Entity('customer', { idAttribute: 'id' });
const customers = new schema.Array(customer);

const schemas = {
  customer,
  customers,
};

export default schemas;
