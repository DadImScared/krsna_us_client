
import React, { Component } from 'react';

import { connect } from 'react-redux';

import _ from 'lodash';
import { arrayMove } from 'react-sortable-hoc';

import handleFormState from '../../handleFormState';
import View from './View';
import { getItems, patchItem, deleteItem as deletePlaylistItem } from '../../../actions/playlistItem';
import { patchPlaylist } from '../../../actions/playlist';

class Playlist extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      items: [],
      name: '',
      itemCount: 0,
      isLoading: false,
      errorMessage: '',
      isCreator: false
    };
  }

  render() {
    return (
      <View
        submitForm={this.submitForm}
        onSortEnd={this.onSortEnd}
        deleteItem={this.deleteItem}
        playlistId={this.getPlaylistId(this.props)}
        {...this.state}
        {...this.props}
      />
    );
  }

  componentDidMount() {
    this.fetchAndUpdate(this.getPlaylistId(this.props), this.props.loggedIn);
  }

  componentWillReceiveProps(nextProps) {
    const currentPlaylistId = this.getPlaylistId(this.props);
    const newPlaylistId = this.getPlaylistId(nextProps);
    if (currentPlaylistId !== newPlaylistId || this.props.loggedIn !== nextProps.loggedIn) {
      this.fetchAndUpdate(newPlaylistId, nextProps.loggedIn);
    }
  }

  fetchAndUpdate = async (playlistId, loggedIn = false) => {
    this.setState({ isLoading: true });
    const newData = {};
    try {
      const {
        data: {
          items,
          name,
          items_count: itemCount,
          playlist_id,
          isCreator
        }
      } = await getItems(playlistId, loggedIn);
      newData.items = items;
      newData.name = name;
      newData.itemCount = itemCount;
      newData.playlistId = playlist_id;
      newData.isCreator = isCreator;
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
      await deletePlaylistItem(item.item_id);
      newData.items = _.filter(items, (o) => o.item_id !== item.item_id);
    }
    catch ({ response: { data } }) {
      newData.errorMessage = 'Please log in and try again';
    }
    this.setState(newData);
  };
}

const mapStateToProps = ({ user: { loggedIn } }) => ({
  loggedIn
});

export default handleFormState(connect(mapStateToProps)(Playlist));
