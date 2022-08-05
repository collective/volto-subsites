import navSVG from '@plone/volto/icons/nav.svg';
import SubsiteLoader from './SubsiteLoader';
import { isSubsiteRoot } from './utils';
import { getSubsite, resetSubsite } from './actions';
import { subsiteReducer } from './reducers';
import { flattenToAppURL } from '@plone/volto/helpers';
export { SubsiteLoader, getSubsite, resetSubsite };
export { isSubsiteRoot };

export default (config) => {
  config.addonReducers = {
    ...config.addonReducers,
    subsite: subsiteReducer,
  };

  config.settings.asyncPropsExtenders = [
    ...(config.settings.asyncPropsExtenders ?? []),
    {
      path: '/',
      extend: (dispatchActions) => {
        if (
          dispatchActions.filter((asyncAction) => asyncAction.key === 'subsite')
            .length === 0
        ) {
          dispatchActions.push({
            key: 'subsite',
            promise: ({ location, store: { dispatch } }) =>
              __SERVER__ &&
              !location.pathname.match(/.*@subsite$/) &&
              dispatch(
                getSubsite(flattenToAppURL(location.pathname + '@subsite')),
              ),
          });
        }
        return dispatchActions;
      },
    },
  ];

  config.settings.controlPanelsIcons['subsites-settings'] = navSVG;

  return config;
};
