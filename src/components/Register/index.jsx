
import React from 'react';

import axios from 'axios';

import { setLogin } from '../../cookieState';
import handleFormState from '../handleFormState';
import View from './View';

export default handleFormState(
  (props) => {
    const onSocialSuccess = (key, provider) => {
      setLogin(key, provider); // store token and provider in cookie for page refresh
      this.props.logIn(provider); // redux login for ui change
    };

    const registerUser = async () => {
      const { form: { email, password1, password2 }, handleErrorResponse } = props;
      try {
        const { data: { key } } = await axios.post(
          '/rest-auth/registration/',
          { email, password1, password2 },
          { headers: { contentType: 'application/json' } }
        );
        setLogin(key, 'self');
        this.props.history.push('/');
      }
      catch ({ response: { data } }) {
        handleErrorResponse(data);
      }
    };

    return (
      <View
        {...props}
        registerUser={registerUser}
        onSocialSuccess={onSocialSuccess}
      />
    );
  }
);
