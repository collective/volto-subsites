# Changelog

<!-- You should *NOT* be adding new change log entries to this file.
     You should create a file in the news directory instead.
     For helpful instructions, please see:
     https://6.docs.plone.org/contributing/index.html#contributing-change-log-label
-->

<!-- towncrier release notes start -->

## 5.0.1 (2026-11-26)


### Bugfix

- Render the subsite body class on the server too.

  `SubsiteLoader` read the subsite only from the store, where it arrives through the `useEffect` hook. An effect does not run during server rendering, so the server HTML of a subsite page had no `subsite` / `subsite-root` body class and the class appeared only after hydration. The component now falls back to the `subsite` component of the content object it already receives, and copies it into the store during server rendering, so the server and the client produce the same body classes. 


### Internal

- Cover `SubsiteLoader` with unit tests: the body classes on the subsite root and below it, and the two cases that render nothing. The tests resolve `react-redux`, `redux`, `classnames` and `react-router-dom` from Volto, because pnpm does not link Volto's dependencies into the add-on package. 
- Publish to npm from GitHub Actions with trusted publishing (OIDC) and provenance, in the `npm` environment, when a GitHub release is published. `make release` no longer publishes from the local machine. 


### Tests

- Align the `SubsiteLoader` tests with the SSR fallback: content carrying a subsite while the store is empty renders the body classes, and only a missing subsite in both places renders nothing. 

## 5.0.0 (2026-11-25)


### Breaking

- Volto 19 support. The add-on is developed and released for Volto 19 and also builds against Volto 18, which the unit tests cover; projects on Volto 16 or 17 should stay on the 4.x line. The repository is a pnpm monorepo and the add-on moved to `packages/volto-subsites`; the Yarn and npm lock files were replaced by pnpm (`pnpm-lock.yaml`, `pnpm-workspace.yaml`, `packageManager: pnpm@10.20.0`), so the development workflow is now `pnpm install`, `pnpm start`, `pnpm test`, and `pnpm build`. 


### Bugfix

- Ship the LICENSE file in the published package: npm takes it only from the package directory, so the npm page had no license text even though the package declares MIT. 


### Internal

- Added a Vitest setup (`vitest.config.mjs`), the Cypress and Storybook scaffolds, and GitHub Actions workflows for CI and the towncrier changelog check, following the Volto 19 add-on structure. The changelog workflow now targets `master`, the default branch of the repository, instead of the non-existent `main` branch. 


### Documentation

- Added the Sphinx documentation scaffold using Plone Sphinx Theme with a Read the Docs configuration, added the towncrier `news/` directory, and backfilled the release notes of the 1.0.0 to 4.0.2 releases from the Git history. 

## 4.0.2 (2024-06-18)

### Bugfix

- Fixed the handling of an empty subsite object.

## 4.0.1 (2024-06-11)

### Bugfix

- Fixed the client and SSR mismatch.

## 4.0.0 (2022-10-30)

### Breaking

- Upgraded the dependencies and the Babel configuration for Volto 16.

### Bugfix

- Fixed the declared dependencies.

## 3.0.4 (2022-10-07)

### Bugfix

- Fixed a race condition while rendering when the content data was not fully loaded.

## 3.0.3 (2022-09-05)

### Internal

- Published the package to npm automatically on release.

## 3.0.2 (2022-09-05)

### Bugfix

- Handled a missing subsite in the content.

## 3.0.1 (2022-09-01)

### Bugfix

- Fixed the empty subsite case.

## 3.0.0 (2022-08-31)

### Breaking

- Removed the subsite API calls; the subsite data is now read from the content that is already loaded (#6).

## 2.1.5 (2022-08-05)

### Bugfix

- Fixed loading the subsite.

## 2.1.4 (2022-08-05)

### Bugfix

- Fixed the `asyncPropsExtenders`.

## 2.1.3 (2022-08-05)

### Internal

- Reverted the `asyncPropExtender` change.

## 2.1.2 (2022-08-05)

### Bugfix

- Removed the unnecessary `apiPath` from the `getSubsite` async props extenders.

## 2.1.1 (2022-01-27)

### Bugfix

- Checked whether the pathname ends with `@subsite`.

## 2.1.0 (2021-10-25)

### Internal

- Upgraded to Volto 14 and switched the i18n setup to `@plone/scripts`.

## 2.0.3 (2021-10-14)

### Bugfix

- Fixed the subsite calls and avoided the duplicated requests.

### Internal

- Fixed the code checks and removed a leftover `console.log`.

### Documentation

- Updated the README and fixed a broken link.

## 2.0.2 (2021-07-05)

### Internal

- Added the control panel icon.

## 2.0.1 (2021-04-09)

### Bugfix

- Fixed the `async` prop extender.

## 2.0.0 (2021-03-24)

### Breaking

- Added Volto 12 compatibility.

### Internal

- Added the local translations and updated them.

### Documentation

- Documented the Volto 12 compatibility.

## 1.1.0 (2021-02-25)

### Feature

- Added the `extendableAsyncConnect` helper for SSR.

### Bugfix

- Fixed the `asyncConnect` import and the `getSubsite` URL during SSR.

## 1.0.2 (2021-01-12)

### Bugfix

- Added `flattenToAppURL` to `getSubsites`.

## 1.0.1 (2020-11-02)

### Bugfix

- Fixed the `SubsiteLoader`.

### Documentation

- Updated the README and added the changelog.

## 1.0.0 (2020-11-02)

### Feature

- Created the add-on with `volto-cli`, with the `SubsiteLoader` component, the subsite action and reducer, and the `isSubsiteRoot` helper.
- Added the `subsite-root` class to the body element.

### Documentation

- Updated the README.
