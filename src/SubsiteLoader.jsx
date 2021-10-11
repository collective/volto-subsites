/**
 * SubsiteLoader component.
 * @module components/theme/SubsiteLoader/SubsiteLoader
 */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';

import { getSubsite, resetSubsite } from './actions';
import { BodyClass, flattenToAppURL } from '@plone/volto/helpers';

import { isSubsiteRoot } from './utils';
import cx from 'classnames';

const SubsiteLoader = ({ content }) => {
  const dispatch = useDispatch();
  const subsiteEndpoint = content?.['@components']?.subsite
    ? content['@components'].subsite['@id']
    : null;
  const subsiteState = useSelector((state) => state.subsite);
  const subsite = useSelector((state) => state.subsite?.data);
  const location = useLocation();

  useEffect(() => {
    if (subsiteEndpoint && !subsiteState?.loadingResults && !subsite) {
      dispatch(getSubsite(flattenToAppURL(subsiteEndpoint)));
    }
    return () => {
      subsiteEndpoint &&
        dispatch(resetSubsite(flattenToAppURL(subsiteEndpoint)));
    };
  }, [content, subsiteEndpoint, subsite]);

  return subsite && subsite?.['@id'] && !subsite.loading ? (
    <>
      <BodyClass
        className={cx(
          'subsite',
          `subsite-${subsite.subsite_css_class?.token}`,
          {
            'subsite-root': isSubsiteRoot(location.pathname, subsite),
          },
        )}
      />
    </>
  ) : null;
};

export default connect((state) => ({
  content: state.content.data,
}))(SubsiteLoader);
