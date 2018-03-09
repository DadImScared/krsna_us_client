
import React from 'react';
import { NavLink } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import ReSendEmail from '../ReSendEmail';
import SocialConnectionButtons from '../SocialConnectionButtons';

import LoginForm from './LoginForm';

const styles = theme => ({
  paperBackground: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2,
    minHeight: 'calc(100vh - 161px)',
    justifyContent: 'space-around'
  },
  textField: {
    display: 'flex'
  }
});

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
    <LoginForm formErrors={formErrors} submitLogin={submitLogin} updateForm={updateForm} errorMessage={errorMessage} />
    <Typography>
      {'Don\'t '} have an account? Click here
      to <NavLink style={{ color: 'lightblue' }} to={'/register'}>register.</NavLink>
    </Typography>
  </Paper>
);

export default withStyles(styles)(View);
