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

  config.settings.extendableAsyncConnect = [
    ...config.settings.extendableAsyncConnect,
    {
      key: 'subsite',
      promise: ({ location, store: { dispatch } }) => {
        __SERVER__ &&
          dispatch(
            getSubsite(
              config.settings.apiPath +
                flattenToAppURL(location.pathname + '@subsite'),
            ),
          );
      },
    },
  ];
  return config;
};
