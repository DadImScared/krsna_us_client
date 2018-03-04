
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
  },
  results: {}
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
  case SearchActionTypes.UPDATE_RESULTS:
    return {
      ...state,
      results: {
        ...state.results,
        [action.query]: {
          results: [
            ...(state.results[action.query] ? state.results[action.query].results:[]),
            ...action.results
          ],
          nextPage: action.nextPage,
          suggestions: action.suggestions
        }
      }
    };
  case SearchActionTypes.CLEAR_RESULTS:
    return {
      ...state,
      results: {}
    };
  default:
    return state;
  }
}
