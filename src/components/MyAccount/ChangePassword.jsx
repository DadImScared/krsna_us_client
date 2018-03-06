
import React from 'react';

import { passwordValidator } from '../Register/validators';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


const fields = [
  { id: 'oldPassword', fieldType: 'password', labelText: 'Old password' },
  { id: 'password1', fieldType: 'password', labelText: 'New password', validator: passwordValidator },
  { id: 'password2', fieldType: 'password', labelText: 'Confirm new Password', validator: passwordValidator }
];

const ChangePassword = ({ form, formErrors, submitPasswordChange, updateForm, classes }) => (
  <div>
    {
      fields.map(({ id, fieldType, labelText, validator }, index) => (
        <div key={`${id}-${index}`}>
          <TextField
            id={id}
            error={!!formErrors[id]}
            classes={{ root: classes.formRoot }}
            type={fieldType}
            label={labelText}
            value={form[id] || ''}
            helperText={formErrors[id] || ''}
            onChange={(event) => updateForm(event, id, validator)}
          />
        </div>
      ))
    }
    <Button
      onClick={submitPasswordChange}
      classes={{ root: classes.formButton }}
      variant='raised'
      color='primary'
    >
      Change password
    </Button>
  </div>
);

export default ChangePassword;
