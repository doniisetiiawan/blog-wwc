import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Registration from '../components/Registration';
import { createUser } from '../actions';

const mapStateToProps = (state) => ({
  error: state.error && state.error.message,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ createUser }, dispatch);

const ConnectedRegistration = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);

export default ConnectedRegistration;
