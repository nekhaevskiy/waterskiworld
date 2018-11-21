const howToSkiPage = require('./category.page');

describe('How To Ski articles', function () {
    describe('First page', function () {
        beforeEach(function () {
            browser.url('./category/tekhnika-kataniya');
        });

        it('should have correct page header', function () {
            const pageHeader = howToSkiPage.pageHeader.getText();
            expect(pageHeader).to.equal('Техника катания');
        });

        it('should have 10 items', function () {
            const items = howToSkiPage.items;
            expect(items).to.have.lengthOf(10);
        });

        it('should have 10 article titles', function () {
            const titles = howToSkiPage.titles;
            expect(titles).to.have.lengthOf(10);
        });

        it('should have 10 meta blocks', function () {
            const metaBlocks = howToSkiPage.metaBlocks;
            expect(metaBlocks).to.have.lengthOf(10);
        });

        it('should have 10 links to author', function () {
            const authorLinks = howToSkiPage.authorLinks;
            expect(authorLinks).to.have.lengthOf(10);
        });

        it('should have 7 thumbs', function () {
            const thumbs = howToSkiPage.thumbs;
            expect(thumbs).to.have.lengthOf(7);
        });

        it('should have 10 summaries', function () {
            const summmaries = howToSkiPage.summaries;
            expect(summmaries).to.have.lengthOf(10);
        });

        it('should have 10 Read More links', function () {
            const readMoreLinks = howToSkiPage.readMoreLinks;
            expect(readMoreLinks).to.have.lengthOf(10);
        });

        describe('First item', function () {
            it('should have correct and clickable title', function () {
                const articleTitle = howToSkiPage.titles[0];
                const text = articleTitle.getText();
                articleTitle.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(text);
            });

            it('should have correct and clickable author', function () {
                const authorLink = howToSkiPage.authorLinks[0];
                const text = authorLink.getText();
                authorLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(text);
            });

            it('should have correct and clickable Read More link', function () {
                const articleTitle = howToSkiPage.titles[0].getText();
                const readMoreLink = howToSkiPage.readMoreLinks[0];

                const linkText = readMoreLink.getText();
                expect(linkText).to.equal('Читать далее →');

                readMoreLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(articleTitle);
            });
        });

        describe('Pagination', function () {
            it('should not have link to the next page', function () {
                const nextLinkExist = howToSkiPage.nextLink.isExisting();
                expect(nextLinkExist).to.be.false;
            });

            it('should have correct link to the previous page', function () {
                const prevLinkText = howToSkiPage.prevLink.getText();
                expect(prevLinkText).to.equal('Пред. →');

                howToSkiPage.prevLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.equal('Техника катания на водных лыжах');
            });
        });
    });

    describe('Second page', function () {
        beforeEach(function () {
            browser.url('./category/tekhnika-kataniya/page/2');
        });

        it('should have correct link to the next page', function () {
            const nextLinkText = howToSkiPage.nextLink.getText();
            expect(nextLinkText).to.equal('← След.');

            howToSkiPage.nextLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Техника катания на водных лыжах');
        });

        it('should not have link to the previous page', function () {
            const prevLinkExist = howToSkiPage.prevLink.isExisting();
            expect(prevLinkExist).to.be.false;
        });
    });
});