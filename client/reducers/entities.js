const initialState = {
  customers: {},
  items: {},
  configurations: {},
};

const entities = (state = initialState, action) => {
  if (action.response && action.response.entities) {
    return Object.assign({}, state, action.response.entities);
  }

  return state;
};

export default entities;
