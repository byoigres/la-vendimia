import { CALL_API } from '../middlewares/api';
import schemas from '../middlewares/schemas';
import * as constants from '../constants';

export function getItems() {
  return {
    [CALL_API]: {
      types: [
        constants.GET_ITEMS_REQUEST,
        constants.GET_ITEMS_SUCCESS,
        constants.GET_ITEMS_FAILURE,
      ],
      endpoint: 'api/item',
      method: 'GET',
      schema: schemas.items,
    },
  };
}

export function getItem(clave) {
  return {
    [CALL_API]: {
      types: [
        constants.GET_ITEM_BY_CLAVE_REQUEST,
        constants.GET_ITEM_BY_CLAVE_SUCCESS,
        constants.GET_ITEM_BY_CLAVE_FAILURE,
      ],
      endpoint: `api/item/${clave}`,
      method: 'GET',
      schema: schemas.item,
    },
  };
}

export function addItem(clave, descripcion, precio, modelo, existencia) {
  return {
    [CALL_API]: {
      types: [
        constants.ADD_ITEM_REQUEST,
        constants.ADD_ITEM_SUCCESS,
        constants.ADD_ITEM_FAILURE,
      ],
      endpoint: 'api/item',
      method: 'PUT',
      body: {
        clave,
        descripcion,
        precio,
        modelo,
        existencia,
      },
      schema: schemas.item,
    },
  };
}

export function updateItem(clave, descripcion, precio, modelo, existencia) {
  return {
    [CALL_API]: {
      types: [
        constants.UPDATE_ITEM_REQUEST,
        constants.UPDATE_ITEM_SUCCESS,
        constants.UPDATE_ITEM_FAILURE,
      ],
      endpoint: 'api/item',
      method: 'POST',
      body: {
        clave,
        descripcion,
        precio,
        modelo,
        existencia,
      },
      schema: schemas.item,
    },
  };
}

export function initializeAddItem() {
  return {
    type: constants.RESET_ADD_ITEM_STATE,
  };
}

export function initializeEditItem() {
  return {
    type: constants.RESET_UPDATE_ITEM_STATE,
  };
}

export function getItemHash() {
  return {
    [CALL_API]: {
      types: [
        constants.GET_ITEM_HASH_REQUEST,
        constants.GET_ITEM_HASH_SUCCESS,
        constants.GET_ITEM_HASH_FAILURE,
      ],
      endpoint: 'api/item/hash',
      method: 'GET',
      schema: schemas.hash,
    },
  };
}
