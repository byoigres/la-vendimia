import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import api from './middlewares/api';
import reducers from './reducers';

const configureStore = (initialState, history) => {
  const historyMiddleware = routerMiddleware(history);

  const middlewaresCreateStore = compose(
    applyMiddleware(thunk, api),
    applyMiddleware(historyMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);

  return middlewaresCreateStore(
    reducers(initialState),
    initialState,
  );
};

export default configureStore;
