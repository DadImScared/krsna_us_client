
import React from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Facebook } from 'mdi-material-ui';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

import { FacebookButton as styles } from '../../styles/SocialConnectionButtons';

const FacebookButton = ({ classes, onSuccess, prefix }) => (
  <FacebookLogin
    appId={'900703406775843'}
    autoLoad={false}
    disableMobileRedirect={true}
    fields="name,email"
    scope={'email'}
    callback={onSuccess}
    render={renderProps => (
      <Button
        variant='raised'
        classes={{ label: classes.buttonLabel }}
        color={'primary'}
        onClick={renderProps.onClick}
      >
        <SvgIcon>
          <Facebook/>
        </SvgIcon>
        <Typography style={{ display: 'inline' }}>{prefix} with Facebook</Typography>
      </Button>
    )}
  />
);

export default withStyles(styles)(FacebookButton);
