
import React from 'react';

import { GoogleLogout as Logout } from 'react-google-login';


const GoogleLogout = ({ history }) => (
  <Logout onLogoutSuccess={() => history.push('/logout/')}>
    Log out of google account
  </Logout>
);

export default GoogleLogout;
