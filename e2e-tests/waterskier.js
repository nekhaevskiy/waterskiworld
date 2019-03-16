const waterskierPage = require('./waterskier.page');

describe('Waterskier', function () {
    describe('First', function () {
        beforeEach(function () {
            browser.url('./vodnolyzhniki/361-jepsen-maj');
        });

        it('should have correct heading', function () {
            const titleText = waterskierPage.pageHeading.getText();
            expect(titleText).to.equal('Мэй Лунд Йепсен \nMaj Lund Jepsen');
        });

        it('should have correct subheading', function () {
            const subtitleText = waterskierPage.pageSubheading.getText();
            expect(subtitleText).to.equal('Бронзовый призер Чемпионата мира в прыжках с трамплина\nЧемпионка Европы в прыжках с трамплина\nЧемпионка Кубка мира в прыжках с трамплина');
        });

        it('should have photo', function () {
            const photoIsExistiing = waterskierPage.photo.isExisting();
            expect(photoIsExistiing).to.be.true;
        });

        it('should have personal records heading', function () {
            const heading = waterskierPage.personalRecordsHeading.getText();
            expect(heading).to.equal('Личные рекорды');
        });

        it('should have correct meta', function () {
            const metaText = waterskierPage.metaBlock.getText();
            expect(metaText).to.equal('Обновлено: 08.11.2013');
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = waterskierPage.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have correct link to the previous waterskier page', function () {
            const prevPageLinkText = waterskierPage.prevPageLink.getText();
            expect(prevPageLinkText).to.equal('Пред. chevronRight icon');

            waterskierPage.prevPageLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Потэс Инесса - WaterSkiWorld.ru');
        });

        it('should have link to the next waterskier page with correct text but without href attribute', function () {
            const text = waterskierPage.nextPageLink.getText();
            expect(text).to.equal('chevronLeft icon След.');

            const href = waterskierPage.nextPageLink.getAttribute('href');
            expect(href).to.be.null;
        });
    });

    describe('Second', function () {
        beforeEach(function () {
            browser.url('./vodnolyzhniki/345-potes-inessa');
        });

        it('should have correct heading', function () {
            const titleText = waterskierPage.pageHeading.getText();
            expect(titleText).to.equal('Инесса Потэс ');
        });

        it('should have correct subheading', function () {
            const subtitleText = waterskierPage.pageSubheading.getText();
            expect(subtitleText).to.equal('Заслуженный мастер спорта СССР\nСудья высшей международной категории');
        });

        it('should have photo', function () {
            const photoIsExistiing = waterskierPage.photo.isExisting();
            expect(photoIsExistiing).to.be.true;
        });

        it('should have correct meta', function () {
            const metaText = waterskierPage.metaBlock.getText();
            expect(metaText).to.equal('Обновлено: 31.10.2013');
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = waterskierPage.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have correct link to the previous waterskier page', function () {
            const prevPageLinkText = waterskierPage.prevPageLink.getText();
            expect(prevPageLinkText).to.equal('Пред. chevronRight icon');

            waterskierPage.prevPageLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Жуков Юрий - WaterSkiWorld.ru');
        });

        it('should have correct link to the next waterskier page', function () {
            const nextPageLinkText = waterskierPage.nextPageLink.getText();
            expect(nextPageLinkText).to.equal('chevronLeft icon След.');

            waterskierPage.nextPageLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Мэй Лунд Йепсен (Maj Lund Jepsen)');
        });
    });

    describe('Last', function () {
        beforeEach(function () {
            browser.url('./vodnolyzhniki/31-kovalenko-anna');
        });

        it('should have correct heading', function () {
            const titleText = waterskierPage.pageHeading.getText();
            expect(titleText).to.equal('Анна Коваленко');
        });

        it('should have correct subheading', function () {
            const subtitleText = waterskierPage.pageSubheading.getText();
            expect(subtitleText).to.equal('Мастер Спорта');
        });

        it('should have photo', function () {
            const photoIsExistiing = waterskierPage.photo.isExisting();
            expect(photoIsExistiing).to.be.true;
        });

        it('should have correct meta', function () {
            const metaText = waterskierPage.metaBlock.getText();
            expect(metaText).to.equal('Обновлено: 22.10.2013');
        });

        it('should have a Facebook container with height > 0', function() {
            const containerHeight = waterskierPage.facebookContainer.getElementSize('height');
            expect(containerHeight).to.be.above(0);
        });

        it('should have link to the previous waterskier page with correct text but without href attribute', function () {
            const text = waterskierPage.prevPageLink.getText();
            expect(text).to.equal('Пред. chevronRight icon');

            const href = waterskierPage.prevPageLink.getAttribute('href');
            expect(href).to.be.null;
        });

        it('should have correct link to the next waterskier page', function () {
            const nextPageLinkText = waterskierPage.nextPageLink.getText();
            expect(nextPageLinkText).to.equal('chevronLeft icon След.');

            waterskierPage.nextPageLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Ветров Дмитрий - WaterSkiWorld.ru');
        });
    });
});
