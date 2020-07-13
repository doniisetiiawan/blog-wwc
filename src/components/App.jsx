import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ConnectedLoading from '../containers/ConnectedLoading';
import ConnectedErrorMessage from '../containers/ConnectedErrorMessage';
import ConnectedHeader from '../containers/ConnectedHeader';
import ConnectedNavigation from '../containers/ConnectedNavigation';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

const App = () => (
  <Router>
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
      <Route exact path="/" component={MainPage} />
      <Route path="/about" component={AboutPage} />
    </div>
  </Router>
);

export default hot(App);
