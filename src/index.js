/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createPost, createUser } from './actions';
import App from './components/App';
import configureStore from './store';

const store = configureStore();
const initialState = store.getState();

if (
  !initialState.users
  || initialState.users.length === 0
) {
  // create users
  store.dispatch(createUser('dan', 'Daniel Bugl'));
  store.dispatch(createUser('max', 'Max Mustermann'));
}

if (
  !initialState.posts
  || initialState.posts.length === 0
) {
  // create posts
  store.dispatch(
    createPost('dan', {
      title: 'First post',
      text: 'Hello world! This is the first blog post.',
      category: 'welcome',
    }),
  );
  store.dispatch(
    createPost('max', {
      title: 'Another test',
      text: 'This is another test blog post.',
      category: 'test',
    }),
  );
}

console.log('initial state:', store.getState());
store.subscribe(() => console.log('state changed:', store.getState()));

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root'),
);
