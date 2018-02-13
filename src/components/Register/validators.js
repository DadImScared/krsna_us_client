
import axios from 'axios';

export const userNameValidator = async (props, state, id, updateFormErrors) => {
  const newErrors = { ...state.formErrors };
  try {
    const { data: { message } } = await axios.post(
      '/api/v1/userexists', { username: state.form.username }, { headers: { contentType: 'application/json' } }
    );
    if (message) {
      newErrors[id] = 'Username taken';
    }
    else {
      newErrors[id] = '';
    }
  }
  catch(e) {
    console.error(e.response);
  }
  // setState({ formErrors: newErrors });
  updateFormErrors(newErrors);
};

export const emailValidator = async (props, { form: { email }, formErrors }, id, updateFormErrors) => {
  const newErrors = { ...formErrors };
  try {
    const { data: { message } } = await axios.post(
      '/api/v1/emailexists', { email }, { headers: { contentType: 'application/json' } }
    );
    if (message) {
      newErrors[id] = 'Email taken';
    }
    else {
      newErrors[id] = '';
    }
  }
  catch(e) {
    console.error(e.response);
  }
  // setState({ formErrors: newErrors });
  updateFormErrors(newErrors);
};

export const passwordValidator = (props, { form: { password, confirmPass }, formErrors }, id, updateFormErrors) => {
  const newErrors = { ...formErrors };
  if (password !== confirmPass && confirmPass && password) {
    newErrors['password'] = 'passwords must match';
    newErrors['confirmPass'] = 'passwords must match';

  }
  else {
    newErrors['password'] = '';
    newErrors['confirmPass'] = '';
  }
  updateFormErrors(newErrors);
};
