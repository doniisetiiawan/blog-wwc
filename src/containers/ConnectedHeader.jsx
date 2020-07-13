import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';

const mapStateToProps = (state) => ({
  session: state.session,
});

const ConnectedHeader = withRouter(connect(mapStateToProps)(Header));

export default ConnectedHeader;
