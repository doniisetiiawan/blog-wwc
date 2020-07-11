import PropTypes from 'prop-types';
import React from 'react';

const User = ({ username, realname }) => (
  <span>
    @{username} ({realname})
  </span>
);

export default User;

User.propTypes = {
  realname: PropTypes.string,
  username: PropTypes.string,
};

User.defaultProps = {
  realname: '',
  username: '',
};
