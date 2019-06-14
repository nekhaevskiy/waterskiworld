const page = require('./error404.page');

describe('error404.js - Error 404 page', function () {
    beforeEach(function () {
        browser.url('./abracadabra');
    });

    it('should have correct title', function () {
        const title = browser.getTitle();
        expect(title).to.equal('Страница не найдена — WaterSkiWorld.ru');
    });

    it('should have correct heading', function () {
        const heading = page.pageHeading.getText();
        expect(heading).to.equal('Упс! Что-то пошло не так...');
    });

    it('should have image', function () {
        const height = page.image.getElementSize('height');
        expect(height).to.be.above(0);
    })

    it('should have correct text heading', function () {
        const heading = page.textHeading.getText();
        expect(heading).to.equal('Мы не смогли найти запрашиваемую страницу');
    });

    it('should not redirect to the search page after submit empty field', function () {
        page.searchInput.setValue('');
        page.searchBtn.click();

        const hasFocus = page.searchInput.hasFocus();
        expect(hasFocus).to.be.true;
    });

    it('should redirect to the search page after input non-empty value and submit', function () {
        page.searchInput.setValue('василий');
        page.searchBtn.click();

        const pageTitle = browser.getTitle();
        expect(pageTitle).to.equal('Результаты поиска «василий» — WaterSkiWorld.ru');
    });

    it('should have 5 link to the last articles', function () {
        const links = page.lastArticleLinks;
        expect(links).to.have.lengthOf(5);
    });

    it('should have link to the homepage', function () {
        page.homepageLink.click();

        const pageTitle = browser.getTitle();
        expect(pageTitle).to.equal('WaterSkiWorld.ru — Воднолыжный Мир');
    });
});
