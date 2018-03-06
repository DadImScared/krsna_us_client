
import React from 'react';

import SelfProviderSettings from './SelfProviderSettings';


const View = ({ userInfo, provider }) => (
  <div>
    <div>
      {
        provider === 'self' ?
          <SelfProviderSettings
            userInfo={userInfo}
          />
          :
          <div>log out of google</div>
      }
    </div>
  </div>
);

export default View;
