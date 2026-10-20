/**
 * SubsiteLoader component.
 * @module components/theme/SubsiteLoader/SubsiteLoader
 */

import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import { BodyClass } from '@plone/volto/helpers';
import cx from 'classnames';
import { isSubsiteRoot } from './utils';
import { setSubsite } from './actions';
import { useLocation } from 'react-router-dom';

const SubsiteLoader = ({ content }) => {
  // const subsite = content?.['@components'].subsite;
  const subsite = useSelector((state) => state.subsite?.data);
  const location = useLocation();
  const dispatch = useDispatch();

  // BBB: copy state.content['@components].subsite to state.subsite for backward compatibility
  useEffect(() => {
    dispatch(setSubsite(content?.['@components']?.subsite));
  }, [dispatch, content]);

  return subsite && subsite['@id'] ? (
    <BodyClass
      className={cx('subsite', `subsite-${subsite.subsite_css_class?.token}`, {
        'subsite-root': isSubsiteRoot(location.pathname, subsite),
      })}
    />
  ) : null;
};

export default connect((state) => ({
  content: state.content.data,
}))(SubsiteLoader);
