
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

const selectAllCategories = (shouldSelect = true) => {
  return {
    'movie': shouldSelect,
    'book': shouldSelect,
    'harikatha': shouldSelect,
    'harmonistmonthly': shouldSelect,
    'harmonistmagazine': shouldSelect,
    'bhagavatpatrika': shouldSelect,
    'song': shouldSelect,
    'lecture': shouldSelect
  };
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
  case SearchActionTypes.SELECT_ALL_CATEGORIES:
    return {
      ...state,
      categories: selectAllCategories()
    };
  case SearchActionTypes.UN_SELECT_ALL_CATEGORIES:
    return {
      ...state,
      categories: selectAllCategories(false)
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
          suggestions: action.suggestions ? action.suggestions:state.results[action.query].suggestions
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
