
import React from 'react';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';

import SocialConnectionButtons from '../SocialConnectionButtons';
import RegisterForm from './RegisterForm';

const styles = theme => ({
  paperBackground: {
    height: '100%',
    padding: theme.spacing.unit * 2,
    minHeight: 'calc(100vh - 161px)',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      minHeight: '70vh'
    }
  },
  innerWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      height: '80%'
    }
  },
  fieldStyle: {
    marginBottom: theme.spacing.unit * 2
  },
  registerWrapper: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50vw',
      margin: '0 auto'
    },
    [theme.breakpoints.up('md')]: {
      width: '40vw'
    },
    [theme.breakpoints.up('lg')]: {
      width: '20vw'
    }
  }
});

const View = ({ classes, onSocialSuccess, shouldShowMessage, ...other }) => (
  <Paper classes={{ root: classes.paperBackground }}>
    <div className={classes.innerWrapper}>
      <SocialConnectionButtons prefix={'Register'} onSuccess={onSocialSuccess} />
      <Typography gutterBottom  variant={'title'}>or</Typography>
      <div className={classes.registerWrapper}>
        <Typography align='center'>Register with us</Typography>
        <Fade in={shouldShowMessage}>
          <Typography style={{ marginTop: '15px' }}>
            Thank you for registering.
            An email has been sent for you to confirm.
            If you do not see it please click here to re-send.
          </Typography>
        </Fade>
        <RegisterForm classes={classes} {...other} />
      </div>
    </div>
  </Paper>
);

export default withStyles(styles)(View);
