
import React, { Component } from 'react';

import _ from 'lodash';

import { getUserInfo, changePassword } from '../../actions/user';
import handleFormState from '../handleFormState';
import View from './View';


class MyAccount extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      email: '',
      username: '',
      firstName: '',
      lastName: '',
      successMessage: false
    };
  }

  render() {
    const { successMessage, ...userInfo } = this.state;
    return (
      <View
        {...this.props}
        userInfo={{ ...userInfo }}
        success={successMessage}
        submitPasswordChange={this.submitPasswordChange}
      />
    );
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const { data: { email, username, first_name: firstName, last_name: lastName } } = await getUserInfo();
      this.setState({ email, username, firstName, lastName });
    }
    catch ({ response: { data } }) {
      this.props.history.push('/login/');
    }
  };

  submitPasswordChange = async (e) => {
    e.preventDefault();
    const { form: { oldPassword, password1, password2 } } = this.props;
    try {
      await changePassword({
        old_password: oldPassword,
        new_password1: password1,
        new_password2: password2
      });
      this.setState({ successMessage: true });
      setTimeout(() => this.setState({ successMessage: false }), 1500);
      this.props.clearFields();
      this.props.clearErrors();
    }
    catch ({ response: { data } }) {
      const errors = {};
      Object.keys(data).forEach((item) => {
        if (item.includes('new')) {
          errors[item.split('_')[1]] = typeof data[item] === 'string' ? data[item]:data[item].join(', ');
        }
        else {
          errors[_.camelCase(item)] = typeof data[item] === 'string' ? data[item]:data[item].join(', ');
        }
      });
      this.props.updateFormErrors(errors);
    }
  };
}

export default handleFormState(MyAccount);
