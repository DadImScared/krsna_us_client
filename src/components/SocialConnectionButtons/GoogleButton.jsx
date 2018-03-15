
import React from 'react';
import GoogleLogin from 'react-google-login';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { GoogleButton as styles } from '../../styles/SocialConnectionButtons';

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
