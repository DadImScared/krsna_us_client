
import React from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import PlayArrow from 'material-ui-icons/PlayArrow';
import Delete from 'material-ui-icons/Delete';

const RenderPlaylist = ({ item, deletePlaylist }) => (
  <ListItem>
    <IconButton>
      <Icon>
        <PlayArrow />
      </Icon>
    </IconButton>
    <ListItemText
      primary={
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link style={{ color: 'white', textDecoration: 'none' }} to={`/playlists/${item.playlist_id}/`}><span>{item.name}</span></Link>
          <span style={{ alignSelf: 'center' }}>{item.items_count}</span>
        </div>
      }
    />
    <IconButton onClick={() => deletePlaylist(item.playlist_id)}>
      <Icon>
        <Delete />
      </Icon>
    </IconButton>
  </ListItem>
);

export default RenderPlaylist;
