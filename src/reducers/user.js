
import Cookies from 'js-cookie';

import * as UserActionTypes from '../actiontypes/user';

const initialState = {
  loggedIn: !!Cookies.get('token'),
  provider: Cookies.get('provider', '')
};

export default function User(state=initialState, action) {
  switch (action.type) {
  case UserActionTypes.LOG_IN:
    return {
      loggedIn: true,
      provider: action.provider
    };
  case UserActionTypes.LOG_OUT:
    return {
      loggedIn: false,
      provider: ''
    };
  default:
    return state;
  }
}
