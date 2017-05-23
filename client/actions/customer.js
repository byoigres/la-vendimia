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

export function addCustomer(clave, nombre, apellidoPaterno, apellidoMaterno, rfc) {
  return {
    [CALL_API]: {
      types: [
        constants.REGISTER_CUSTOMERS_REQUEST,
        constants.REGISTER_CUSTOMERS_SUCCESS,
        constants.REGISTER_CUSTOMERS_FAILURE,
      ],
      endpoint: 'api/customer',
      method: 'POST',
      body: {
        clave,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        rfc,
      },
      schema: schemas.customer,
    },
  };
}

export function initializeAddCustomer() {
  return {
    type: constants.RESET_CUSTOMER_REGISTRATION,
  };
}


export function getHash() {
  return {
    [CALL_API]: {
      types: [
        constants.GET_CUSTOMER_HASH_REQUEST,
        constants.GET_CUSTOMER_HASH_SUCCESS,
        constants.GET_CUSTOMER_HASH_FAILURE,
      ],
      endpoint: 'api/customer/hash',
      method: 'GET',
      schema: schemas.hash,
    },
  };
}
