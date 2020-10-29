/**
 * SubsiteLoader component.
 * @module components/theme/SubsiteLoader/SubsiteLoader
 */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getContent, resetContent } from '@plone/volto/actions';
import { BodyClass } from '@plone/volto/helpers';

import { isSubsiteRoot } from './utils';
import cx from 'classnames';

const SubsiteLoader = ({ content }) => {
  const dispatch = useDispatch();
  const subsiteEndpoint = content?.['@components']?.subsite
    ? content['@components'].subsite['@id']
    : null;
  const subsite = useSelector((state) => state.content?.subrequests?.subsite);
  const location = useLocation();

  useEffect(() => {
    if (subsiteEndpoint && !subsite?.loading) {
      dispatch(getContent(subsiteEndpoint, null, 'subsite'));
    }
    return () => {
      subsiteEndpoint && dispatch(resetContent(subsiteEndpoint));
    };
  }, [content]);

  return subsite && subsite.data?.['@id'] && !subsite.loading ? (
    <>
      <BodyClass
        className={cx(
          'subsite',
          `subsite-${subsite.data.subsite_css_class?.token}`,
          {
            'subsite-root': isSubsiteRoot(location.pathname, subsite.data),
          },
        )}
      />
    </>
  ) : null;
};

export default connect((state) => ({
  content: state.content.data,
}))(SubsiteLoader);
