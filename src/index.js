/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { createPost } from './actions';
import appReducer from './reducers';
import ConnectedPostList from './containers/ConnectedPostList';

const store = createStore(appReducer);

store.dispatch(createPost('dan', 'hello world'));
setTimeout(
  () => store.dispatch(createPost('des', 'hi!')),
  2000,
);

ReactDOM.render(
  <div>
    <ConnectedPostList store={store} />
  </div>,
  document.getElementById('root'),
);
