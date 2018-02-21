
import React from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import PlayArrow from 'material-ui-icons/PlayArrow';

const RenderPlaylist = ({ item }) => (
  <ListItem>
    <IconButton>
      <Icon>
        <PlayArrow />
      </Icon>
    </IconButton>
    <ListItemText
      primary={
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{item.name}</span>
          <span>{item.items_count}</span>
        </div>
      }
    />
    <IconButton component={Link} to={`/playlists/${item.playlist_id}/`}>
      <Icon>
        <PlayArrow />
      </Icon>
    </IconButton>
  </ListItem>
);

export default RenderPlaylist;
