import { CALL_API } from '../middlewares/api';
import schemas from '../middlewares/schemas';
import * as constants from '../constants';

export function getConfiguration() {
  return {
    [CALL_API]: {
      types: [
        constants.GET_CONFIGURATION_REQUEST,
        constants.GET_CONFIGURATION_SUCCESS,
        constants.GET_CONFIGURATION_FAILURE,
      ],
      endpoint: 'api/configuration',
      method: 'GET',
      schema: schemas.configuration,
    },
  };
}

export function addConfiguration(financiamiento, enganche, plazo) {
  return {
    [CALL_API]: {
      types: [
        constants.CREATE_CONFIGURATION_REQUEST,
        constants.CREATE_CONFIGURATION_SUCCESS,
        constants.CREATE_CONFIGURATION_FAILURE,
      ],
      endpoint: 'api/configuration',
      method: 'PUT',
      body: {
        financiamiento,
        enganche,
        plazo,
      },
      schema: schemas.customer,
    },
  };
}

export function updateConfiguration(financiamiento, enganche, plazo) {
  return {
    [CALL_API]: {
      types: [
        constants.UPDATE_CONFIGURATION_REQUEST,
        constants.UPDATE_CONFIGURATION_SUCCESS,
        constants.UPDATE_CONFIGURATION_FAILURE,
      ],
      endpoint: 'api/configuration',
      method: 'POST',
      body: {
        financiamiento,
        enganche,
        plazo,
      },
      schema: schemas.customer,
    },
  };
}


export function initializeConfiguration() {
  return {
    type: constants.RESET_CONFIGURATION,
  };
}
