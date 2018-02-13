
import * as UserActionTypes from '../actiontypes/user';

export const logIn = (provider) => {
  return {
    type: UserActionTypes.LOG_IN,
    provider
  };
};

export const logOut = () => {
  return {
    type: UserActionTypes.LOG_OUT
  };
};
