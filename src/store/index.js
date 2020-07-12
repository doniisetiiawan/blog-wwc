import { createStore, compose } from 'redux';
import appReducer from '../reducers';
import middleware from './middleware';

const enhancer = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function configureStore(initialState) {
  const store = createStore(
    appReducer,
    initialState,
    enhancer,
  );

  return store;
}
