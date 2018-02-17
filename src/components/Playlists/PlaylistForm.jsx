
import React from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const PlaylistForm = ({ updateForm, formErrors, submitForm, classes }) => (
  <div className={classes.formContainer}>
    <TextField
      id='name' // for playlist name
      error={!!formErrors['name']}
      helperText={formErrors['name'] || formErrors['nonFieldErrors'] || ''}
      onChange={(event) => updateForm(event, 'name')}
    />
    <Button onClick={submitForm} color='primary'>Submit</Button>
  </div>
);

export default PlaylistForm;
