const recordsPage = require('./records.page');

describe('records.js: Records Page', function () {
    beforeEach(function () {
        browser.url('./rekordy');
    });

    it('should have correct heading', function () {
        const heading = recordsPage.pageHeading.getText();
        expect(heading).to.equal('Рекорды');
    });

    it('should have Boat World Records inside', function () {
        const heading = recordsPage.boatWorldRecordsHeading.getText();
        expect(heading).to.equal('Рекорды мира за катером');
    });

    it('should have Boat Europe Records inside', function () {
        const heading = recordsPage.boatEuropeRecordsHeading.getText();
        expect(heading).to.equal('Рекорды Европы за катером');
    });
    
    it('should have Boat Russia Records inside', function () {
        const heading = recordsPage.boatRussiaRecordsHeading.getText();
        expect(heading).to.equal('Рекорды России за катером');
    });
    
    it('should have Cable Russia Records inside', function () {
        const heading = recordsPage.cableRussiaRecordsHeading.getText();
        expect(heading).to.equal('Рекорды России за электротягой');
    });

    it('should have correct date info', function () {
        const dateInfo = recordsPage.dateInfo.getText();
        const regExpTest = recordsPage.dateInfoRegExp.test(dateInfo);
        expect(regExpTest).to.be.true;
    });

    it('should have a Facebook container with height > 0', function() {
        const containerHeight = recordsPage.facebookContainer.getElementSize('height');
        expect(containerHeight).to.be.above(0);
    });
});
