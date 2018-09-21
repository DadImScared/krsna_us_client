
import * as SearchActionTypes from '../actiontypes/search';

export const toggleCategory = (category) => {
  return {
    type: SearchActionTypes.TOGGLE_CATEGORY,
    category
  };
};

export const selectAllCategories = () => {
  return {
    type: SearchActionTypes.SELECT_ALL_CATEGORIES
  };
};

export const unSelectAllCategories = () => {
  return {
    type: SearchActionTypes.UN_SELECT_ALL_CATEGORIES
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
