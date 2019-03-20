const article = require('./article.page');
const homepage = require('./category.page');

let firstArticleHeading, secondArticleHeading, thirdArticleHeading;

describe('Article', function () {
    describe('First', function () {
        beforeEach(function () {
            browser.url('./');
            firstArticleHeading = homepage.itemsHeadings[0].getText();
            secondArticleHeading = homepage.itemsHeadings[1].getText();
            homepage.itemsHeadings[0].click();
        });

        it('should have correct heading', function () {
            const heading = article.heading.getText();
            expect(heading).to.equal(firstArticleHeading);
        });

        it('should have main image with caption', function () {
            const imgIsExisting = article.mainImage.isExisting();
            expect(imgIsExisting).to.be.true;

            const imgCaptionIsExisting = article.mainImageCaption.isExisting();
            expect(imgCaptionIsExisting).to.be.true;
        });

        it('should have at least 1 paragraph', function () {
            const paragrapsQty = article.paragraphs.length;
            expect(paragrapsQty).to.be.at.least(1);
        });

        it('should have correct author info', function () {
            const info = article.authorInfo.getText();
            const regExpTest = article.authorInfoRegExp.test(info);
            expect(regExpTest).to.be.true;
        });

        it('should have clickable author link', function () {
            const linkText = article.authorLink.getText();
            article.authorLink.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(linkText);
        });

        it('should have correct date info', function () {
            const dateInfo = article.dateInfo.getText();
            const regExpTest = article.dateInfoRegExp.test(dateInfo);
            expect(regExpTest).to.be.true;
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = article.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have a link to the previous article with correct text but without href attribute', function () {
            const text = article.linkPrev.getText();
            expect(text).to.equal('chevronLeft icon Пред.');

            const href = article.linkPrev.getAttribute('href');
            expect(href).to.be.null;
        });

        it('should have a correct link to the next article', function () {
            const text = article.linkNext.getText();
            expect(text).to.equal('След. chevronRight icon');

            article.linkNext.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(secondArticleHeading);
        });
    });

    describe('Second', function () {
        beforeEach(function () {
            browser.url('./');
            firstArticleHeading = homepage.itemsHeadings[0].getText();
            secondArticleHeading = homepage.itemsHeadings[1].getText();
            thirdArticleHeading = homepage.itemsHeadings[2].getText();
            homepage.itemsHeadings[1].click();
        });

        it('should have correct heading', function () {
            const heading = article.heading.getText();
            expect(heading).to.equal(secondArticleHeading);
        });

        it('should have main image with caption', function () {
            const imgIsExisting = article.mainImage.isExisting();
            expect(imgIsExisting).to.be.true;

            const imgCaptionIsExisting = article.mainImageCaption.isExisting();
            expect(imgCaptionIsExisting).to.be.true;
        });

        it('should have at least 1 paragraph', function () {
            const paragrapsQty = article.paragraphs.length;
            expect(paragrapsQty).to.be.at.least(1);
        });

        it('should have correct author info', function () {
            const info = article.authorInfo.getText();
            const regExpTest = article.authorInfoRegExp.test(info);
            expect(regExpTest).to.be.true;
        });

        it('should have clickable author link', function () {
            const linkText = article.authorLink.getText();
            article.authorLink.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(linkText);
        });

        it('should have correct date info', function () {
            const dateInfo = article.dateInfo.getText();
            const regExpTest = article.dateInfoRegExp.test(dateInfo);
            expect(regExpTest).to.be.true;
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = article.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have correct link to the previous article', function () {
            const text = article.linkPrev.getText();
            expect(text).to.equal('chevronLeft icon Пред.');

            article.linkPrev.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(firstArticleHeading);
        });

        it('should have correct link to the next article', function () {
            const text = article.linkNext.getText();
            expect(text).to.equal('След. chevronRight icon');

            article.linkNext.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(thirdArticleHeading);
        });
    });

    describe('Last', function () {
        beforeEach(function () {
            browser.url('./novosti/1-kubok-mira-2008-po-vodnym-lyzham-i-vejkbordu')
        });

        it('should have correct heading', function () {
            const heading = article.heading.getText();
            expect(heading).to.equal('Кубок мира 2008 по водным лыжам и вейкборду');
        });

        it('should have main image with caption', function () {
            const imgIsExisting = article.mainImage.isExisting();
            expect(imgIsExisting).to.be.true;

            const imgCaptionText = article.mainImageCaption.getText();
            expect(imgCaptionText).to.equal('Freddy Krueger, Jaret Llewellyn и Ryan Dodd (фото Des Burke-Kennedy)');
        });

        it('should have 8 paragraphs', function () {
            const paragrapsQty = article.paragraphs.length;
            expect(paragrapsQty).to.equal(8);
        });

        it('should have correct author info', function () {
            const info = article.authorInfo.getText();
            expect(info).to.equal('Автор: Юрий Нехаевский (мл.)');
        });

        it('should have clickable author link', function () {
            article.authorLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Юрий Нехаевский (мл.), автор на WaterSkiWorld.ru');
        });

        it('should have correct date info', function () {
            const dateInfo = article.dateInfo.getText();
            expect(dateInfo).to.equal('Опубликовано: 10.06.2008');
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = article.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have correct link to the previous article', function () {
            const text = article.linkPrev.getText();
            expect(text).to.equal('chevronLeft icon Пред.');

            article.linkPrev.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Избран новый Президент Федерации воднолыжного спорта России - WaterSkiWorld.ru');
        });
        
        it('should have a link to the next article with correct text but without href attribute', function () {
            const text = article.linkNext.getText();
            expect(text).to.equal('След. chevronRight icon');
            
            const href = article.linkNext.getAttribute('href');
            expect(href).to.be.null;
        });
    });
});
