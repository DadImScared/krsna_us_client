
import React from 'react';

import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import PlayArrow from 'material-ui-icons/PlayArrow';

import Title from '../components/Title';
import styles from '../styles/MediaResultButtons';


const MediaResultDisplay = ({ classes, item, setMediaItem }) => (
  <ListItem>
    <ListItemText primary={
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <Button
            className={classes.button}
            size='small'
            onClick={() => setMediaItem(item.link, item.title)}
            variant='raised' color='secondary'
            style={{ marginRight: '24px' }}
          >
            <PlayArrow />
          </Button>
          <Typography>Category: {item.category}</Typography>
        </div>
        <div>
          <span>Title: </span>
          <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} href={item.link}>
            <Title item={item} />
          </a>
        </div>
        <Divider />
      </div>
    } color={'primary'} />
  </ListItem>
);

export default withStyles(styles)(MediaResultDisplay);
