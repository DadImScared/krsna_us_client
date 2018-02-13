
import React from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Facebook } from 'mdi-material-ui';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import SvgIcon from 'material-ui/SvgIcon';

import baseButtonStyles from './styles.css';

const styles = theme => ({
  ...baseButtonStyles(theme)
});

const FacebookButton = ({ classes, onSuccess, prefix }) => (
  <FacebookLogin
    appId={'515787308763793'}
    autoLoad={false}
    disableMobileRedirect={true}
    fields="name,email"
    scope={'email'}
    callback={onSuccess}
    render={renderProps => (
      <Button
        raised
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
