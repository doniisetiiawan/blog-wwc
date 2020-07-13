import PropTypes from 'prop-types';
import React from 'react';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

const Router = ({ route }) => {
  switch (route) {
    case 'about':
      return <AboutPage />;

    default:
    case 'main':
      return <MainPage />;
  }
};

export default Router;

Router.propTypes = {
  route: PropTypes.string.isRequired,
};
