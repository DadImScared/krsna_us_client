
import axios from 'axios';

import axiosOptions from './axiosOptions';
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

export const getUserInfo = async () => {
  return await axios.get('/rest-auth/user/', axiosOptions());
};

export const changePassword = async (payload) => {
  return await axios.post('/rest-auth/password/change/', payload, axiosOptions());
};
