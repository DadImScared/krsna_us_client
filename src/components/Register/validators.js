
export const passwordValidator = (props, { form: { password1, password2 }, formErrors }, id, updateFormErrors) => {
  const newErrors = { ...formErrors };
  if (password1 !== password2 && password2 && password1) {
    newErrors['password1'] = 'Passwords must match';
    newErrors['password2'] = 'Passwords must match';
  }
  else {
    newErrors['password1'] = '';
    newErrors['password2'] = '';
  }
  if (password1.length && password1.length < 8) {
    if (newErrors['password1']) {
      newErrors['password1'] += ' Password must be at least 8 characters long';
    }
    else {
      newErrors['password1'] = 'Password must be at least 8 characters long';
    }
  }
  updateFormErrors(newErrors);
};
