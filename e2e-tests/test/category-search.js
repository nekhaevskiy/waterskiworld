const searchPage = require('./category.page');

describe('Search', function () {
    describe('First page', function () {
        beforeEach(function () {
            browser.url('./?s=водные+лыжи');
        });

        it('should have correct heading', function () {
            const title = browser.getTitle();
            expect(title).to.equal('Вы искали водные лыжи - WaterSkiWorld.ru');
        });

        it('should have correct heading', function () {
            const pageHeader = searchPage.categoryHeading.getText();
            expect(pageHeader).to.equal('Результаты поиска');
        });

        it('should have correct value of search input', function () {
            const inputValue = searchPage.searchInput.getValue();
            expect(inputValue).to.equal('водные лыжи');
        });

        it('should not redirect to another search page after submit empty field', function () {
            searchPage.searchInput.setValue('');
            searchPage.searchBtn.click();
            const inputHasFocus = searchPage.searchInput.hasFocus();
            expect(inputHasFocus).to.be.true;
        });

        it('should redirect to another search page after input correct value and submit', function () {
            searchPage.searchInput.setValue('василий');
            searchPage.searchBtn.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Вы искали василий - WaterSkiWorld.ru');
        });

        it('should have 10 items', function () {
            const items = searchPage.items;
            expect(items).to.have.lengthOf(10);
        });

        it('should have 10 article titles', function () {
            const titles = searchPage.itemsHeadings;
            expect(titles).to.have.lengthOf(10);
        });

        it('should have 10 meta blocks', function () {
            const metaBlocks = searchPage.metaBlocks;
            expect(metaBlocks).to.have.lengthOf(10);
        });

        it('should have 10 links to author', function () {
            const authorLinks = searchPage.authorLinks;
            expect(authorLinks).to.have.lengthOf(10);
        });

        it('should have 10 thumbs', function () {
            const thumbs = searchPage.thumbs;
            expect(thumbs).to.have.lengthOf(10);
        });

        it('should have 10 summaries', function () {
            const summmaries = searchPage.summaries;
            expect(summmaries).to.have.lengthOf(10);
        });

        it('should have 10 Read More links', function () {
            const readMoreLinks = searchPage.readMoreLinks;
            expect(readMoreLinks).to.have.lengthOf(10);
        });

        describe('First item', function () {
            it('should have correct and clickable heading', function () {
                const articleTitle = searchPage.itemsHeadings[0];
                const text = articleTitle.getText();
                articleTitle.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(text);
            });

            it('should have correct and clickable author', function () {
                const authorLink = searchPage.authorLinks[0];
                const text = authorLink.getText();
                authorLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(text);
            });

            it('should have correct and clickable Read More link', function () {
                const articleTitle = searchPage.itemsHeadings[0].getText();
                const readMoreLink = searchPage.readMoreLinks[0];

                const linkText = readMoreLink.getText();
                expect(linkText).to.equal('Читать далее →');

                readMoreLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(articleTitle);
            });
        });

        describe('Pagination', function () {
            it('should not have link to the next page', function () {
                const nextLinkExist = searchPage.nextLink.isExisting();
                expect(nextLinkExist).to.be.false;
            });

            it('should have correct link to the previous page', function () {
                const prevLinkText = searchPage.prevLink.getText();
                expect(prevLinkText).to.equal('Пред. →');

                searchPage.prevLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.equal('Вы искали водные лыжи - Страница 2 из 10 - WaterSkiWorld.ru');
            });
        });
    });

    describe('Second page', function () {
        beforeEach(function () {
            browser.url('./page/2?s=водные+лыжи');
        });

        it('should have correct link to the next page', function () {
            const nextLinkText = searchPage.nextLink.getText();
            expect(nextLinkText).to.equal('← След.');

            searchPage.nextLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Вы искали водные лыжи - WaterSkiWorld.ru');
        });

        it('should have correct link to the previous page', function () {
            const prevLinkText = searchPage.prevLink.getText();
            expect(prevLinkText).to.equal('Пред. →');

            searchPage.prevLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Вы искали водные лыжи - Страница 3 из 10 - WaterSkiWorld.ru');
        });
    });

    describe('Last page', function () {
        beforeEach(function () {
            browser.url('./page/10?s=водные+лыжи');
        });

        it('should have correct link to the next page', function () {
            const nextLinkText = searchPage.nextLink.getText();
            expect(nextLinkText).to.equal('← След.');

            searchPage.nextLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Вы искали водные лыжи - Страница 9 из 10 - WaterSkiWorld.ru');
        });

        it('should not have link to the previous page', function () {
            const prevLinkExist = searchPage.prevLink.isExisting();
            expect(prevLinkExist).to.be.false;
        });
    });
});