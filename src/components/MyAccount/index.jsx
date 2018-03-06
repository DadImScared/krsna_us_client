
import React, { Component } from 'react';

import { getUserInfo } from '../../actions/user';
import View from './View';


class MyAccount extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      email: '',
      username: '',
      firstName: '',
      lastName: ''
    };
  }

  render() {
    return (
      <View {...this.props} userInfo={{ ...this.state }} />
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
      // this.props.history.push('/login/');
    }
  }
}

export default MyAccount;
