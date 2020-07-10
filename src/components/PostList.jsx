import PropTypes from 'prop-types';
import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => (
  <ul>
    {posts.map((post, i) => (
      <li key={i.toString()}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

export default PostList;

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

PostList.defaultProps = {
  posts: [],
};
