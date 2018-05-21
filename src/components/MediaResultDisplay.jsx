
import React from 'react';

import { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import PlayArrow from 'material-ui-icons/PlayArrow';

import Title from '../components/Title';


const MediaResultDisplay = ({ item, setMediaItem }) => (
  <ListItem>
    <ListItemText primary={
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <Button
            size='small'
            onClick={() => setMediaItem(item.link, item.title)}
            variant='raised' color='secondary'
            style={{ marginRight: '24px' }}
          >
            <PlayArrow />
          </Button>
          <Typography>Category: {item.category}</Typography>
        </div>
        Title: <Title item={item} />
        <Divider />
      </div>
    } color={'primary'} />
  </ListItem>
);

export default MediaResultDisplay;
