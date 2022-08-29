/**
 * SubsiteLoader component.
 * @module components/theme/SubsiteLoader/SubsiteLoader
 */

import { BodyClass } from '@plone/volto/helpers';
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { isSubsiteRoot } from './utils';
import { useLocation } from 'react-router-dom';

const SubsiteLoader = ({ content }) => {
  const subsite = content?.['@components'].subsite;
  // const subsite = useSelector((state) => state.subsite);
  const location = useLocation();

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
