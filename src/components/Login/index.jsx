
import React, { Component } from 'react';

import Cookies from 'js-cookie';
import axios from 'axios';

import View from './View';

export default class extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      errorMessage: ''
    };
  }

  render() {
    return (
      <View
        {...this.state}
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

  submitLogin = () => {
    const { onSuccessCb } = this.props;
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');

    try {
      const { data: { key } } = axios.post('/rest-auth/login/', { username, password });
      this.setLogin(key, 'self');
      onSuccessCb && onSuccessCb(key, 'self');
    }
    catch (e) {
      console.log(e);
    }
  };

  googleResponse = (key, provider) => {
    const { onSuccessCb } = this.props;
    this.setLogin(key, provider);
    onSuccessCb && onSuccessCb(key, provider);
  };
}
