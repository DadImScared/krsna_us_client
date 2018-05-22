
import React, { Component } from 'react';

import Cookies from 'js-cookie';
import axios from 'axios';

import handleFormState from '../handleFormState';
import View from './View';

const message = `
Email is not verified. Please 
`;

class Login extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      email: '',
      shouldShow: false
    };
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        message={message}
        onSocialSuccess={this.googleResponse}
        submitLogin={this.submitLogin}
      />
    );
  }

  pushRoute = () => {
    const { history, location: { state: { from: { pathname = '/' } = {} } = {} } } = this.props;
    history.push(pathname);
  };

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
      this.pushRoute();
      onSuccessCb && onSuccessCb(key, 'self');
    }
    catch ({ response: { data } }) {
      if (data.non_field_errors && data.non_field_errors[0] === 'E-mail is not verified.') {
        this.setState({ shouldShow: true, email });
      }
      handleErrorResponse(data);
    }
  };

  googleResponse = (key, provider) => {
    const { onSuccessCb } = this.props;
    this.setLogin(key, provider);
    this.pushRoute();
    onSuccessCb && onSuccessCb(key, provider);
  };
}

export default handleFormState(Login);
