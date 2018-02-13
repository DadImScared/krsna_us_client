
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

const LoginForm = ({ classes, errorMessage, submitLogin }) => (
  <div>
    <Typography style={{ textAlign: 'center' }}>Sign in with us</Typography>
    <TextField
      error={!!errorMessage}
      helperText={errorMessage}
      id="username"
      label="Username"
      margin="normal"
      className={classes.textField}
      color={'primary'}
    />
    <TextField
      id="password"
      label="Password"
      type="password"
      autoComplete="current-password"
      className={classes.textField}
      margin="normal"
    />
    <Button raised color={'primary'} style={{ width: '100%' }} onClick={submitLogin}>Submit</Button>
  </div>
);

export default withStyles(styles)(LoginForm);
