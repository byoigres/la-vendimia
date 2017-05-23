import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import entities from './entities';
import errors from './errors';
import hashes from './hashes';
import customers from './customers';

export default function reducers() {
  return combineReducers({
    router: routerReducer,
    entities,
    errors,
    hashes,
    customers,
  });
}
