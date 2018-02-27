
import React from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { passwordValidator } from './validators';

const formFields = [
  { id: 'email', labelText: 'Email', fieldType: 'email' },
  { id: 'password1', labelText: 'Password', fieldType: 'password', validator: passwordValidator },
  { id: 'password2', labelText: 'Confirm password', fieldType: 'password', validator: passwordValidator }
];

const RegisterForm = ({ classes, updateForm, registerUser, form, formErrors }) => (
  <div>
    <div>{formErrors['nonFieldErrors']}</div>
    <form onSubmit={registerUser}>
      {
        formFields.map(({ id, labelText, validator, fieldType = 'text' }, index) => {
          return (
            <div key={index} className={classes.fieldStyle}>
              <TextField
                id={id}
                error={!!formErrors[id]}
                label={labelText}
                type={fieldType}
                value={form[id] || ''}
                helperText={formErrors[id] || ''}
                onChange={(event) => updateForm(event, id, validator)}
              />
            </div>
          );
        })
      }
      <Button type='submit' color='primary' variant='raised' onClick={registerUser}>
        Submit
      </Button>
    </form>
  </div>
);

export default RegisterForm;
