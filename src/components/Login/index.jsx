
import React, { Component } from 'react';

import Cookies from 'js-cookie';
import axios from 'axios';

import handleFormState from '../handleFormState';
import View from './View';

class Login extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      shouldShow: false
    };
  }

  render() {
    return (
      <View
        {...this.props}
        onSocialSuccess={this.googleResponse}
        submitLogin={this.submitLogin}
      />
    );
  }

  setLogin = (token, provider) => {
    Cookies.set('token', token);
    Cookies.set('provider', provider);
    this.props.logIn(provider);
  };

  submitLogin = async (e) => {
    e.preventDefault();
    const { onSuccessCb, handleErrorResponse, form: { email, password } } = this.props;
    try {
      const { data: { key } } = await axios.post('/rest-auth/login/', { email, password });
      this.setLogin(key, 'self');
      this.props.history.push('/');
      onSuccessCb && onSuccessCb(key, 'self');
    }
    catch ({ response: { data } }) {
      handleErrorResponse(data);
    }
  };

  googleResponse = (key, provider) => {
    const { onSuccessCb } = this.props;
    this.setLogin(key, provider);
    onSuccessCb && onSuccessCb(key, provider);
  };
}

export default handleFormState(Login);
