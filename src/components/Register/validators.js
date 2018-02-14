
export const passwordValidator = (props, { form: { password1, password2 }, formErrors }, id, updateFormErrors) => {
  const newErrors = { ...formErrors };
  console.log('in validator', password1, password2);
  if (password1 !== password2 && password2 && password1) {
    newErrors['password1'] = 'passwords must match';
    newErrors['password2'] = 'passwords must match';
  }
  else {
    newErrors['password1'] = '';
    newErrors['password2'] = '';
  }
  if (password1.length && password1.length < 8) {
    if (newErrors['password1']) {
      newErrors['password1'] += 'Password must be at least 8 characters long';
    }
    else {
      newErrors['password1'] = 'Password must be at least 8 characters long';
    }
  }
  updateFormErrors(newErrors);
};
