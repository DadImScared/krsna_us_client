
import React from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const PlaylistForm = ({ updateForm, formErrors, submitForm, classes = {}, textFieldStyles = {} }) => (
  <div className={classes.formContainer}>
    <TextField
      id='name' // for playlist name
      error={formErrors['name'] ? true:!!formErrors['nonFieldErrors']}
      helperText={formErrors['name'] || formErrors['nonFieldErrors'] || ''}
      onChange={(event) => updateForm(event, 'name')}
      classes={textFieldStyles}
    />
    <Button raised onClick={submitForm} color='primary'>Submit</Button>
  </div>
);

export default PlaylistForm;
