import React from 'react';
import { hot } from 'react-hot-loader/root';
import ConnectedPostList from '../containers/ConnectedPostList';
import ConnectedFilterList from '../containers/ConnectedFilterList';

const App = () => (
  <div>
    <h1>React/Redux blog app</h1>
    <div>
      <ConnectedFilterList />
    </div>
    <div>
      <ConnectedPostList />
    </div>
  </div>
);

export default hot(App);
