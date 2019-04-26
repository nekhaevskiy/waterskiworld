const post = require('./post-waterskier.page');

describe('post-waterskier.js - Waterskier post', function () {
    describe(': First', function () {
        beforeEach(function () {
            browser.url('./vodnolyzhniki/361-jepsen-maj');
        });

        it('should have correct heading', function () {
            const heading = post.heading.getText();
            expect(heading).to.equal('Jepsen Maj Lund (Дания)');
        });

        it('should have photo', function () {
            const isExisting = post.photo.isExisting();
            expect(isExisting).to.be.true;
        });

        it('should have at least 1 paragraph', function () {
            const paragrapsQty = post.paragraphs.length;
            expect(paragrapsQty).to.be.at.least(1);
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
            expect(pageTitle).to.equal('Потэс Инесса (Беларусь) — WaterSkiWorld.ru');
        });
    });

    describe(': Second', function () {
        beforeEach(function () {
            browser.url('./vodnolyzhniki/345-potes-inessa');
        });

        it('should have correct heading', function () {
            const heading = post.heading.getText();
            expect(heading).to.equal('Потэс Инесса (Беларусь)');
        });

        it('should have photo', function () {
            const isExisting = post.photo.isExisting();
            expect(isExisting).to.be.true;
        });

        it('should have at least 1 paragraph', function () {
            const paragrapsQty = post.paragraphs.length;
            expect(paragrapsQty).to.be.at.least(1);
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
            expect(pageTitle).to.equal('Jepsen Maj Lund (Дания) — WaterSkiWorld.ru');
        });

        it('should have correct link to the next post', function () {
            const text = post.nextLink.getText();
            expect(text).to.equal('След.');
            post.nextLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Жуков Юрий (Россия) — WaterSkiWorld.ru');
        });
    });

    describe(': Last', function () {
        beforeEach(function () {
            browser.url('./vodnolyzhniki/31-kovalenko-anna');
        });

        it('should have correct heading', function () {
            const heading = post.heading.getText();
            expect(heading).to.equal('Коваленко Анна (Россия)');
        });

        it('should have photo', function () {
            const isExisting = post.photo.isExisting();
            expect(isExisting).to.be.true;
        });

        it('should have at least 1 paragraph', function () {
            const paragrapsQty = post.paragraphs.length;
            expect(paragrapsQty).to.be.at.least(1);
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
            expect(pageTitle).to.equal('Ветров Дмитрий (Россия) — WaterSkiWorld.ru');
        });
        
        it('should not have link to the next post', function () {
            const isExisting = post.nextLink.isExisting();
            expect(isExisting).to.be.false;
        });
    });
});
