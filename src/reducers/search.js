
import * as SearchActionTypes from '../actiontypes/search';

const initialState = {
  query: '',
  categories: {
    'movie': true,
    'book': true,
    'harikatha': true,
    'harmonistmonthly': true,
    'harmonistmagazine': true,
    'bhagavatpatrika': true,
    'song': true,
    'lecture': true
  }
};

export default function Search(state=initialState, action) {
  switch(action.type) {
  case SearchActionTypes.TOGGLE_CATEGORY:
    return {
      ...state,
      categories: {
        ...state.categories,
        [action.category]: !state.categories[action.category]
      }
    };
  case SearchActionTypes.SET_QUERY:
    return {
      ...state,
      query: action.query
    };
  default:
    return state;
  }
}
