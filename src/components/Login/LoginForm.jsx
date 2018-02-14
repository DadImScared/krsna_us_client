
import React from 'react';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const styles = () => ({
  textField: {
    display: 'flex'
  }
});

const LoginForm = ({ classes, submitLogin, updateForm, formErrors }) => (
  <div>
    <Typography style={{ textAlign: 'center' }}>Sign in with us</Typography>
    <TextField
      error={!!formErrors['email'] || !!formErrors['nonFieldErrors']}
      helperText={formErrors['email'] || formErrors['nonFieldErrors'] || ''}
      onChange={(event) => updateForm(event, 'email')}
      id="email"
      label="Email"
      type='email'
      margin="normal"
      className={classes.textField}
      color={'primary'}
    />
    <TextField
      id="password"
      label="Password"
      type="password"
      onChange={(event) => updateForm(event, 'password')}
      error={!!formErrors['password']}
      helperText={formErrors['password'] || ''}
      className={classes.textField}
      margin="normal"
    />
    <Button raised color={'primary'} style={{ width: '100%' }} onClick={submitLogin}>Submit</Button>
  </div>
);

export default withStyles(styles)(LoginForm);
