import { connect } from 'react-redux';

import Router from '../components/Router';

const mapStateToProps = (state) => {
  const { route } = state;
  return { route };
};

const ConnectedRouter = connect(mapStateToProps)(Router);

export default ConnectedRouter;
