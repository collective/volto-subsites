/**
 * Subsite reducer.
 * @module reducers/subsiteReducer
 */

import { RESET_SUBSITE, SET_SUBSITE } from '../actions';
import { GET_CONTENT } from '@plone/volto/constants/ActionTypes';

const initialState = {
  error: null,
  hasErrror: false,
  loadingResults: false,
  loaded: false,
};

export const subsiteReducer = (state = initialState, action = {}) => {
  let { result } = action;
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
    case `${GET_CONTENT}_SUCCESS`:
      if (!action.subrequest) {
        const data = result;
        const subsite = data?.['@components']?.subsite;
        return {
          ...state,
          data: subsite
            ? Object.keys(subsite).length > 0
              ? subsite
              : null
            : null,
        };
      } else {
        return {
          ...state,
        };
      }
    case SET_SUBSITE:
      const { payload } = action;
      const subsite = payload?.subsite ?? null;
      return {
        ...state,
        data: subsite
          ? Object.keys(subsite).length > 0
            ? subsite
            : null
          : null,
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
