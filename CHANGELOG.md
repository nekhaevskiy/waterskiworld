# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog],
and this project adheres to [Semantic Versioning].

## [19.1.0] - 2019-04-05
### Added
- New `nested` CSS class for all editorial content
- Styles for aligning images in posts

### Changed
- All posts moved to Tachyons
- Where To Ski and Records pages moved to Tachyons
- Content of Where To Ski page moved to `page-gde-katatsya.php`
- Navigation buttons between posts (new implementation and Tachyons styles)
- Created the only one `package.json` for folders *e2e-tests* and *src*
- Created the only one `README.md` for folders *e2e-tests* and *src*
- Disabled Wordpress' option to add full-size images
- Release numbers in `CHANGELOG.md` to sync it with years

### Fixed
- Links in `CHANGELOG.md`
- e2e-tests for the whole site

### Removed
- Placeholders for the form fields on the Contacts page
- Tachyons as dev dependency

## [19.0.0] - 2019-02-19
### Added
- Frontend source files including php
- Tachyons
- Gulp: watch, BrowswerSync, lazyRequireTask
- CSS minification and error handling
- Browsers statistics
- Human verification for Contacts page

### Changed
- Concatination all styles in one file
- Update README.md fot e2e-tests
- Update Contacts page with Tachyons
- Improve BE validation on Contacts page

### Fixed
- Padding for editing window in the admin area

### Removed
- Remove Hypercomments' styles
- Map for `bootstrap.min.css`
- Frontend output from Git

## [18.2.0] - 2018-12-17
### Added
- WordPress Theme files
- Facebook Like/Share button and e2e-tests for it
- Indication of site in e2e-test for Contacts page

### Changed
- Change domain from st3.waterskiworld.ru to st.waterskiworld.ru
- Update to WordPress 5

### Fixed
- e2e-test for last page

### Removed
- HyperComments and e2e-tests for them

## [18.1.0] - 2018-12-08
### Added
- CHANGELOG.md

## 18.0.0 - 2018-12-08
### Added
- e2e-tests for three sites: dev, st3, prod

[Keep a Changelog]: https://keepachangelog.com/en/1.0.0/
[Semantic Versioning]: https://semver.org/spec/v2.0.0.html
[19.1.0]: https://github.com/nekhaevskiy/waterskiworld/compare/v19.0.0...v19.1.0
[19.0.0]: https://github.com/nekhaevskiy/waterskiworld/compare/v18.2.0...v19.0.0
[18.2.0]: https://github.com/nekhaevskiy/waterskiworld/compare/v18.1.0...v18.2.0
[18.1.0]: https://github.com/nekhaevskiy/waterskiworld/compare/v18.0.0...v18.1.0
