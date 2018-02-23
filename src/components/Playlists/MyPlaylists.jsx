
import React, { Component } from 'react';

import _ from 'lodash';

import { getMyPlaylists, createPlaylist, deletePlaylist } from '../../actions/playlist';

import VirtualResults from '../VirtualResults';
import handleFormState from '../handleFormState';

import RenderPlaylist from './RenderPlaylist';
import PlaylistForm from './PlaylistForm';

class MyPlaylists extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isLoading: false,
      items: [],
      nextPage: false,
      errorMessage: ''
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const newData = {};
    try {
      const { data: { results, nextPage } } = await getMyPlaylists();
      newData.items = results;
      newData.nextPage = nextPage;
    }
    catch({ response: { data } }) {
      newData.errorMessage = data;
    }
    newData.isLoading = false;
    this.setState(newData);
  }

  submitForm = async () => {
    const { handleErrorResponse, form, clearErrors } = this.props;
    try {
      const { data: newPlaylist } = await createPlaylist(form.name);
      this.setState({ items: [...this.state.items, newPlaylist] });
      clearErrors();
    }
    catch ({ response: { data } }) {
      handleErrorResponse(data);
    }
  };

  deletePlaylist = async (playlistId) => {
    const r = window.confirm('Are you sure you want to delete the playlist?');
    if (r) {
      const newData = { ...this.state };
      try {
        await deletePlaylist(playlistId);
        newData.items = _.filter(this.state.items, (o) => o.playlist_id !== playlistId);
      }
      catch ({ response: { data } }) {
        newData.errorMessage = 'Please log in and try again';
      }
      this.setState(newData);
    }
  };

  updateResults = (results, nextPage) => {
    this.setState({ items: [...this.state.items, ...results], nextPage });
  };

  render() {
    const { classes } = this.props;
    const { isLoading, items, nextPage } = this.state;
    return isLoading ? (
      <div>loading</div>
    ):(
      <div>
        <PlaylistForm placeholderText='Change playlist name' classes={classes} submitForm={this.submitForm} {...this.props} />
        <VirtualResults
          deletePlaylist={this.deletePlaylist}
          updateCb={this.updateResults}
          RowComponent={RenderPlaylist}
          items={items}
          nextPage={nextPage}
        />
      </div>
    );
  }
}

export default handleFormState(MyPlaylists);
