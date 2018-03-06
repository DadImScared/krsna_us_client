
import React, { Component } from 'react';

import View from './View';


class MyAccount extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <View {...this.props} />
    );
  }
}

export default MyAccount;
