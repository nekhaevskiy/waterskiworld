const homepage = require('./category.page');

describe('category-homepage.js - Homepage', function () {
    describe(': First page', function () {
        beforeEach(function () {
            browser.url('/');
        });

        it('should have 10 article items', function () {
            const items = homepage.items;
            expect(items).to.have.lengthOf(10);
        });

        describe(': First article', function () {
            it('should have correct and clickable link', function () {
                const articleTitle = homepage.itemsHeadings[0].getText();
                const link = homepage.itemsLinks[0];
                link.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(articleTitle);
            });

            it('should have a thumb', function () {
                const isExisting = homepage.thumbs[0].isExisting();
                expect(isExisting).to.be.true;
            });
    
            it('should have a summary', function () {
                const summmaryHeight = homepage.summaries[0].getElementSize('height');
                expect(summmaryHeight).to.be.above(0);
            });
    
            it('should have correct date', function () {
                const date = homepage.dates[0].getText();
                const regExpTest = homepage.dateRegExp.test(date);
                expect(regExpTest).to.be.true;
            });
        });

        describe(': Pagination', function () {
            it('should not have link to the previous page', function () {
                const isExisting = homepage.prevLink.isExisting();
                expect(isExisting).to.be.false;
            });

            it('should have correct link to the next page', function () {
                const text = homepage.nextLink.getText();
                expect(text).to.equal('След.');
                homepage.nextLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.equal('WaterSkiWorld.ru — Страница 2 — Воднолыжный Мир');
            });
        });
    });

    describe(': Second page', function () {
        beforeEach(function () {
            browser.url('./page/2');
        });

        it('should have correct link to the previous page', function () {
            const text = homepage.prevLink.getText();
            expect(text).to.equal('Пред.');
            homepage.prevLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('WaterSkiWorld.ru — Воднолыжный Мир');
        });

        it('should have correct link to the next page', function () {
            const text = homepage.nextLink.getText();
            expect(text).to.equal('След.');
            homepage.nextLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('WaterSkiWorld.ru — Страница 3 — Воднолыжный Мир');
        });
    });

    describe('Last page', function () {
        beforeEach(function () {
            browser.url('./page/62');
        });

        it('should have correct link to the previous page', function () {
            const text = homepage.prevLink.getText();
            expect(text).to.equal('Пред.');
            homepage.prevLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('WaterSkiWorld.ru — Страница 61 — Воднолыжный Мир');
        });

        it('should not have link to the next page', function () {
            const isExisting = homepage.nextLink.isExisting();
            expect(isExisting).to.be.false;
        });
    });
});
