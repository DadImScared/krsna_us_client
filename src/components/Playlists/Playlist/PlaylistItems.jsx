
import React from 'react';

import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc';

import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Hidden from 'material-ui/Hidden';

import { DragHandle as HandleIcon } from 'material-ui-icons';

const DragHandle = SortableHandle(() => <HandleIcon/>);

const SortableItem = SortableElement(({ value }) => (
  <ListItem>
    <div>
      <DragHandle />
      <Hidden mdUp>
        <div>delete button</div>
      </Hidden>
    </div>
    <ListItemText primary={value.title} />
    <Hidden mdDown>
      <ListItemSecondaryAction>
        <span>play button</span>
        <span>delete button</span>
      </ListItemSecondaryAction>
    </Hidden>
  </ListItem>
));

const PlaylistItems = SortableContainer(({ items, classes }) => (
  <List classes={{
    root: classes.listContainer
  }}>
    {items.map((value, index) => (
      <SortableItem value={value} key={`item-${index}`} index={index} />
    ))}
  </List>
));

export default PlaylistItems;
