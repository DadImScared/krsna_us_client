
import React from 'react';

import { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import PlayArrow from 'material-ui-icons/PlayArrow';
import PlaylistAdd from 'material-ui-icons/PlaylistAdd';

import Title from '../../components/Title';
import AddToPlaylist from './AddToPlaylist';

const View = ({ item, setSong, openModal, isOpen, ...other }) => (
  <ListItem>
    <ListItemText primary={
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <Button
            size='small'
            onClick={() => setSong(item.link, item.title)}
            variant='raised' color='primary'
            style={{ marginRight: '12px' }}
          >
            <PlayArrow />
          </Button>
          <Button
            onClick={openModal}
            size='small'
            variant='raised' color='secondary'
            style={{ marginRight: '24px' }}
          >
            <PlaylistAdd />
          </Button>
          {
            isOpen ? <AddToPlaylist item={item} isOpen={isOpen} {...other} />:null
          }
          <Typography>category: {item.category}</Typography>
        </div>
        title: <Title item={item} />
        <Divider />
      </div>
    } color={'primary'} />
  </ListItem>
);

export default View;
