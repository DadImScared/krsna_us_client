
import React from 'react';
import GoogleLogin from 'react-google-login';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import btn_google_dark from './btn_google_dark_normal_ios.svg';
import btn_google_pressed from './btn_google_dark_pressed_ios.svg';

import baseButtonStyles from './styles.css';

const styles = theme => ({
  googleButtonBackground: {
    marginBottom: theme.spacing.unit * 2,
    [`&:active $googleButton`]: {
      content: `url(${btn_google_pressed})`,
      cursor: 'pointer',
      boxShadow: theme.shadows[1]
    }
  },
  googleButton: {
    content: `url(${btn_google_dark})`
  },
  ...baseButtonStyles(theme)
});

const GoogleButton = ({ classes, prefix, onSuccess, onFailure }) => (
  <Button
    component={GoogleLogin}
    style={{}}
    variant='raised'
    classes={{ label: classes.buttonLabel, root: classes.googleButtonBackground }}
    color={'primary'}
    clientId={'177912286434-rh71pfirblbdk01elrt0hh8876ogs1m5.apps.googleusercontent.com'}
    onSuccess={onSuccess}
    onFailure={onFailure}
  >
    <img height={'30px'} width={'30px'} className={classes.googleButton} alt={'google logo'} />
    <Typography className={classes.textSpacing} style={{ display: 'inline' }}>{prefix} with Google</Typography>
  </Button>
);

export default withStyles(styles)(GoogleButton);
