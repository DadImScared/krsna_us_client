
import React, { Component } from 'react';

import _ from 'lodash';
import axios from 'axios';

import { setLogin } from '../../cookieState';
import View from './View';

export default class extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      form: {},
      formErrors: {}
    };
  }

  render() {
    return (
      <View
        {...this.state}
        {...this.props}
        updateForm={this.updateForm}
        registerUser={this.registerUser}
        onSocialSuccess={this.onSocialSuccess}
      />
    );
  }

  validateDebounce = _.debounce((props, state, id, updateFormErrors, validator) => {
    validator(props, state, id, updateFormErrors);
  }, 300);

  updateForm = ({ target: { value } }, id, validator) => {
    const newForm = { ...this.state.form };
    newForm[id] = value;
    this.setState({ form: newForm });
    if (validator) {
      this.validateDebounce(this.props, this.state, id, this.updateFormErrors, validator);
    }
  };

  updateFormErrors = (newErrors) => this.setState({ formErrors: newErrors });

  onSocialSuccess = (key, provider) => {
    setLogin(key, provider); // store token and provider in cookie for page refresh
    this.props.logIn(provider); // redux login for ui change
  };

  registerUser = async () => {
    const { form: { username, email, password, confirmPassword }, formErrors } = this.state;
    try {
      const { data: { key } } = await axios.post(
        '/rest-auth/register/',
        { username, email, password, confirmPassword },
        { headers: { contentType: 'application/json' } }
      );
      setLogin(key, 'self');
      this.props.history.push('/');
    }
    catch (e) {
      console.log(e.response);
    }
  }
}
