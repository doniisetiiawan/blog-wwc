import PropTypes from 'prop-types';
import React from 'react';

const Post = ({ user, text }) => (
  <span>
    <b>{user}</b> - {text}
  </span>
);

export default Post;

Post.propTypes = {
  text: PropTypes.string,
  user: PropTypes.string,
};

Post.defaultProps = {
  text: '',
  user: '',
};
