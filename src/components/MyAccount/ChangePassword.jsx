
import React from 'react';

import { passwordValidator } from '../Register/validators';

import TextField from 'material-ui/TextField';


const fields = [
  { id: 'oldPassword', fieldType: 'password', oldPassword: 'Old password' },
  { id: 'password1', fieldType: 'password', labelText: 'New password', validator: passwordValidator },
  { id: 'password2', fieldType: 'password', labelText: 'Confirm new Password', validator: passwordValidator }
];

const ChangePassword = ({ form, formErrors, submitPasswordChange, updateForm, classes }) => (
  <div>
    {
      fields.map(({ id, fieldType, labelText, validator }, index) => (
        <div className={classes.formRoot} key={`${id}-${index}`}>
          <TextField
            id={id}
            error={!!formErrors[id]}
            type={fieldType}
            label={labelText}
            value={form[id] || ''}
            helperText={formErrors[id] || ''}
            onChange={(event) => updateForm(event, id, validator)}
          />
        </div>
      ))
    }
  </div>
);

export default ChangePassword;
