
import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const LoginForm = ({ classes, submitLogin, updateForm, formErrors }) => (
  <div>
    <Typography style={{ textAlign: 'center' }}>Sign in with us</Typography>
    <form onSubmit={submitLogin}>
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
      <Button type='submit' variant='raised' color={'primary'} style={{ width: '100%' }} onClick={submitLogin}>Submit</Button>
    </form>
  </div>
);

export default LoginForm;
