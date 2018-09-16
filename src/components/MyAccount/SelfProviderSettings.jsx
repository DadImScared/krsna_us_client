
import React from 'react';

import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import Fade from '@material-ui/core/Fade';

import ChangePassword from './ChangePassword';
import { SelfProviderSettings as styles } from '../../styles/MyAccount';


const SelfProviderSettings = ({ userInfo, classes, ...other }) => (
  <Paper classes={{ root: classes.container }}>
    <div>
      <Typography gutterBottom align='center' variant='subheading'>User info</Typography>
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

        <Fade mountOnEnter unmountOnExit in={!!other.success}>
          <div>
            <Typography className={classes.successMessage}>Password changed!</Typography>
          </div>
        </Fade>
        <ChangePassword classes={classes} {...other} />
      </div>
    </div>
  </Paper>
);

export default withStyles(styles)(SelfProviderSettings);
