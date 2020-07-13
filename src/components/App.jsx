import React from 'react';
import { hot } from 'react-hot-loader/root';
import ConnectedLoading from '../containers/ConnectedLoading';
import ConnectedErrorMessage from '../containers/ConnectedErrorMessage';
import ConnectedHeader from '../containers/ConnectedHeader';
import ConnectedRouter from '../containers/ConnectedRouter';
import ConnectedNavigation from '../containers/ConnectedNavigation';

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
      <ConnectedNavigation />
    </div>
    <div>
      <ConnectedHeader />
    </div>
    <ConnectedRouter />
  </div>
);

export default hot(App);
