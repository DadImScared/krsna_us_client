
import React from 'react';

import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc';

import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

import Delete from 'material-ui-icons/Delete';

import { DragHandle as HandleIcon } from 'material-ui-icons';

import PlayPlaylistButton from '../PlayPlaylistButton';

const DragHandle = SortableHandle(() => (
  <Icon color='secondary'>
    <HandleIcon/>
  </Icon>
));

const SortableItem = SortableElement(({ value, deleteItem, playlistId, itemIndex }) => (
  <ListItem>
    <div>
      <DragHandle />
      <Hidden mdUp>
        <Icon onClick={() => deleteItem(value)} color='error'>
          <Delete/>
        </Icon>
      </Hidden>
    </div>
    <ListItemText primary={value.title} />
    <Hidden mdDown>
      <ListItemSecondaryAction>
        <PlayPlaylistButton index={itemIndex} playlistId={playlistId} />
        <IconButton onClick={() => deleteItem(value)}>
          <Icon color='error'>
            <Delete/>
          </Icon>
        </IconButton>
      </ListItemSecondaryAction>
    </Hidden>
  </ListItem>
));

const PlaylistItems = SortableContainer(({ items, classes, deleteItem, playlistId }) => (
  <List classes={{
    root: classes.listContainer
  }}>
    {items.map((value, index) => (
      <SortableItem itemIndex={index} playlistId={playlistId} value={value} deleteItem={deleteItem} key={`item-${index}`} index={index} />
    ))}
  </List>
));

export default PlaylistItems;
