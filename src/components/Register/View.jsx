
import React from 'react';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import ReSendEmail from '../ReSendEmail';
import SocialConnectionButtons from '../SocialConnectionButtons';
import RegisterForm from './RegisterForm';

import styles from '../../styles/Register.css';

const View = ({ classes, onSocialSuccess, shouldShow, successMessage, email, ...other }) => (
  <Paper classes={{ root: classes.paperBackground }}>
    <div className={classes.innerWrapper}>
      <SocialConnectionButtons prefix={'Register'} onSuccess={onSocialSuccess} />
      <Typography gutterBottom  variant={'title'}>or</Typography>
      <div className={classes.registerWrapper}>
        <Typography align='center'>Register with us</Typography>
        <ReSendEmail
          shouldShow={shouldShow}
          message={successMessage}
          email={email}
          afterSend={true}
        />
        <RegisterForm classes={classes} {...other} />
      </div>
    </div>
  </Paper>
);

export default withStyles(styles)(View);
