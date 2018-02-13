
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
            onClick={() => setMediaItem(item.link, item.title)}
            dense raised color={'accent'}
            style={{ marginRight: '24px' }}
          >
            <PlayArrow />
          </Button>
          <Typography>category: {item.category}</Typography>
        </div>
        title: <Title item={item} />
        <Divider />
      </div>
    } color={'primary'} />
  </ListItem>
);

export default MediaResultDisplay;
