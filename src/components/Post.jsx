import PropTypes from 'prop-types';
import React from 'react';
import User from './User';
import Timestamp from './Timestamp';

const Post = ({
  user, title, text, created, updated,
}) => (
  <span>
    <b>{title}</b>: {text}
    <i>
      {' ~ '}
      <User {...user} />
    </i>
    <br />
    (Created at: <Timestamp data={created} />, Updated at:{' '}
    <Timestamp data={updated} />)
  </span>
);

export default Post;

Post.propTypes = {
  created: PropTypes.number,
  text: PropTypes.string,
  title: PropTypes.string,
  updated: PropTypes.number,
  user: PropTypes.objectOf(PropTypes.string),
};

Post.defaultProps = {
  created: 0,
  text: '',
  title: '',
  updated: 0,
  user: {},
};
