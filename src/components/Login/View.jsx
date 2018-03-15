
import React from 'react';
import { NavLink } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import ReSendEmail from '../ReSendEmail';
import SocialConnectionButtons from '../SocialConnectionButtons';

import LoginForm from './LoginForm';

import styles from '../../styles/Login.css';

const View = ({ classes, errorMessage, onSocialSuccess, updateForm, submitLogin, formErrors, ...other }) => (
  <Paper classes={{ root: classes.paperBackground }}>
    <SocialConnectionButtons onSuccessCb={onSocialSuccess} />
    <Typography variant={'title'}>or</Typography>
    {
      other.shouldShow ?
        <ReSendEmail
          {...other}
        />
        :null
    }
    <LoginForm
      classes={classes}
      formErrors={formErrors}
      submitLogin={submitLogin}
      updateForm={updateForm}
      errorMessage={errorMessage}
    />
    <Typography>
      {'Don\'t '} have an account? Click here
      to <NavLink style={{ color: 'lightblue' }} to={'/register'}>register.</NavLink>
    </Typography>
  </Paper>
);

export default withStyles(styles)(View);
