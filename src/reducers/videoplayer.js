
import * as VideoActionTypes from '../actiontypes/videoplayer';

const initialState = {
  show: false,
  url: '',
  title: ''
};

export default function VideoPlayer(state=initialState, action) {
  switch(action.type) {
  case VideoActionTypes.TOGGLE_SHOW:
    return {
      ...state,
      show: !state.show
    };
  case VideoActionTypes.SET_VIDEO:
    return {
      ...state,
      url: action.url,
      title: action.title,
      show: true
    };
  default:
    return state;
  }
}
