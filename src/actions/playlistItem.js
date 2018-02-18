
import axios from 'axios';

import axiosOptions from './axiosOptions';


const baseUrl = '/api/v1/items/';

const fullUrl = (extension) => {
  return `${baseUrl}${extension}`;
};

const getItems = async (playlistId) => {
  return await axios.get(fullUrl(`?playlist_id=${playlistId}`));
};

const patchItems = async (itemId, newOrder) => {
  return await axios.patch(fullUrl(itemId), { item_order: newOrder }, axiosOptions());
};

const deleteItems = async (itemId) => {
  return await axios.delete(fullUrl(itemId), axiosOptions());
};
