import { CALL_API } from '../middlewares/api';
import { Schemas } from '../middlewares/schemas';
import * as constants from '../constants';

export function getCustomers() {
  return {
    [CALL_API]: {
      types: [
        constants.GET_LANGUAGES_REQUEST,
        constants.GET_LANGUAGES_SUCCESS,
        constants.GET_LANGUAGES_FAILURE,
      ],
      endpoint: 'api/customer',
      method: 'GET',
      schema: Schemas.CUSTOMER,
    },
  };
}
