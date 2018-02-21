
import axios from 'axios';

import axiosOptions from './axiosOptions';

const baseUrl = '/api/v1/playlists/';

const fullUrl = (extension = '') => {
  return `${baseUrl}${extension}/`;
};

export const createPlaylist = async (name) => {
  return await axios.post(baseUrl, { name }, axiosOptions());
};

export const getAllPlaylists = async () => {
  return await axios.get(fullUrl('all_playlists'));
};

export const getMyPlaylists = async () => {
  return await axios.get(baseUrl, axiosOptions());
};

export const getPlaylistsWithItem = async (itemId) => {
  // get "my" playlists with a bool indicating if the item is in the playlist
  return await axios.get(`${fullUrl('has_item')}?item_id=${itemId}`, axiosOptions());
};

export const getPlaylist = async (playlistId) => {
  return await axios.get(fullUrl(playlistId));
};

export const patchPlaylist = async (playlistId, name) => {
  return await axios.patch(fullUrl(playlistId), { name }, axiosOptions());
};

export const deletePlaylist = async (playlistId) => {
  return await axios.delete(fullUrl(playlistId), axiosOptions());
};
