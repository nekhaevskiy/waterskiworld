const techniquePage = require('./category.page');

describe('Adverts', function () {
    beforeEach(function () {
        browser.url('./category/adverts');
    });

    it('should have correct page header', function () {
        const pageHeader = techniquePage.categoryHeading.getText();
        expect(pageHeader).to.equal('Объявления');
    });

    it('should have 1 item', function () {
        const items = techniquePage.items;
        expect(items).to.have.lengthOf(1);
    });

    it('should have 1 advert title', function () {
        const titles = techniquePage.itemsHeadings;
        expect(titles).to.have.lengthOf(1);
    });

    it('should have 1 meta block', function () {
        const metaBlocks = techniquePage.metaBlocks;
        expect(metaBlocks).to.have.lengthOf(1);
    });

    it('should have 1 links to author', function () {
        const authorLinks = techniquePage.authorLinks;
        expect(authorLinks).to.have.lengthOf(1);
    });

    it('should have 1 thumb', function () {
        const thumbs = techniquePage.thumbs;
        expect(thumbs).to.have.lengthOf(1);
    });

    it('should have 1 summary', function () {
        const summmaries = techniquePage.summaries;
        expect(summmaries).to.have.lengthOf(1);
    });

    it('should have 1 Read More links', function () {
        const readMoreLinks = techniquePage.readMoreLinks;
        expect(readMoreLinks).to.have.lengthOf(1);
    });

    describe('First item', function () {
        it('should have correct and clickable heading', function () {
            const articleTitle = techniquePage.itemsHeadings[0];
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
            const articleTitle = techniquePage.itemsHeadings[0].getText();
            const readMoreLink = techniquePage.readMoreLinks[0];

            const linkText = readMoreLink.getText();
            expect(linkText).to.equal('Читать далее →');

            readMoreLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(articleTitle);
        });
    });
});
