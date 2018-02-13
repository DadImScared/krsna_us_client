
import * as VideoActionTypes from '../actiontypes/videoplayer';

export const toggleShowVideo = () => {
  return {
    type: VideoActionTypes.TOGGLE_SHOW
  };
};

export const setVideo = (url, title) => {
  return {
    type: VideoActionTypes.SET_VIDEO,
    url,
    title
  };
};
