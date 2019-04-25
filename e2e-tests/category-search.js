const categoryGeneral = require('./category.page');
const categorySearch = require('./category-search.page');

describe('category-search.js - Search category', function () {
    describe(': First page', function () {
        beforeEach(function () {
            browser.url('./?s=водные+лыжи');
        });

        it('should have correct heading', function () {
            const heading = categoryGeneral.categoryHeading.getText();
            expect(heading).to.equal('Результаты поиска');
        });

        it('should have correct value of search input', function () {
            const inputValue = categorySearch.searchInput.getValue();
            expect(inputValue).to.equal('водные лыжи');
        });

        it('should not redirect to another search page after submit empty field', function () {
            categorySearch.searchInput.setValue('');
            categorySearch.searchBtn.click();
            
            const hasFocus = categorySearch.searchInput.hasFocus();
            expect(hasFocus).to.be.true;
        });

        it('should redirect to another search page after input correct value and submit', function () {
            categorySearch.searchInput.setValue('василий');
            categorySearch.searchBtn.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Результаты поиска «василий» — WaterSkiWorld.ru');
        });

        it('should have 10 article items', function () {
            const items = categoryGeneral.items;
            expect(items).to.have.lengthOf(10);
        });

        describe(': First article', function () {
            it('should have correct and clickable link', function () {
                const articleTitle = categoryGeneral.itemsHeadings[0].getText();
                const link = categoryGeneral.itemsLinks[0];

                link.click();

                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(articleTitle);
            });

            it('should have a thumb', function () {
                const isExisting = categoryGeneral.thumbs[0].isExisting();
                expect(isExisting).to.be.true;
            });
    
            it('should have a summary', function () {
                const summmaryHeight = categoryGeneral.summaries[0].getElementSize('height');
                expect(summmaryHeight).to.be.above(0);
            });
    
            it('should have correct date', function () {
                const date = categoryGeneral.dates[0].getText();
                const regExpTest = categoryGeneral.dateRegExp.test(date);
                expect(regExpTest).to.be.true;
            });
        });

        describe(': Pagination', function () {
            it('should not have link to the previous page', function () {
                const isExisting = categoryGeneral.prevLink.isExisting();
                expect(isExisting).to.be.false;
            });

            it('should have correct link to the next page', function () {
                const text = categoryGeneral.nextLink.getText();
                expect(text).to.equal('След.');

                categoryGeneral.nextLink.click();

                const pageTitle = browser.getTitle();
                expect(pageTitle).to.equal('Результаты поиска «водные лыжи» — Страница 2 — WaterSkiWorld.ru');
            });
        });
    });

    describe(': Second page', function () {
        beforeEach(function () {
            browser.url('./page/2?s=водные+лыжи');
        });

        it('should have correct link to the previous page', function () {
            const text = categoryGeneral.prevLink.getText();
            expect(text).to.equal('Пред.');

            categoryGeneral.prevLink.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Результаты поиска «водные лыжи» — WaterSkiWorld.ru');
        });

        it('should have correct link to the next page', function () {
            const text = categoryGeneral.nextLink.getText();
            expect(text).to.equal('След.');

            categoryGeneral.nextLink.click();
            
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Результаты поиска «водные лыжи» — Страница 3 — WaterSkiWorld.ru');
        });
    });

    describe(': Last page', function () {
        beforeEach(function () {
            browser.url('./page/10?s=водные+лыжи');
        });

        it('should have correct link to the previous page', function () {
            const text = categoryGeneral.prevLink.getText();
            expect(text).to.equal('Пред.');

            categoryGeneral.prevLink.click();
            
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Результаты поиска «водные лыжи» — Страница 9 — WaterSkiWorld.ru');
        });

        it('should not have link to the next page', function () {
            const isExisting = categoryGeneral.nextLink.isExisting();
            expect(isExisting).to.be.false;
        });
    });
});
