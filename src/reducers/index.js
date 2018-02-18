
import { combineReducers } from 'redux';
import Search from './search';
import AudioPlayer from './audioplayer';
import VideoPlayer from './videoplayer';
import User from './user';
import Browse from './browse';

const reducer = combineReducers({
  search: Search,
  audioplayer: AudioPlayer,
  videoplayer: VideoPlayer,
  user: User,
  browse: Browse
});

export default reducer;
