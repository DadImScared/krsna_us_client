
import React from 'react';

import { Link } from 'react-router-dom';

import { ListItem, ListItemText } from 'material-ui/List';
import ButtonBase from 'material-ui/ButtonBase';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

import Delete from 'material-ui-icons/Delete';

import PlayPlaylistButton from './PlayPlaylistButton';

const RenderPlaylist = ({ item, deletePlaylist, showDelete = true }) => (
  <ListItem button disableRipple style={{ display: 'flex', justifyContent: 'space-between' }}>
    <PlayPlaylistButton playlistId={item.playlist_id} />
    <ButtonBase style={{ width: '100%' }}>
      <ListItemText
        primary={
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Link
              style={{ color: 'white', textDecoration: 'none', width: '100%', textAlign: 'left' }}
              to={`/playlists/${item.playlist_id}/`}
            >
              <span>{item.name}</span>
            </Link>
          </div>
        }
      />
    </ButtonBase>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography><span style={{ alignSelf: 'center', marginRight: '5px' }}>{item.items_count}</span></Typography>
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
    </div>
  </ListItem>
);

export default RenderPlaylist;
