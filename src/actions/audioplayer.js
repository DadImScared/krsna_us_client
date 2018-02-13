
import * as AudioActionTypes from '../actiontypes/audioplayer';

export const togglePlaying = () => {
  return {
    type: AudioActionTypes.TOGGLE_PLAYING
  };
};

export const setPlaying = (playing) => {
  return {
    type: AudioActionTypes.SET_PLAYING,
    playing
  };
};

export const showPlayer = (showPlayer) => {
  return {
    type: AudioActionTypes.SHOW_PLAYER,
    showPlayer
  };
};

export const setPlaylist = (name, items, currentIndex = 0) => {
  return {
    type: AudioActionTypes.SET_PLAYLIST,
    playerType: 'playlist',
    showPlayer: true,
    playing: true,
    name,
    items,
    currentIndex
  };
};

export const updateIndex = (newIndex) => {
  return {
    type: AudioActionTypes.UPDATE_CURRENT_INDEX,
    newIndex
  };
};

export const setSong = (currentSongUrl, currentSongName) => {
  return {
    type: AudioActionTypes.SET_SONG,
    playerType: 'song',
    showPlayer: true,
    playing: true,
    currentSongUrl,
    currentSongName
  };
};
