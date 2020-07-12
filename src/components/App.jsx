import React from 'react';
import { hot } from 'react-hot-loader/root';
import ConnectedPostList from '../containers/ConnectedPostList';
import ConnectedFilterList from '../containers/ConnectedFilterList';
import ConnectedLoading from '../containers/ConnectedLoading';
import ConnectedErrorMessage from '../containers/ConnectedErrorMessage';
import ConnectedRegistration from '../reducers/ConnectedRegistration';
import ConnectedCreatePost from '../containers/ConnectedCreatePost';

const App = () => (
  <div>
    <h1>React/Redux blog app</h1>
    <div>
      <ConnectedLoading />
    </div>
    <div>
      <ConnectedErrorMessage />
    </div>
    <div>
      <ConnectedRegistration />
    </div>
    <div>
      <ConnectedCreatePost />
    </div>
    <div>
      <ConnectedFilterList />
    </div>
    <div>
      <ConnectedPostList />
    </div>
  </div>
);

export default hot(App);
