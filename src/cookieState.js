
import Cookies from 'js-cookie';

export const setLogin = (token, provider) => {
  Cookies.set('token', token);
  Cookies.set('provider', provider);
};

export const setLogout = () => {
  Cookies.remove('token');
  Cookies.remove('provider');
};
