
import React,{ Component } from 'react';

import axios from 'axios';

import { setLogin } from '../../cookieState';
import handleFormState from '../handleFormState';
import View from './View';

const message = `
Thank you for registering. Please confirm your email.
If you do not see it please 
`;

class Register extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      shouldShow: false,
      email: ''
    };
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        successMessage={message}
        registerUser={this.registerUser}
        onSocialSuccess={this.onSocialSuccess}
      />
    );
  }

  onSocialSuccess = (key, provider) => {
    setLogin(key, provider); // store token and provider in cookie for page refresh
    this.props.logIn(provider); // redux login for ui change
  };

  registerUser = async (e) => {
    e.preventDefault();
    const { form: { email, password1, password2 }, handleErrorResponse, clearFields, clearErrors } = this.props;
    try {
      await axios.post(
        '/rest-auth/registration/',
        { email, password1, password2 },
        { headers: { contentType: 'application/json' } }
      );
      this.setState({ shouldShow: true, email });
      clearFields();
      clearErrors();
    }
    catch ({ response: { data } }) {
      handleErrorResponse(data);
    }
  };

}

export default handleFormState(Register);
