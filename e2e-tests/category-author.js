const categoryAuthor = require('./category-author.page');
const categoryGeneral = require('./category.page');

describe('category-author.js - Author category', function () {
    describe(': First page', function () {
        beforeEach(function () {
            browser.url('./author/vera');
        });

        it('should have avatar', function () {
            const height = categoryAuthor.avatar.getElementSize('height');
            expect(height).to.be.above(0);
        });

        it('should have correct author\'s name', function () {
            const name = categoryAuthor.name.getText();
            expect(name).to.equal('Вера Федорова');
        });

        it('should have a description', function () {
            const height = categoryAuthor.desription.getElementSize('height');
            expect(height).to.be.above(0);
        });

        it('should have correct subheading', function () {
            const subheading = categoryAuthor.subheading.getText();
            expect(subheading).to.equal('Статьи автора:');
        })

        it('should have 10 article items', function () {
            const items = categoryGeneral.items;
            expect(items).to.have.lengthOf(10);
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
                expect(pageTitle).to.equal('Вера Федорова — Страница 2 — WaterSkiWorld.ru');
            });
        });
    });

    describe(': Second page', function () {
        beforeEach(function () {
            browser.url('./author/vera/page/2');
        });

        it('should have correct link to the previous page', function () {
            const text = categoryGeneral.prevLink.getText();
            expect(text).to.equal('Пред.');
            categoryGeneral.prevLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Вера Федорова — WaterSkiWorld.ru');
        });

        it('should have correct link to the next page', function () {
            const text = categoryGeneral.nextLink.getText();
            expect(text).to.equal('След.');
            categoryGeneral.nextLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Вера Федорова — Страница 3 — WaterSkiWorld.ru');
        });
    });

    describe(': Last page', function () {
        beforeEach(function () {
            browser.url('./author/vera/page/40');
        });

        it('should have correct link to the previous page', function () {
            const text = categoryGeneral.prevLink.getText();
            expect(text).to.equal('Пред.');
            categoryGeneral.prevLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Вера Федорова — Страница 39 — WaterSkiWorld.ru');
        });

        it('should not have link to the next page', function () {
            const isExisting = categoryGeneral.nextLink.isExisting();
            expect(isExisting).to.be.false;
        });
    });
});
