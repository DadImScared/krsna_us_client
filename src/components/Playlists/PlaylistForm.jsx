
import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const PlaylistForm = ({
  updateForm,
  form,
  formErrors,
  submitForm,
  placeholder,
  classes = {},
  textFieldStyles = {}
}) => (
  <form onSubmit={submitForm} className={classes.formContainer}>
    <TextField
      id='name'
      placeholder={placeholder}
      value={form.name || ''}
      error={!!formErrors['name'] || !!formErrors['nonFieldErrors']}
      helperText={formErrors['name'] || formErrors['nonFieldErrors'] || ''}
      onChange={(event) => updateForm(event, 'name')}
      classes={textFieldStyles}
    />
    <Button variant='raised' onClick={submitForm} color='primary'>Submit</Button>
  </form>
);

export default PlaylistForm;
