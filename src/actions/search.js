
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
