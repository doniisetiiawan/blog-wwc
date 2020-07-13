import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../components/Loading';

const mapStateToProps = (state) => {
  const { loading } = state;

  const isLoading = Object.keys(loading).reduce(
    (result, requestName) => {
      if (result === true) return true;
      return loading[requestName] > 0;
    },
    false,
  );

  return { isLoading };
};

const ConnectedLoading = withRouter(
  connect(mapStateToProps)(Loading),
);

export default ConnectedLoading;
