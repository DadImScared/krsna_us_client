
import React from 'react';

import _ from 'lodash';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

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
  formRoot: {
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
      <ChangePassword classes={classes} {...other} />
    </div>
  </Paper>
);

export default withStyles(styles)(SelfProviderSettings);
