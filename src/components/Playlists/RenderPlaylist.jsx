
import React from 'react';

import { Link } from 'react-router-dom';

import { ListItem, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import Delete from 'material-ui-icons/Delete';

import PlayPlaylistButton from './PlayPlaylistButton';

const RenderPlaylist = ({ item, deletePlaylist, showDelete = true }) => (
  <ListItem>
    <PlayPlaylistButton playlistId={item.playlist_id} />
    <ListItemText
      primary={
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link style={{ color: 'white', textDecoration: 'none' }} to={`/playlists/${item.playlist_id}/`}><span>{item.name}</span></Link>
          <span style={{ alignSelf: 'center' }}>{item.items_count}</span>
        </div>
      }
    />
    {
      showDelete ?
        <IconButton onClick={() => deletePlaylist(item.playlist_id)}>
          <Icon>
            <Delete />
          </Icon>
        </IconButton>
        :
        null
    }
  </ListItem>
);

export default RenderPlaylist;
