import * as constants from '../constants';

const initialState = {
  registered: false,
  updated: false,
};

const customers = (state = initialState, action) => {
  const { type } = action;

  if (type === constants.REGISTER_CUSTOMERS_SUCCESS) {
    return Object.assign({}, state, {
      registered: true,
    });
  }

  if (type === constants.UPDATE_CUSTOMER_SUCCESS) {
    return Object.assign({}, state, {
      updated: true,
    });
  }

  if (
    type === constants.RESET_CUSTOMER_REGISTRATION ||
    type === constants.RESET_CUSTOMER_UPDATE
  ) {
    return initialState;
  }

  return state;
};

export default customers;
