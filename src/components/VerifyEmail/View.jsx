
import React from 'react';

import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import Fade from 'material-ui/transitions/Fade';

import ReSendEmail from '../ReSendEmail';

const message = `
Email sent if you do not see it please 
`;

const View = ({ form, formErrors, updateForm, emailSent, email, showErrorArea, sendEmail }) => (
  <Fade in={showErrorArea}>
    <div style={{ textAlign: 'center' }}>
      {
        emailSent ?
          <ReSendEmail
            shouldShow={emailSent}
            message={message}
            email={email}
          />
          :
          <Typography style={{ margin: '16px 0' }}>
            <span>
              Email link has expired or is wrong. You can
              send another email with the form below.
            </span>
          </Typography>
      }
      <div>
        <TextField
          value={form.email || ''}
          error={!!formErrors.email}
          helperText={formErrors.email || ''}
          onChange={(event) => updateForm(event, 'email')}
        />
        <Button onClick={sendEmail}>
          Submit
        </Button>
      </div>
    </div>
  </Fade>
);

export default View;
