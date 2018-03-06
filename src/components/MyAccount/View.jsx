
import React from 'react';

import SelfProviderSettings from './SelfProviderSettings';


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
          <div>log out of google</div>
      }
    </div>
  </div>
);

export default View;
