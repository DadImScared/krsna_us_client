
import { combineReducers } from 'redux';
import Search from './search';
import AudioPlayer from './audioplayer';
import VideoPlayer from './videoplayer';
import User from './user';

const reducer = combineReducers({
  search: Search,
  audioplayer: AudioPlayer,
  videoplayer: VideoPlayer,
  user: User
});

export default reducer;
