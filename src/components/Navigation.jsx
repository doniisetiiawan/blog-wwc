import PropTypes from 'prop-types';
import React from 'react';

const isClickable = (route, currentRoute) => (route === currentRoute);

const Navigation = ({ navigate, route }) => (
  <div>
    <button
      type="button"
      disabled={isClickable('main', route)}
      onClick={() => navigate('main')}
    >
      main
    </button>
    {' - '}
    <button
      type="button"
      disabled={isClickable('about', route)}
      onClick={() => navigate('about')}
    >
      about
    </button>
  </div>
);

export default Navigation;

Navigation.propTypes = {
  navigate: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
