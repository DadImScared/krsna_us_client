
import React,{ Component } from 'react';

import axios from 'axios';

import { setLogin } from '../../cookieState';
import handleFormState from '../handleFormState';
import { reSendEmailConfirm } from '../../actions/user';
import View from './View';

class Register extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      shouldShowMessage: false
    };
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
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
    const { form: { email, password1, password2 }, handleErrorResponse } = this.props;
    try {
      const { data: { key } } = await axios.post(
        '/rest-auth/registration/',
        { email, password1, password2 },
        { headers: { contentType: 'application/json' } }
      );
      // on success verification email is sent
      // here we need to show that and also provide dialog to re send the confirmation
      // {"detail":"Verification e-mail sent."} example success message
      this.setState({ shouldShowMessage: true });
      setLogin(key, 'self');
      this.props.history.push('/');
    }
    catch ({ response: { data } }) {
      handleErrorResponse(data);
    }
  };

}

export default handleFormState(Register);
