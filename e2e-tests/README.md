# End-To-End tests for WaterSkiWorld.ru

## Before running tests

* Change directory to e2e-tests
* Run `npm install`

## Run tests on dev site
### Run all tests
    npm test

### Run single test
    wdio --spec=test/category-ads.js

## Run tests on st site

    npm run test:st

## Run tests on prod site

    npm run test:prod
