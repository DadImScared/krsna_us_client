
import React from 'react';

import SelfProviderSettings from './SelfProviderSettings';
import GoogleLogout from './GoogleLogout';


const View = ({ userInfo, provider, ...other }) => (
  <div>
    <div>
      {
        provider === 'self' ?
          <SelfProviderSettings
            userInfo={userInfo}
            {...other}
          />
          :
          <div style={{ textAlign: 'center' }}>
            <GoogleLogout {...other} />
          </div>
      }
    </div>
  </div>
);

export default View;
