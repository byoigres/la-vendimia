import * as constants from '../constants';

const initialState = {
  customer: null,
  item: null,
};

const hashes = (state = initialState, action) => {
  const { type, response } = action;

  if (
    type === constants.GET_CUSTOMER_HASH_SUCCESS ||
    type === constants.GET_ITEM_HASH_SUCCESS
  ) {
    const element = {};
    element[response.type] = response.hash;
    return Object.assign({}, state, element);
  }

  return state;
};

export default hashes;
