const howToSkiCategory = require('./category.page');

describe('category-how-to-ski.js - How to Ski category', function () {
    describe(': First page', function () {
        beforeEach(function () {
            browser.url('./category/tekhnika-kataniya');
        });

        it('should have correct heading', function () {
            const heading = howToSkiCategory.categoryHeading.getText();
            expect(heading).to.equal('Техника катания');
        });

        it('should have 10 article items', function () {
            const items = howToSkiCategory.items;
            expect(items).to.have.lengthOf(10);
        });

        describe(': First article', function () {
            it('should have correct and clickable link', function () {
                const articleTitle = howToSkiCategory.itemsHeadings[0].getText();
                const link = howToSkiCategory.itemsLinks[0];

                link.click();

                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(articleTitle);
            });

            it('should have a thumb', function () {
                const isExisting = howToSkiCategory.thumbs[0].isExisting();
                expect(isExisting).to.be.true;
            });
    
            it('should have a summary', function () {
                const summmaryHeight = howToSkiCategory.summaries[0].getElementSize('height');
                expect(summmaryHeight).to.be.above(0);
            });
    
            it('should have correct date', function () {
                const date = howToSkiCategory.dates[0].getText();
                const regExpTest = howToSkiCategory.dateRegExp.test(date);
                expect(regExpTest).to.be.true;
            });
        });

        describe(': Pagination', function () {
            it('should not have link to the previous page', function () {
                const isExisting = howToSkiCategory.prevLink.isExisting();
                expect(isExisting).to.be.false;
            });

            it('should have correct link to the next page', function () {
                const text = howToSkiCategory.nextLink.getText();
                expect(text).to.equal('След.');

                howToSkiCategory.nextLink.click();

                const pageTitle = browser.getTitle();
                expect(pageTitle).to.equal('Техника катания — Страница 2 — WaterSkiWorld.ru');
            });
        });
    });

    describe(': Second page', function () {
        beforeEach(function () {
            browser.url('./category/tekhnika-kataniya/page/2');
        });

        it('should have correct link to the previous page', function () {
            const text = howToSkiCategory.prevLink.getText();
            expect(text).to.equal('Пред.');

            howToSkiCategory.prevLink.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Техника катания — WaterSkiWorld.ru');
        });

        it('should not have link to the next page', function () {
            const isExisting = howToSkiCategory.nextLink.isExisting();
            expect(isExisting).to.be.false;
        });
    });
});
