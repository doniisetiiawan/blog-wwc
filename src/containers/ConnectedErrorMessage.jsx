import { connect } from 'react-redux';

import ErrorMessage from '../components/ErrorMessage';

const mapStateToProps = (state) => ({
  message: state.error && state.error.message,
});

const ConnectedErrorMessage = connect(mapStateToProps)(
  ErrorMessage,
);

export default ConnectedErrorMessage;
