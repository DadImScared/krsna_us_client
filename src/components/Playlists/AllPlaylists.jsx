
import React, { Component } from 'react';

import VirtualResults from '../VirtualResults';

import RenderPlaylist from './RenderPlaylist';

import { getAllPlaylists } from '../../actions/playlist';

class AllPlaylists extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      items: [],
      nextPage: false,
      isLoading: false,
      errorMessage: ''
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const { data: { results, nextPage } } = await getAllPlaylists();
      console.log(results);
      this.setState({ items: results, nextPage, isLoading: false });
    }
    catch ({ response: { data } }) {
      this.setState({ errorMessage: data, isLoading: false });
    }
  }


  render() {
    const { isLoading, items, nextPage } = this.state;
    return isLoading ? (
      <div>load here</div>
    ) : (
      <VirtualResults showDelete={false} RowComponent={RenderPlaylist} items={items} nextPage={nextPage} />
    );
  }
}

export default AllPlaylists;
