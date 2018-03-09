

import React, { Component } from 'react';

import { verifyEmail, reSendEmailConfirm } from '../../actions/user';
import handleFormState from '../handleFormState';
import View from './View';


class VerifyEmail extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      email: '',
      showErrorArea: false,
      errorMessage: '',
      emailSent: false
    };
  }

  render() {
    return (
      <View
        {...this.state}
        {...this.props}
        sendEmail={this.sendEmail}
      />
    );
  }

  async componentDidMount() {
    const { match: { params: { key } }, history: { push } } = this.props;
    try {
      await verifyEmail(key);
      push('/login/');
    }
    catch ({ response: { data } } ) {
      this.setState({ showErrorArea: true });
    }
  }

  sendEmail = async () => {
    const { form: { email }, handleErrorResponse, clearErrors } = this.props;
    try {
      await reSendEmailConfirm(email);
      this.setState({ emailSent: true, email });
      clearErrors();
    }
    catch ({ response: { data } }) {
      handleErrorResponse(data);
    }
  };
}

export default handleFormState(VerifyEmail);
