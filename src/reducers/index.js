
import { combineReducers } from 'redux';
import search from './search';
import audioplayer from './audioplayer';
import videoplayer from './videoplayer';
import user from './user';
import browse from './browse';

const reducer = combineReducers({
  search,
  audioplayer,
  videoplayer,
  user,
  browse
});

export default reducer;
