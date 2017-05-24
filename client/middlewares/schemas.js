import { schema } from 'normalizr';

const customer = new schema.Entity('customers', {}, { idAttribute: 'clave' });
const customers = new schema.Array(customer);
const item = new schema.Entity('items', {}, { idAttribute: 'clave' });
const items = new schema.Array(item);
const configuration = new schema.Entity('configurations', {}, { idAttribute: 'id' });

const schemas = {
  customer,
  customers,
  item,
  items,
  configuration,
};

export default schemas;
