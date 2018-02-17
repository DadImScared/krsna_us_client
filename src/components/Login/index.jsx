
import React from 'react';

import Cookies from 'js-cookie';
import axios from 'axios';

import handleFormState from '../handleFormState';
import View from './View';

const Login = (props) => {
  const setLogin = (token, provider) => {
    Cookies.set('token', token);
    Cookies.set('provider', provider);
    props.logIn(provider);
  };

  const submitLogin = async () => {
    const { onSuccessCb, handleErrorResponse, form: { email, password } } = props;
    try {
      const { data: { key } } = await axios.post('/rest-auth/login/', { email, password });
      setLogin(key, 'self');
      props.history.push('/');
      onSuccessCb && onSuccessCb(key, 'self');
    }
    catch ({ response: { data } }) {
      handleErrorResponse(data);
    }
  };

  const googleResponse = (key, provider) => {
    const { onSuccessCb } = props;
    setLogin(key, provider);
    onSuccessCb && onSuccessCb(key, provider);
  };

  return (
    <View
      {...props}
      onSocialSuccess={googleResponse}
      submitLogin={submitLogin}
    />
  );
};

export default handleFormState(
  Login
);
