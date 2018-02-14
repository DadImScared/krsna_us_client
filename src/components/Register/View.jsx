
import React from 'react';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import SocialConnectionButtons from '../SocialConnectionButtons';
import RegisterForm from './RegisterForm';

const styles = theme => ({
  paperBackground: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2,
    minHeight: 'calc(100vh - 161px)',
    justifyContent: 'space-around',
    [theme.breakpoints.up('md')]: {
      minHeight: '70vh'
    }
  },
  fieldStyle: {
    marginBottom: theme.spacing.unit * 2,
    width: '100%'
  }
});

const View = ({ classes, onSocialSuccess, ...other }) => (
  <Paper classes={{ root: classes.paperBackground }}>
    <SocialConnectionButtons prefix={'Register'} onSuccess={onSocialSuccess} />
    <Typography type={'title'}>or</Typography>
    <div>
      <Typography>Register with us</Typography>
      <RegisterForm classes={classes} {...other} />
    </div>
  </Paper>
);

export default withStyles(styles)(View);
