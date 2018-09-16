
import React from 'react';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import PlaylistForm from '../PlaylistForm';
import PlaylistItems from './PlaylistItems';

import { Playlist as styles } from '../../../styles/Playlists';


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
