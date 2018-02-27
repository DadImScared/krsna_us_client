
import React from 'react';

import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import PlaylistForm from '../PlaylistForm';
import PlaylistItems from './PlaylistItems';
import { inputRow, container, sortableList } from './styles.css';

const styles = theme => ({
  ...container(theme),
  ...inputRow(theme),
  ...sortableList(theme)
});

const View = ({ name, items, classes, ...other }) => (
  <Paper classes={{
    root: classes.container
  }} square={true}>
    <div className={classes.inputRow}>
      <div className={classNames(classes.spacing, classes.playlistInfo)}>
        <Typography>
          <span>name: {name}</span>
        </Typography>
        <Typography>
          <span>item count: {items.length}</span>
        </Typography>
      </div>
      <div className={classNames(classes.spacing, classes.playlistInfo)}>
        {
          other.isCreator ?
            <PlaylistForm
              classes={classes}
              placeholder='Edit name'
              {...other}
            />
            :
            null
        }
      </div>
    </div>
    <Divider/>
    <PlaylistItems {...other} classes={classes} useDragHandle={true} items={items} />
  </Paper>
);

export default withStyles(styles)(View);
