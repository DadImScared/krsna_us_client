
import React from 'react';

import VirtualResults from '../VirtualResults';
import fetchData from '../fetchData';

import RenderPlaylist from './RenderPlaylist';

const AllPlaylists = ({ data: { results, nextPage } }) => (
  <VirtualResults RowComponent={RenderPlaylist} items={results} nextPage={nextPage} />
);

const getUrl = () => {
  return '/api/v1/playlists/all_playlists/';
};

const shouldLoadMore = (currentProps, nextProps) => {
  return currentProps.location.pathname !== nextProps.location.pathname;
};

export default fetchData(getUrl, shouldLoadMore)(AllPlaylists);
