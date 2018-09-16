
import React from 'react';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import PlayArrow from '@material-ui/icons/PlayArrow';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';

import Title from '../../components/Title';
import AddToPlaylist from './AddToPlaylist';
import styles from '../../styles/MediaResultButtons';

const View = ({ classes, item, setSong, openModal, isOpen, ...other }) => (
  <ListItem>
    <ListItemText primary={
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <Button
            size='small'
            className={classNames(classes.button, classes.play)}
            onClick={() => setSong(item.link, item.title)}
            variant='raised' color='primary'
          >
            <PlayArrow />
          </Button>
          <Button
            onClick={openModal}
            className={classNames(classes.button, classes.playlist)}
            size='small'
            variant='raised' color='secondary'
          >
            <PlaylistAdd />
          </Button>
          {
            isOpen ? <AddToPlaylist item={item} isOpen={isOpen} {...other} />:null
          }
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

export default withStyles(styles)(View);
