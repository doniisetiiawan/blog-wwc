import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreatePost from '../components/CreatePost';
import { createPost } from '../actions';

const mapStateToProps = (state) => ({
  error: state.error && state.error.message,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ createPost }, dispatch);

const ConnectedCreatePost = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePost);

export default ConnectedCreatePost;
