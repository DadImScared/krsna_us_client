
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

import PlayArrow from 'material-ui-icons/PlayArrow';
import Delete from 'material-ui-icons/Delete';

import { DragHandle as HandleIcon } from 'material-ui-icons';

const DragHandle = SortableHandle(() => (
  <Icon color='secondary'>
    <HandleIcon/>
  </Icon>
));

const SortableItem = SortableElement(({ value, deleteItem }) => (
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
        <IconButton>
          <Icon color='error'>
            <PlayArrow />
          </Icon>
        </IconButton>
        <IconButton onClick={() => deleteItem(value)}>
          <Icon color='error'>
            <Delete/>
          </Icon>
        </IconButton>
      </ListItemSecondaryAction>
    </Hidden>
  </ListItem>
));

const PlaylistItems = SortableContainer(({ items, classes, deleteItem }) => (
  <List classes={{
    root: classes.listContainer
  }}>
    {items.map((value, index) => (
      <SortableItem value={value} deleteItem={deleteItem} key={`item-${index}`} index={index} />
    ))}
  </List>
));

export default PlaylistItems;
