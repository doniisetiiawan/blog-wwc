import React from 'react';
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

export default App;
