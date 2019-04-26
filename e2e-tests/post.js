const category = require('./category.page');
const post = require('./post.page');

let firstArticleHeading, secondArticleHeading, thirdArticleHeading;

describe('post.js - Post in Home category', function () {
    describe(': First', function () {
        beforeEach(function () {
            browser.url('./');
            firstArticleHeading = category.itemsHeadings[0].getText();
            secondArticleHeading = category.itemsHeadings[1].getText();
            category.itemsHeadings[0].click();
        });

        it('should have correct heading', function () {
            const heading = post.heading.getText();
            expect(heading).to.equal(firstArticleHeading);
        });

        it('should have main image with caption', function () {
            const imgIsExisting = post.mainImage.isExisting();
            expect(imgIsExisting).to.be.true;

            const imgCaptionIsExisting = post.mainImageCaption.isExisting();
            expect(imgCaptionIsExisting).to.be.true;
        });

        it('should have at least 1 paragraph', function () {
            const paragrapsQty = post.paragraphs.length;
            expect(paragrapsQty).to.be.at.least(1);
        });

        it('should have correct author info', function () {
            const info = post.authorInfo.getText();
            const regExpTest = post.authorInfoRegExp.test(info);
            expect(regExpTest).to.be.true;
        });

        it('should have clickable author link', function () {
            const linkText = post.authorLink.getText();
            post.authorLink.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(linkText);
        });

        it('should have correct date info', function () {
            const dateInfo = post.dateInfo.getText();
            const regExpTest = post.dateInfoRegExp.test(dateInfo);
            expect(regExpTest).to.be.true;
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = post.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should not have link to the previous post', function () {
            const isExisting = post.prevLink.isExisting();
            expect(isExisting).to.be.false;
        });

        it('should have correct link to the next post', function () {
            const text = post.nextLink.getText();
            expect(text).to.equal('След.');

            post.nextLink.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Мировые рейтинги 2018: Молодежь укрепляет позиции — WaterSkiWorld.ru');
        });
    });

    describe(': Second', function () {
        beforeEach(function () {
            browser.url('./');
            firstArticleHeading = category.itemsHeadings[0].getText();
            secondArticleHeading = category.itemsHeadings[1].getText();
            thirdArticleHeading = category.itemsHeadings[2].getText();
            category.itemsHeadings[1].click();
        });

        it('should have correct heading', function () {
            const heading = post.heading.getText();
            expect(heading).to.equal(secondArticleHeading);
        });

        it('should have main image with caption', function () {
            const imgIsExisting = post.mainImage.isExisting();
            expect(imgIsExisting).to.be.true;

            const imgCaptionIsExisting = post.mainImageCaption.isExisting();
            expect(imgCaptionIsExisting).to.be.true;
        });

        it('should have at least 1 paragraph', function () {
            const paragrapsQty = post.paragraphs.length;
            expect(paragrapsQty).to.be.at.least(1);
        });

        it('should have correct author info', function () {
            const info = post.authorInfo.getText();
            const regExpTest = post.authorInfoRegExp.test(info);
            expect(regExpTest).to.be.true;
        });

        it('should have clickable author link', function () {
            const linkText = post.authorLink.getText();
            post.authorLink.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(linkText);
        });

        it('should have correct date info', function () {
            const dateInfo = post.dateInfo.getText();
            const regExpTest = post.dateInfoRegExp.test(dateInfo);
            expect(regExpTest).to.be.true;
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = post.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have correct link to the previous post', function () {
            const text = post.prevLink.getText();
            expect(text).to.equal('Пред.');

            post.prevLink.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(firstArticleHeading);
        });

        it('should have correct link to the next post', function () {
            const text = post.nextLink.getText();
            expect(text).to.equal('След.');

            post.nextLink.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.include(thirdArticleHeading);
        });
    });

    describe(': Last', function () {
        beforeEach(function () {
            browser.url('./novosti/1-kubok-mira-2008-po-vodnym-lyzham-i-vejkbordu')
        });

        it('should have correct heading', function () {
            const heading = post.heading.getText();
            expect(heading).to.equal('Кубок мира 2008 по водным лыжам и вейкборду');
        });

        it('should have main image with caption', function () {
            const imgIsExisting = post.mainImage.isExisting();
            expect(imgIsExisting).to.be.true;

            const imgCaptionText = post.mainImageCaption.getText();
            expect(imgCaptionText).to.equal('Freddy Krueger, Jaret Llewellyn и Ryan Dodd (фото Des Burke-Kennedy)');
        });

        it('should have 8 paragraphs', function () {
            const paragrapsQty = post.paragraphs.length;
            expect(paragrapsQty).to.equal(8);
        });

        it('should have correct author info', function () {
            const info = post.authorInfo.getText();
            expect(info).to.equal('Автор: Юрий Нехаевский (мл.)');
        });

        it('should have clickable author link', function () {
            post.authorLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Юрий Нехаевский (мл.) — WaterSkiWorld.ru');
        });

        it('should have correct date info', function () {
            const dateInfo = post.dateInfo.getText();
            expect(dateInfo).to.equal('Опубликовано: 10.06.2008');
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = post.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have correct link to the previous post', function () {
            const text = post.prevLink.getText();
            expect(text).to.equal('Пред.');

            post.prevLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Избран новый Президент Федерации воднолыжного спорта России — WaterSkiWorld.ru');
        });
        
        it('should not have link to the next post', function () {
            const isExisting = post.nextLink.isExisting();
            expect(isExisting).to.be.false;
        });
    });
});
