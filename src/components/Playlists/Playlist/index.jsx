
import React, { Component } from 'react';

import { arrayMove } from 'react-sortable-hoc';

import handleFormState from '../../handleFormState';
import View from './View';
import { getItems, patchItem } from '../../../actions/playlistItem';
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
    console.log('sorted');
    console.log(oldIndex, ' ', newIndex);
    this.setState({ items: arrayMove(this.state.items, oldIndex, newIndex) });
    try {
      await patchItem(itemId, newIndex);
    }
    catch (e) {
      this.setState({ items: arrayMove(this.state.items, newIndex, oldIndex) });
    }
  };
}

export default handleFormState(Playlist);
