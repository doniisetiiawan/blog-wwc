import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navigation from '../components/Navigation';
import { navigate } from '../actions';

const mapStateToProps = (state) => {
  const { route } = state;
  return { route };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ navigate }, dispatch);

const ConnectedNavigation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);

export default ConnectedNavigation;
