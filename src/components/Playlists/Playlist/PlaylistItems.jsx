
import React from 'react';

import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import Delete from '@material-ui/icons/Delete';

import HandleIcon from '@material-ui/icons/DragHandle';

import PlayPlaylistButton from '../PlayPlaylistButton';

const DragHandle = SortableHandle(() => (
  <Icon color='secondary'>
    <HandleIcon/>
  </Icon>
));

const SortableItem = SortableElement(({ value, deleteItem, playlistId, itemIndex, isCreator, setPlaylist, items, name }) => (
  <ListItem>
    {
      isCreator ?
        <div style={{ display: 'flex' }}>
          <DragHandle />
          <Hidden lgUp>
            <Icon onClick={() => deleteItem(value)} color='error'>
              <Delete/>
            </Icon>
          </Hidden>
        </div>
        :
        null
    }
    <Hidden mdDown>
      <PlayPlaylistButton index={itemIndex} playlistId={playlistId} />
    </Hidden>
    <Hidden lgUp>
      <ListItemText onClick={() => setPlaylist(name, items, itemIndex)} primary={value.title} />
    </Hidden>
    <Hidden mdDown>
      <ListItemText primary={value.title} />
    </Hidden>
    <Hidden mdDown>
      <ListItemSecondaryAction>

        {
          isCreator ?
            <IconButton onClick={() => deleteItem(value)}>
              <Icon color='error'>
                <Delete/>
              </Icon>
            </IconButton>
            :
            null
        }
      </ListItemSecondaryAction>
    </Hidden>
  </ListItem>
));

const PlaylistItems = SortableContainer(({ items, classes, deleteItem, isCreator, playlistId, setPlaylist, name }) => (
  <List classes={{
    root: classes.listContainer
  }}>
    {items.map((value, index) => (
      <SortableItem
        name={name}
        setPlaylist={setPlaylist}
        items={items}
        isCreator={isCreator}
        itemIndex={index}
        playlistId={playlistId}
        value={value}
        deleteItem={deleteItem}
        key={`item-${index}`}
        index={index}
      />
    ))}
  </List>
));

export default PlaylistItems;
