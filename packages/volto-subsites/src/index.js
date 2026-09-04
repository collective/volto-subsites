import SubsiteLoader from './SubsiteLoader';
import { isSubsiteRoot } from './utils';
import navSVG from '@plone/volto/icons/nav.svg';
import { resetSubsite } from './actions';
import { subsiteReducer } from './reducers';

export { SubsiteLoader, isSubsiteRoot, resetSubsite };

const applyConfig = (config) => {
  // DEPRECATED: BBB
  config.addonReducers = {
    ...config.addonReducers,
    subsite: subsiteReducer,
  };

  // DEPRECATED
  // config.settings.asyncPropsExtenders = [
  //   ...(config.settings.asyncPropsExtenders ?? []),
  //   {
  //     path: '/',
  //     extend: (dispatchActions) => {
  //       if (
  //         dispatchActions.filter((asyncAction) => asyncAction.key === 'subsite')
  //           .length === 0
  //       ) {
  //         dispatchActions.push({
  //           key: 'subsite',
  //           promise: ({ location, store: { dispatch } }) =>
  //             __SERVER__ &&
  //             !location.pathname.match(/.*@subsite$/) &&
  //             dispatch(
  //               getSubsite(
  //                 config.settings.apiPath +
  //                 flattenToAppURL(location.pathname + '@subsite'),
  //               ),
  //             ),
  //         });
  //       }
  //       return dispatchActions;
  //     },
  //   },
  // ];

  config.settings.apiExpanders.push({
    match: '/',
    GET_CONTENT: ['subsite'],
  });
  config.settings.controlPanelsIcons['subsites-settings'] = navSVG;

  return config;
};

export default applyConfig;