
import React from 'react';

import _ from 'lodash';

import { green } from 'material-ui/colors';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import ChangePassword from './ChangePassword';


const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      width: '50vw',
      margin: '0 auto'
    }
  },
  formButton: {
    margin: `${theme.spacing.unit * 2}px 0`
  },
  formRoot: {
    marginTop: theme.spacing.unit * 2,
    width: '100%'
  },
  formWrapper: {
    marginTop: theme.spacing.unit * 2
  },
  successMessage: {
    color: green[500],
    textAlign: 'center',
    marginTop: theme.spacing.unit * 2
  }
});


const SelfProviderSettings = ({ userInfo, classes, ...other }) => (
  <Paper classes={{ root: classes.container }}>
    <div>
      {
        Object.keys(userInfo).map((info, index) => {
          if (userInfo[info]) {
            return (
              <TextField
                classes={{ root: classes.formRoot }}
                label={_.upperFirst(info)}
                disabled
                key={`${userInfo[info]}-${index}`}
                value={userInfo[info]}
              />
            );
          }
        })
      }
      <Divider style={{ marginTop: '25px' }} />
      <div className={classes.formWrapper}>
        <Typography gutterBottom align='center' variant='subheading'>Change password</Typography>
        {
          other.success ?
            <Typography className={classes.successMessage}>{other.success}</Typography>
            :
            null
        }
        <ChangePassword classes={classes} {...other} />
      </div>
    </div>
  </Paper>
);

export default withStyles(styles)(SelfProviderSettings);
