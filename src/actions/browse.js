
import * as BrowseActionTypes from '../actiontypes/browse';

export const updateResults = (category, results, nextPage) => {
  return {
    type: BrowseActionTypes.UPDATE_RESULTS,
    category,
    results,
    nextPage
  };
};

export const clearResults = () => {
  return {
    type: BrowseActionTypes.CLEAR_RESULTS
  };
};
