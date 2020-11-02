/**
 * Dropdown menu items actions.
 * @module actions/getDropdownMenuNavitems
 */
export const GET_SUBSITE = 'GET_SUBSITE';
export const RESET_SUBSITE = 'RESET_SUBSITE';

/**
 * Get subsite.
 * @function getSubsite
 * @returns {Object} Get subsite
 * Es: http://localhost:8080/Plone/@subsite?fullobjects
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
 * Reset content function
 * @function resetContent
 * @param {string} subrequest Key of the subrequest.
 * @returns {Object} Get content action
 */
export function resetSubsite() {
  return {
    type: RESET_SUBSITE,
  };
}
