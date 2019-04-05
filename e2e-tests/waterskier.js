const waterskierPage = require('./waterskier.page');

describe('Waterskier', function () {
    describe('First', function () {
        beforeEach(function () {
            browser.url('./vodnolyzhniki/361-jepsen-maj');
        });

        it('should have correct heading', function () {
            const heading = waterskierPage.heading.getText();
            expect(heading).to.equal('Jepsen Maj Lund (Дания)');
        });

        it('should have photo', function () {
            const isExisting = waterskierPage.photo.isExisting();
            expect(isExisting).to.be.true;
        });

        it('should have at least 1 paragraph', function () {
            const paragrapsQty = waterskierPage.paragraphs.length;
            expect(paragrapsQty).to.be.at.least(1);
        });

        it('should have correct date info', function () {
            const dateInfo = waterskierPage.dateInfo.getText();
            const regExpTest = waterskierPage.dateInfoRegExp.test(dateInfo);
            expect(regExpTest).to.be.true;
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = waterskierPage.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have link to the previous waterskier page with correct text but without href attribute', function () {
            const text = waterskierPage.linkPrev.getText();
            expect(text).to.equal('chevronLeft icon Пред.');

            const href = waterskierPage.linkPrev.getAttribute('href');
            expect(href).to.be.null;
        });

        it('should have correct link to the next waterskier page', function () {
            const text = waterskierPage.linkNext.getText();
            expect(text).to.equal('След. chevronRight icon');

            waterskierPage.linkNext.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Потэс Инесса (Беларусь) - WaterSkiWorld.ru');
        });
    });

    describe('Second', function () {
        beforeEach(function () {
            browser.url('./vodnolyzhniki/345-potes-inessa');
        });

        it('should have correct heading', function () {
            const heading = waterskierPage.heading.getText();
            expect(heading).to.equal('Потэс Инесса (Беларусь)');
        });

        it('should have photo', function () {
            const isExisting = waterskierPage.photo.isExisting();
            expect(isExisting).to.be.true;
        });

        it('should have at least 1 paragraph', function () {
            const paragrapsQty = waterskierPage.paragraphs.length;
            expect(paragrapsQty).to.be.at.least(1);
        });

        it('should have correct date info', function () {
            const dateInfo = waterskierPage.dateInfo.getText();
            const regExpTest = waterskierPage.dateInfoRegExp.test(dateInfo);
            expect(regExpTest).to.be.true;
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = waterskierPage.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have correct link to the previous waterskier page', function () {
            const text = waterskierPage.linkPrev.getText();
            expect(text).to.equal('chevronLeft icon Пред.');

            waterskierPage.linkPrev.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Мэй Лунд Йепсен (Maj Lund Jepsen)');
        });

        it('should have correct link to the next waterskier page', function () {
            const text = waterskierPage.linkNext.getText();
            expect(text).to.equal('След. chevronRight icon');

            waterskierPage.linkNext.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Жуков Юрий (Россия) - WaterSkiWorld.ru');
        });
    });

    describe('Last', function () {
        beforeEach(function () {
            browser.url('./vodnolyzhniki/31-kovalenko-anna');
        });

        it('should have correct heading', function () {
            const heading = waterskierPage.heading.getText();
            expect(heading).to.equal('Коваленко Анна (Россия)');
        });

        it('should have photo', function () {
            const isExisting = waterskierPage.photo.isExisting();
            expect(isExisting).to.be.true;
        });

        it('should have at least 1 paragraph', function () {
            const paragrapsQty = waterskierPage.paragraphs.length;
            expect(paragrapsQty).to.be.at.least(1);
        });

        it('should have correct date info', function () {
            const dateInfo = waterskierPage.dateInfo.getText();
            const regExpTest = waterskierPage.dateInfoRegExp.test(dateInfo);
            expect(regExpTest).to.be.true;
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = waterskierPage.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have correct link to the previous waterskier page', function () {
            const text = waterskierPage.linkPrev.getText();
            expect(text).to.equal('chevronLeft icon Пред.');

            waterskierPage.linkPrev.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Ветров Дмитрий (Россия) - WaterSkiWorld.ru');
        });
        
        it('should have link to the next waterskier page with correct text but without href attribute', function () {
            const text = waterskierPage.linkNext.getText();
            expect(text).to.equal('След. chevronRight icon');
            
            const href = waterskierPage.linkNext.getAttribute('href');
            expect(href).to.be.null;
        });
    });
});
