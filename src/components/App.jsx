import React from 'react';
import { hot } from 'react-hot-loader/root';
import ConnectedPostList from '../containers/ConnectedPostList';
import ConnectedFilterList from '../containers/ConnectedFilterList';
import ConnectedLoading from '../containers/ConnectedLoading';
import ConnectedErrorMessage from '../containers/ConnectedErrorMessage';

const App = () => (
  <div>
    <h1>React/Redux blog app</h1>
    <div>
      <ConnectedFilterList />
    </div>
    <div>
      <ConnectedLoading />
    </div>
    <div>
      <ConnectedErrorMessage />
    </div>
    <div>
      <ConnectedPostList />
    </div>
  </div>
);

export default hot(App);
