import PropTypes from 'prop-types';
import React from 'react';

const Timestamp = ({ data }) => {
  const d = new Date(data);
  return <span>{d.toUTCString()}</span>;
};

export default Timestamp;

Timestamp.propTypes = {
  data: PropTypes.number,
};

Timestamp.defaultProps = {
  data: 0,
};
