import { flattenToAppURL } from '@plone/volto/helpers';

export const isSubsiteRoot = (pathname, subsite) => {
  let path = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  let is_root = subsite?.['@id']
    ? path === flattenToAppURL(subsite['@id'])
    : false;

  return is_root;
};
