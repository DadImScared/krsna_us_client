
import * as BrowseActionTypes from '../actiontypes/browse';

const initialState = {};

export default function Browse(state=initialState, action) {
  switch(action.type) {
  case BrowseActionTypes.UPDATE_RESULTS:
    console.log(action);
    return {
      ...state,
      [action.category]: {
        nextPage: action.nextPage,
        results: [
          ...(state[action.category] ? state[action.category].results:[]),
          ...action.results
        ]
      }
    };
  case BrowseActionTypes.CLEAR_RESULTS:
    return {};
  default:
    return state;
  }
}
