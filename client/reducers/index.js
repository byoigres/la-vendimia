import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default function reducers() {
  return combineReducers({
    router: routerReducer,
  });
}
