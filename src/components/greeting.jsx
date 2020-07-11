import PropTypes from 'prop-types';
import React from 'react';

export default function Greeting(props) {
  const { name } = props;
  const uppercaseName = name.toUpperCase();
  return <h1>hello {uppercaseName}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string,
};

Greeting.defaultProps = {
  name: '',
};
