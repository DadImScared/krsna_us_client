
import React from 'react';

import { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import PlayArrow from 'material-ui-icons/PlayArrow';

import Title from '../../components/Title';

import MediaResultDisplay from '../../components/MediaResultDisplay';

const View = ({ item, setSong }) => (
  <MediaResultDisplay item={item} setMediaItem={setSong} />
);

export default View;
