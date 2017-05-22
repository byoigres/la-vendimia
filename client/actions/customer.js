import { CALL_API } from '../middlewares/api';
import schemas from '../middlewares/schemas';
import * as constants from '../constants';

export function getCustomers() {
  return {
    [CALL_API]: {
      types: [
        constants.GET_CUSTOMERS_REQUEST,
        constants.GET_CUSTOMERS_SUCCESS,
        constants.GET_CUSTOMERS_FAILURE,
      ],
      endpoint: 'api/customer',
      method: 'GET',
      schema: schemas.customers,
    },
  };
}

export function setCustomers() {
  return {
    type: 'A',
  };
}
