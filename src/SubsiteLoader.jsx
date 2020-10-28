/**
 * SubsiteLoader component.
 * @module components/theme/SubsiteLoader/SubsiteLoader
 */

import React, { useEffect } from 'react';

import { connect, useDispatch, useSelector } from 'react-redux';
import { getContent, resetContent } from '@plone/volto/actions';
import { BodyClass } from '@plone/volto/helpers';

const SubsiteLoader = ({ content, pathname }) => {
  const dispatch = useDispatch();
  const subsiteEndpoint = content?.['@components']?.subsite
    ? content['@components'].subsite['@id']
    : null;
  const subsite = useSelector((state) => state.content?.subrequests?.subsite);

  useEffect(() => {
    if (subsiteEndpoint && !subsite?.loading) {
      dispatch(getContent(subsiteEndpoint, null, 'subsite'));
    }
    return () => {
      subsiteEndpoint && dispatch(resetContent(subsiteEndpoint));
    };
  }, [content]);

  return subsite?.data && !subsite?.loading ? (
    <>
      <BodyClass
        className={`subsite subsite-${subsite.data.subsite_css_class?.token}`}
      />
    </>
  ) : null;
};

export default connect((state) => ({
  content: state.content.data,
}))(SubsiteLoader);
