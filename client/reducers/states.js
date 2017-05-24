import * as constants from '../constants';

const initialState = {
  customer: {
    registered: false,
    updated: false,
  },
  item: {
    registered: false,
    updated: false,
  },
  configuration: {
    saved: false,
  },
};

const customers = (state = initialState, action) => {
  const { type } = action;

  // Customer
  if (type === constants.ADD_CUSTOMER_SUCCESS) {
    return Object.assign({}, state, {
      customer: {
        registered: true,
      },
    });
  }

  if (type === constants.UPDATE_CUSTOMER_SUCCESS) {
    return Object.assign({}, state, {
      customer: {
        updated: true,
      },
    });
  }

  // Items
  if (type === constants.ADD_ITEM_SUCCESS) {
    return Object.assign({}, state, {
      item: {
        registered: true,
      },
    });
  }

  if (type === constants.UPDATE_ITEM_SUCCESS) {
    return Object.assign({}, state, {
      item: {
        updated: true,
      },
    });
  }

  // Configuration
  if (
    type === constants.CREATE_CONFIGURATION_SUCCESS ||
    type === constants.UPDATE_CONFIGURATION_SUCCESS
  ) {
    return Object.assign({}, state, {
      configuration: {
        saved: true,
      },
    });
  }

  // Reset states
  if (
    type === constants.RESET_ADD_CUSTOMER_STATE ||
    type === constants.RESET_UPDATE_CUSTOMER_STATE ||
    type === constants.RESET_ADD_ITEM_STATE ||
    type === constants.RESET_UPDATE_ITEM_STATE ||
    type === constants.RESET_CONFIGURATION
  ) {
    return initialState;
  }

  return state;
};

export default customers;
