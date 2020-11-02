/**
 * Subsite reducer.
 * @module reducers/subsiteReducer
 */

import { GET_SUBSITE, RESET_SUBSITE } from '../actions';

const initialState = {
  error: null,
  hasErrror: false,
  result: [],
  loadingResults: false,
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
      console.log(data, Object.keys(data).length);
      return {
        ...state,
        data: Object.keys(data).length > 0 ? data : null,
        loadingResults: false,
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
        subsite: null,
      };
    default:
      return state;
  }
};
