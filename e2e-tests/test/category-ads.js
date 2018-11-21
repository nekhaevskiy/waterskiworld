const techniquePage = require('./category.page');

describe('Adverts', function () {
    beforeEach(function () {
        browser.url('./category/adverts');
    });

    it('should have correct page header', function () {
        const pageHeader = techniquePage.pageHeader.getText();
        expect(pageHeader).to.equal('Объявления');
    });

    it('should have 2 items', function () {
        const items = techniquePage.items;
        expect(items).to.have.lengthOf(2);
    });

    it('should have 2 advert titles', function () {
        const titles = techniquePage.titles;
        expect(titles).to.have.lengthOf(2);
    });

    it('should have 2 meta blocks', function () {
        const metaBlocks = techniquePage.metaBlocks;
        expect(metaBlocks).to.have.lengthOf(2);
    });

    it('should have 2 links to author', function () {
        const authorLinks = techniquePage.authorLinks;
        expect(authorLinks).to.have.lengthOf(2);
    });

    it('should have 2 thumbs', function () {
        const thumbs = techniquePage.thumbs;
        expect(thumbs).to.have.lengthOf(2);
    });

    it('should have 2 summaries', function () {
        const summmaries = techniquePage.summaries;
        expect(summmaries).to.have.lengthOf(2);
    });

    it('should have 2 Read More links', function () {
        const readMoreLinks = techniquePage.readMoreLinks;
        expect(readMoreLinks).to.have.lengthOf(2);
    });

    describe('First item', function () {
        it('should have correct and clickable title', function () {
            const articleTitle = techniquePage.titles[0];
            const text = articleTitle.getText();
            articleTitle.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(text);
        });

        it('should have correct and clickable author', function () {
            const authorLink = techniquePage.authorLinks[0];
            const text = authorLink.getText();
            authorLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(text);
        });

        it('should have correct and clickable Read More link', function () {
            const articleTitle = techniquePage.titles[0].getText();
            const readMoreLink = techniquePage.readMoreLinks[0];

            const linkText = readMoreLink.getText();
            expect(linkText).to.equal('Читать далее →');

            readMoreLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(articleTitle);
        });
    });
});