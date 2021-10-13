/**
 * Subsite reducer.
 * @module reducers/subsiteReducer
 */

import { GET_SUBSITE, RESET_SUBSITE } from '../actions';

const initialState = {
  error: null,
  hasErrror: false,
  loadingResults: false,
  loaded: false,
};

export const subsiteReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_SUBSITE}_PENDING`:
      return {
        ...state,
        loadingResults: true,
      };
    case `${GET_SUBSITE}_SUCCESS`:
      let data = action.result?.['@id'] ? action.result : {};

      return {
        ...state,
        data: Object.keys(data).length > 0 ? data : null,
        loadingResults: false,
        loaded: true,
      };
    case `${GET_SUBSITE}_FAIL`:
      return {
        ...state,
        error: action.error,
        hasError: true,
        loadingResults: false,
      };
    case RESET_SUBSITE:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};
