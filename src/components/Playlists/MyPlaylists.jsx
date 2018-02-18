
import React, { Component } from 'react';

import { getMyPlaylists, createPlaylist } from '../../actions/playlist';

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
        <PlaylistForm classes={classes} submitForm={this.submitForm} {...this.props} />
        <VirtualResults
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
