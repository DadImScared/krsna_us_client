
import React from 'react';

import axios from 'axios';

import GoogleButton from './GoogleButton';
import FacebookButton from './FacebookButton';

export default ({ prefix = 'Sign up', onSuccessCb }) => {
  const done = (key, provider) => {
    onSuccessCb && onSuccessCb(key, provider);
  };

  const exchangeToken = async (access_token, provider) => {
    try {
      const { data: { key } } = await axios.post(`/rest-auth/${provider}/`, { access_token });
      done(key, provider);
    }
    catch (e) {
      console.log(e.response);
    }
  };

  const googleResponse = (response) => {
    const { accessToken } = response;
    exchangeToken(accessToken, 'google');
  };

  const facebookResponse = (response) => {
    const { accessToken } = response;
    exchangeToken(accessToken, 'facebook');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <GoogleButton prefix={prefix} onSuccess={googleResponse} onFailure={googleResponse} />
      <FacebookButton prefix={prefix} onSuccess={facebookResponse} />
    </div>
  );
};
