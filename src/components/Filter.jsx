import PropTypes from 'prop-types';
import React from 'react';

const Filter = ({ name, onClick }) => (
  <button type="button" onClick={onClick}>
    {name}
  </button>
);

export default Filter;

Filter.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

Filter.defaultProps = {
  name: '',
  onClick: (f) => f,
};
