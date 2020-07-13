/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createPost, createUser } from './actions';
import App from './components/App';
import configureStore from './store';

const store = configureStore();

console.log('initial state:', store.getState());

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root'),
);
