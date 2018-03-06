
import React, { Component } from 'react';

import Cookies from 'js-cookie';


class Logout extends Component {
  componentDidMount() {
    const { history, logOut } = this.props;
    Cookies.remove('token');
    Cookies.remove('provider');
    logOut();
    history.push('/');
  }

  render() {
    return (
      <div>Log out</div>
    );
  }
}

export default Logout;
