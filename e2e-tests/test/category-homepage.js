const homepage = require('./category.page');

describe('Homepage articles', function () {
    describe('First page', function () {
        beforeEach(function () {
            browser.url('/');
        });

        it('should have 10 items', function () {
            const items = homepage.items;
            expect(items).to.have.lengthOf(10);
        });

        it('should have 10 article titles', function () {
            const titles = homepage.itemsHeadings;
            expect(titles).to.have.lengthOf(10);
        });

        it('should have 10 meta blocks', function () {
            const metaBlocks = homepage.metaBlocks;
            expect(metaBlocks).to.have.lengthOf(10);
        });

        it('should have 10 links to author', function () {
            const authorLinks = homepage.authorLinks;
            expect(authorLinks).to.have.lengthOf(10);
        });

        it('should have 10 thumbs', function () {
            const thumbs = homepage.thumbs;
            expect(thumbs).to.have.lengthOf(10);
        });

        it('should have 10 summaries', function () {
            const summmaries = homepage.summaries;
            expect(summmaries).to.have.lengthOf(10);
        });

        it('should have 10 Read More links', function () {
            const readMoreLinks = homepage.readMoreLinks;
            expect(readMoreLinks).to.have.lengthOf(10);
        });

        describe('First item', function () {
            it('should have correct and clickable heading', function () {
                const articleTitle = homepage.itemsHeadings[0];
                const text = articleTitle.getText();
                articleTitle.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(text);
            });

            it('should have correct and clickable author', function () {
                const authorLink = homepage.authorLinks[0];
                const text = authorLink.getText();
                authorLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(text);
            });

            it('should have correct and clickable Read More link', function () {
                const articleTitle = homepage.itemsHeadings[0].getText();
                const readMoreLink = homepage.readMoreLinks[0];

                const linkText = readMoreLink.getText();
                expect(linkText).to.equal('Читать далее →');

                readMoreLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(articleTitle);
            });
        });

        describe('Pagination', function () {
            it('should not have link to the next page', function () {
                const nextLinkExist = homepage.nextLink.isExisting();
                expect(nextLinkExist).to.be.false;
            });

            it('should have correct link to the previous page', function () {
                const prevLinkText = homepage.prevLink.getText();
                expect(prevLinkText).to.equal('Пред. →');

                homepage.prevLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include('Страница 2');
            });
        });
    });

    describe('Second page', function () {
        beforeEach(function () {
            browser.url('./page/2');
        });

        it('should have correct link to the next page', function () {
            const nextLinkText = homepage.nextLink.getText();
            expect(nextLinkText).to.equal('← След.');

            homepage.nextLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('WaterSkiWorld.ru - Воднолыжный Мир');
        });

        it('should have correct link to the previous page', function () {
            const prevLinkText = homepage.prevLink.getText();
            expect(prevLinkText).to.equal('Пред. →');

            homepage.prevLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include('Страница 3');
        });
    });

    describe('Last page', function () {
        beforeEach(function () {
            browser.url('./page/62');
        });

        it('should have correct link to the next page', function () {
            const nextLinkText = homepage.nextLink.getText();
            expect(nextLinkText).to.equal('← След.');

            homepage.nextLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include('Страница 61');
        });

        it('should not have link to the previous page', function () {
            const prevLinkExist = homepage.prevLink.isExisting();
            expect(prevLinkExist).to.be.false;
        });
    });
});