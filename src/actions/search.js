
import * as SearchActionTypes from '../actiontypes/search';

export const toggleCategory = (category) => {
  return {
    type: SearchActionTypes.TOGGLE_CATEGORY,
    category
  };
};

export const setQuery = (query) => {
  return {
    type: SearchActionTypes.SET_QUERY,
    query
  };
};

export const updateResults = (query, results, nextPage, suggestions) => {
  return {
    type: SearchActionTypes.UPDATE_RESULTS,
    query,
    results,
    nextPage,
    suggestions
  };
};

export const clearResults = () => {
  return {
    type: SearchActionTypes.CLEAR_RESULTS
  };
};
