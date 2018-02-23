
import React, { Component } from 'react';

import _ from 'lodash';
import { arrayMove } from 'react-sortable-hoc';

import handleFormState from '../../handleFormState';
import View from './View';
import { getItems, patchItem, deleteItem } from '../../../actions/playlistItem';
import { patchPlaylist } from '../../../actions/playlist';

class Playlist extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      items: [],
      name: '',
      itemCount: 0,
      isLoading: false,
      errorMessage: ''
    };
  }

  render() {
    return (
      <View
        submitForm={this.submitForm}
        onSortEnd={this.onSortEnd}
        deleteItem={this.deleteItem}
        {...this.state}
        {...this.props}
      />
    );
  }

  componentDidMount() {
    console.log(this.getPlaylistId(this.props));
    this.fetchAndUpdate(this.getPlaylistId(this.props));
  }

  componentWillReceiveProps(nextProps) {
    const currentPlaylistId = this.getPlaylistId(this.props);
    const newPlaylistId = this.getPlaylistId(nextProps);
    if (currentPlaylistId !== newPlaylistId) {
      this.fetchAndUpdate(newPlaylistId);
    }
  }

  fetchAndUpdate = async (playlistId) => {
    this.setState({ isLoading: true });
    const newData = {};
    try {
      const { data: { items, name, items_count: itemCount } } = await getItems(playlistId);
      newData.items = items;
      newData.name = name;
      newData.itemCount = itemCount;
    }
    catch ({ response: { data } }) {
      newData.errorMessage = data;
    }
    newData.isLoading = false;
    this.setState(newData);
  };

  getPlaylistId = (props) => {
    const { match: { params: { playlistId } } } = props;
    return playlistId;
  };

  submitForm = async () => {
    const { handleErrorResponse, form, clearErrors, clearFields } = this.props;
    try {
      const { data: { name } } = await patchPlaylist(this.getPlaylistId(this.props), form.name || '');
      this.setState({ name });
      clearErrors();
      clearFields();
    }
    catch ({ response: { data } }) {
      handleErrorResponse(data);
    }
  };

  onSortEnd = async ({ oldIndex, newIndex }) => {
    const itemId = this.state.items[oldIndex].item_id;
    this.setState({ items: arrayMove(this.state.items, oldIndex, newIndex) });
    try {
      await patchItem(itemId, newIndex);
    }
    catch (e) {
      this.setState({ items: arrayMove(this.state.items, newIndex, oldIndex) });
    }
  };

  deleteItem = async (item) => {
    const { items } = this.state;
    const newData = { ...this.state };
    try {
      await deleteItem(item.item_id);
      newData.items = _.filter(items, (o) => o.item_id !== item.item_id);
    }
    catch ({ response: { data } }) {
      newData.errorMessage = 'Please log in and try again'
    }
    this.setState(newData);
  };
}

export default handleFormState(Playlist);
