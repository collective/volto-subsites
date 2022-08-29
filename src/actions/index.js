/**
 * Dropdown menu items actions.
 * @module actions/getDropdownMenuNavitems
 *
 * DEPRECATED
 *
 */
export const GET_SUBSITE = 'GET_SUBSITE';
export const SET_SUBSITE = 'SET_SUBSITE';
export const RESET_SUBSITE = 'RESET_SUBSITE';

/**
 * Get subsite.
 * @function getSubsite
 * @returns {Object} Get subsite
 * Es: http://localhost:8080/Plone/@subsite?fullobjects
 *
 * DEPRECATED
 *
 */
export function getSubsite(url) {
  return {
    type: GET_SUBSITE,
    request: {
      op: 'get',
      path: `${url}`,
    },
  };
}

/**
 * Set subsite
 * @function setSubsite
 * @param {object} subsite Subsite data.
 * @returns {Object} Get subsite
 *
 * BBB: DEPRECATED
 *
 */
 export function setSubsite(subsite) {
  return {
    type: SET_SUBSITE,
    payload: { subsite },
  };
}

/**
 * Reset content function
 * @function resetContent
 * @param {string} subrequest Key of the subrequest.
 * @returns {Object} Get content action
 *
 * DEPRECATED
 *
 */
export function resetSubsite() {
  return {
    type: RESET_SUBSITE,
  };
}
