
import React from 'react';

import axios from 'axios';
import Cookies from 'js-cookie';

import VirtualResults from '../VirtualResults';
import fetchData from '../fetchData';
import handleFormState from '../handleFormState';

import RenderPlaylist from './RenderPlaylist';
import PlaylistForm from './PlaylistForm';

const axiosOptions = () => (
  {
    headers: {
      Authorization: `Token ${Cookies.get('token', '')}`
    }
  }
);

const MyPlaylists = ({
  data: {
    results,
    nextPage
  },
  getUrl,
  handleErrorResponse,
  classes,
  ...other
}) => {
  const submitForm = async () => {
    try {
      await axios.post(getUrl(), {
        name: other.form.name
      }, axiosOptions());
      other.reloadPage();
    }
    catch ({ response: { data } }) {
      handleErrorResponse(data);
    }
  };

  return (
    <div>
      <PlaylistForm classes={classes} submitForm={submitForm} {...other} />
      <VirtualResults RowComponent={RenderPlaylist} items={results} nextPage={nextPage} />
    </div>
  );
};

const getUrl = () => '/api/v1/playlists/';

const shouldLoadMore = (currentProps, nextProps) => {
  return currentProps.location.pathname !== nextProps.location.pathname;
};

export default fetchData(getUrl, shouldLoadMore, axiosOptions)(handleFormState(MyPlaylists));
