const whereToSkiPage = require('./where-to-ski.page');

describe('Where to Ski Page', function () {
    beforeEach(function () {
        browser.url('./gde-katatsya');
    });

    it('should have correct heading', function () {
        const titleText = whereToSkiPage.heading.getText();
        expect(titleText).to.equal('Где кататься на водных лыжах');
    });

    it('should have a table with clubs info', function () {
        const isTableExisting = whereToSkiPage.clubsTable.isExisting();
        expect(isTableExisting).to.be.true;
    });

    it('should have a map with clubs', function () {
        const isMapExisting = whereToSkiPage.clubsMap.isExisting();
        expect(isMapExisting).to.be.true;
    });

    it('should have correct date', function () {
        const dateText = whereToSkiPage.metaBlock.getText();
        expect(dateText).to.equal('Обновлено: 29.10.2017');
    });

    it('should have a Facebook container with height > 0', function() {
        const containerHeight = whereToSkiPage.facebookContainer.getElementSize('height');
        expect(containerHeight).to.be.above(0);
    });
});
