# WaterSkiWorld.ru <!-- omit in toc -->
- [Build](#build)
- [End-To-End Testing](#end-to-end-testing)
- [Changelog](#changelog)

## Build
Build development version
    
    npm run dev

Build production version

    npm run build


## End-To-End Testing
### Run tests on DEV <!-- omit in toc -->
Run all e2e-tests

    npm test

Run single e2e-test

    wdio --spec=e2e-tests/category-ads.js

### Run e2e-tests on ST <!-- omit in toc -->
    npm run test:st

### Run e2e-tests on PROD <!-- omit in toc -->
    npm run test:prod

## Changelog
Please read [the corresponding file](CHANGELOG.md) if you're interested in changes made in the project
