
import * as UserActionTypes from '../actiontypes/user';

const initialState = {
  loggedIn: false,
  provider: ''
};

export default function User(state=initialState, action) {
  switch (action.type) {
  case UserActionTypes.LOG_IN:
    return {
      ...state,
      loggedIn: true,
      provider: action.provider
    };
  case UserActionTypes.LOG_OUT:
    return {
      ...state,
      loggedIn: false,
      provider: ''
    };
  default:
    return state;
  }
}
