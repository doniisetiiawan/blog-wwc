import { createStore, compose } from 'redux';
import appReducer from '../reducers';

const enhancer = compose(
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
