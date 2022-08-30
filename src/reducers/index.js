/**
 * Subsite reducer.
 * @module reducers/subsiteReducer
 */

import { RESET_SUBSITE, SET_SUBSITE } from '../actions';

const initialState = {
  error: null,
  hasErrror: false,
  loadingResults: false,
  loaded: false,
};

export const subsiteReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // DEPRECATED
    // case `${GET_SUBSITE}_PENDING`:
    //   return {
    //     ...state,
    //     loadingResults: true,
    //   };
    // case `${GET_SUBSITE}_SUCCESS`:
    //   let data = action.result?.['@id'] ? action.result : {};
    //   return {
    //     ...state,
    //     data: Object.keys(data).length > 0 ? data : null,
    //     loadingResults: false,
    //     loaded: true,
    //   };
    // case `${GET_SUBSITE}_FAIL`:
    //   return {
    //     ...state,
    //     error: action.error,
    //     hasError: true,
    //     loadingResults: false,
    //   };
    case SET_SUBSITE:
      const { payload } = action;
      return {
        ...state,
        data: payload.subsite,
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
