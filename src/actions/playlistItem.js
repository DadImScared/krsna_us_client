
import axios from 'axios';

import axiosOptions from './axiosOptions';


const baseUrl = '/api/v1/playlistitems/';

const fullUrl = (extension) => {
  return `${baseUrl}${extension}/`;
};

export const getItems = async (playlistId) => {
  return await axios.get(`${baseUrl}?playlist_id=${playlistId}`);
};

export const postItem = async (playlistId, itemId) => {
  return await axios.post(
    `${baseUrl}?playlist_id=${playlistId}`,
    {
      collection_item: itemId
    },
    axiosOptions()
  );
};

export const patchItem = async (itemId, newOrder) => {
  return await axios.patch(fullUrl(itemId), { new_order: newOrder }, axiosOptions());
};

export const deleteItem = async (itemId) => {
  return await axios.delete(fullUrl(itemId), axiosOptions());
};
