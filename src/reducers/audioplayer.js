
import * as AudioActionTypes from '../actiontypes/audioplayer';

const initialState = {
  showPlayer: false,
  playerType: '', // either "song" or "playlist"
  playing: false,

  // values used when audio is playing a playlist
  name: '',
  items: [],
  currentIndex: 0,

  // values used when audio player is playing single song
  currentSongUrl: '',
  currentSongName: ''
};

export default function AudioPlayer(state=initialState, action) {
  switch(action.type) {
  case AudioActionTypes.SHOW_PLAYER:
    return {
      ...state,
      showPlayer: action.showPlayer
    };
  case AudioActionTypes.TOGGLE_PLAYING:
    return {
      ...state,
      playing: !state.playing
    };
  case AudioActionTypes.SET_PLAYING:
    return {
      ...state,
      playing: action.playing
    };
  case AudioActionTypes.SET_PLAYLIST:
    return {
      ...state,
      playing: action.playing,
      playerType: action.playerType,
      showPlayer: action.showPlayer,
      name: action.name,
      items: action.items,
      currentIndex: action.currentIndex
    };
  case AudioActionTypes.UPDATE_CURRENT_INDEX:
    return {
      ...state,
      currentIndex: action.newIndex
    };
  case AudioActionTypes.SET_SONG:
    return {
      ...state,
      playerType: action.playerType,
      playing: action.playing,
      showPlayer: action.showPlayer,
      currentSongUrl: action.currentSongUrl,
      currentSongName: action.currentSongName
    };
  default:
    return state;
  }
}
