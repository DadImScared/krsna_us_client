
import React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { userNameValidator, emailValidator, passwordValidator } from './validators';

const formFields = [
  { id: 'username', labelText: 'Username', validator: userNameValidator },
  { id: 'email', labelText: 'Email', fieldType: 'email', validator: emailValidator },
  { id: 'password', labelText: 'Password', fieldType: 'password', validator: passwordValidator },
  { id: 'confirmPassword', labelText: 'Confirm password', fieldType: 'password', validator: passwordValidator }
];

const RegisterForm = ({ updateForm, registerUser }) => (
  <Paper>
    {
      formFields.map(({ id, labelText, validator, fieldType = 'text' }, index) => {
        return (
          <div key={index}>
            <TextField
              id={id}
              label={labelText}
              type={fieldType}
              onChange={(event) => updateForm(event, id, validator)}
            />
          </div>
        );
      })
    }
    <Button color='primary' raised onClick={registerUser}>
      Submit
    </Button>
  </Paper>
);

export default RegisterForm;
