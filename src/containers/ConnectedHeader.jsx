import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = (state) => ({
  session: state.session,
});

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;
