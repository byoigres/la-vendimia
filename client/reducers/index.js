import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import entities from './entities';

export default function reducers() {
  return combineReducers({
    router: routerReducer,
    entities,
  });
}
