import React from 'react';

import ConnectedRegistration from '../containers/ConnectedRegistration';
import ConnectedCreatePost from '../containers/ConnectedCreatePost';
import ConnectedLogin from '../containers/ConnectedLogin';
import User from './User';

const Header = ({ session }) => (
  <div>
    {!session && (
      <div>
        <ConnectedRegistration />
      </div>
    )}
    {!session && (
      <div>
        <ConnectedLogin />
      </div>
    )}
    {session && (
      <div>
        <b>Logged in as:</b> <User {...session} />
      </div>
    )}
    {session && (
      <div>
        <ConnectedCreatePost />
      </div>
    )}
  </div>
);

export default Header;
