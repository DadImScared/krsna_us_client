
import React from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

import PlayArrow from 'material-ui-icons/PlayArrow';

const RenderPlaylist = ({ item }) => (
  <ListItem>
    <IconButton>
      <PlayArrow />
    </IconButton>
    <ListItemText
      primary={
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{item.name}</span>
          <span>{item.items_count}</span>
        </div>
      }
    />
    <ListItemSecondaryAction>
      <IconButton component={Link} to={`/playlists/${item.playlist_id}/`}>
        <PlayArrow />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default RenderPlaylist;
