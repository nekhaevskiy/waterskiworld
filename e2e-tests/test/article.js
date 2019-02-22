const article = require('./article.page');
const homepage = require('./category.page');

let firstArticleTitle, secondArticleTitle, thirdArticleTitle;

describe('Article', function () {
    describe('First', function () {
        beforeEach(function () {
            browser.url('./');
            firstArticleTitle = homepage.itemsHeadings[0].getText();
            secondArticleTitle = homepage.itemsHeadings[1].getText();
            homepage.itemsHeadings[0].click();
        });

        it('should have correct header', function () {
            const titleText = article.heading.getText();
            expect(titleText).to.equal(firstArticleTitle);
        });

        it('should have correct meta', function () {
            const metaText = article.meta.getText();
            const regExpTest = article.metaRegExp.test(metaText);
            expect(regExpTest).to.be.true;
        });

        it('should have clickable author', function () {
            const authorText = article.authorLink.getText();
            article.authorLink.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(authorText);
        });

        it('should have image with caption', function () {
            const imgIsExisting = article.image.isExisting();
            expect(imgIsExisting).to.be.true;

            const imgCaptionIsExisting = article.imageCaption.isExisting();
            expect(imgCaptionIsExisting).to.be.true;
        });

        it('should have at least 1 paragraph', function () {
            const paragrapsQty = article.paragraphs.length;
            expect(paragrapsQty).to.be.at.least(1);
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = article.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have correct link to the previous article', function () {
            const prevArticleLinkText = article.prevArticleLink.getText();
            expect(prevArticleLinkText).to.equal('Пред. →');

            article.prevArticleLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(secondArticleTitle);
        });

        it('should not have link to the next article', function () {
            const nextArticleLinkIsExisting = article.nextArticleLink.isExisting();
            expect(nextArticleLinkIsExisting).to.be.false;
        });
    });

    describe('Second', function () {
        beforeEach(function () {
            browser.url('./');
            firstArticleTitle = homepage.itemsHeadings[0].getText();
            secondArticleTitle = homepage.itemsHeadings[1].getText();
            thirdArticleTitle = homepage.itemsHeadings[2].getText();
            homepage.itemsHeadings[1].click();
        });

        it('should have correct header', function () {
            const titleText = article.heading.getText();
            expect(titleText).to.equal(secondArticleTitle);
        });

        it('should have correct meta', function () {
            const metaText = article.meta.getText();
            const regExpTest = article.metaRegExp.test(metaText);
            expect(regExpTest).to.be.true;
        });

        it('should have clickable author', function () {
            const authorText = article.authorLink.getText();
            article.authorLink.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(authorText);
        });

        it('should have image with caption', function () {
            const imgIsExisting = article.image.isExisting();
            expect(imgIsExisting).to.be.true;

            const imgCaptionIsExisting = article.imageCaption.isExisting();
            expect(imgCaptionIsExisting).to.be.true;
        });

        it('should have at least 1 paragraph', function () {
            const paragrapsQty = article.paragraphs.length;
            expect(paragrapsQty).to.be.at.least(1);
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = article.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have correct link to the previous article', function () {
            const prevArticleLinkText = article.prevArticleLink.getText();
            expect(prevArticleLinkText).to.equal('Пред. →');

            article.prevArticleLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(thirdArticleTitle);
        });

        it('should have correct link to the next article', function () {
            const nextArticleLinkText = article.nextArticleLink.getText();
            expect(nextArticleLinkText).to.equal('← След.');

            article.nextArticleLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(firstArticleTitle);
        });
    });

    describe('Last', function () {
        beforeEach(function () {
            browser.url('./novosti/1-kubok-mira-2008-po-vodnym-lyzham-i-vejkbordu')
        });

        it('should have correct header', function () {
            const titleText = article.heading.getText();
            expect(titleText).to.equal('Кубок мира 2008 по водным лыжам и вейкборду');
        });

        it('should have correct meta', function () {
            const metaText = article.meta.getText();
            expect(metaText).to.equal('10.06.2008, автор: Юрий Нехаевский (мл.)');
        });

        it('should have clickable author', function () {
            article.authorLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Юрий Нехаевский (мл.), автор на WaterSkiWorld.ru');
        });

        it('should have image with caption', function () {
            const imgIsExisting = article.image.isExisting();
            expect(imgIsExisting).to.be.true;

            const imgCaptionText = article.imageCaption.getText();
            expect(imgCaptionText).to.equal('Freddy Krueger, Jaret Llewellyn и Ryan Dodd (фото Des Burke-Kennedy)');
        });

        it('should have 8 paragraphs', function () {
            const paragrapsQty = article.paragraphs.length;
            expect(paragrapsQty).to.equal(8);
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = article.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should not have link to the previous article', function () {
            const prevArticleLinkIsExisting = article.prevArticleLink.isExisting();
            expect(prevArticleLinkIsExisting).to.be.false;
        });

        it('should have correct link to the next article', function () {
           const nextArticleLinkText = article.nextArticleLink.getText();
           expect(nextArticleLinkText).to.equal('← След.');

           article.nextArticleLink.click();
           const pageTitle = browser.getTitle();
           expect(pageTitle).to.equal('Избран новый Президент Федерации воднолыжного спорта России - WaterSkiWorld.ru');
        });
    });
});
