const recordsPage = require('./records.page');

describe('Records Page', function () {
    beforeEach(function () {
        browser.url('./rekordy');
    });

    it('should have correct title', function () {
        const titleText = recordsPage.pageHeader.getText();
        expect(titleText).to.equal('Рекорды в водных лыжах');
    });

    it('should have correct heading for boat records', function () {
        const headingText = recordsPage.boatRecordsHeading.getText();
        expect(headingText).to.equal('Рекорды за катером');
    });

    it('should have content for boat records', function () {
        const isBodyExisting = recordsPage.boatRecordsBody.isExisting();
        expect(isBodyExisting).to.be.true;
    });

    it('should have correct heading for cable records', function () {
        const headingText = recordsPage.cableRecordsHeading.getText();
        expect(headingText).to.equal('Рекорды за электротягой');
    });

    it('should have content for cable records', function () {
        const isBodyExisting = recordsPage.cableRecordsBody.isExisting();
        expect(isBodyExisting).to.be.true;
    });

    it('should have correct date', function () {
        const dateText = recordsPage.metaBlock.getText();
        expect(dateText).to.equal('Обновлено: 24.10.2018');
    });

    it('should have comments block', function () {
        const commentsAreExisting = recordsPage.commentsBlock.isExisting();
        expect(commentsAreExisting).to.be.true;
    });
});