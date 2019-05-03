const adsCategory = require('./category.page');

describe('category-ads.js - Adverts category', function () {
    beforeEach(function () {
        browser.url('./category/adverts');
    });

    it('should have correct heading', function () {
        const heading = adsCategory.categoryHeading.getText();
        expect(heading).to.equal('Объявления');
    });

    it('should have 1 item', function () {
        const items = adsCategory.items;
        expect(items).to.have.lengthOf(1);
    });

    describe(': First ad', function () {
        it('should have correct and clickable link', function () {
            const articleTitle = adsCategory.itemsHeadings[0].getText();
            const link = adsCategory.itemsLinks[0];

            link.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(articleTitle);
        });

        it('should have a thumb', function () {
            const isExisting = adsCategory.thumbs[0].isExisting();
            expect(isExisting).to.be.true;
        });

        it('should have a summary', function () {
            const summmaryHeight = adsCategory.summaries[0].getElementSize('height');
            expect(summmaryHeight).to.be.above(0);
        });

        it('should have correct date', function () {
            const date = adsCategory.dates[0].getText();
            const regExpTest = adsCategory.dateRegExp.test(date);
            expect(regExpTest).to.be.true;
        });
    });
});
