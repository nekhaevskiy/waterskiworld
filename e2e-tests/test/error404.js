const error404page = require('./error404.page');

describe('Error 404 page', function () {
    beforeEach(function () {
        browser.url('./abracadabra');
    });

    it('should have correct title', function () {
        const pageTitle = browser.getTitle();
        expect(pageTitle).to.equal('Страница не найдена - WaterSkiWorld.ru');
    });

    it('should have correct heading', function () {
        const pageHeading = error404page.pageHeading.getText();
        expect(pageHeading).to.equal('Упс! Что-то пошло не так...');
    });

    it('should have correct article heading', function () {
        const articleHeading = error404page.articleHeading.getText();
        expect(articleHeading).to.equal('Мы не смогли найти запрашиваемую страницу');
    });

    it('should redirect to the search page after submit empty field', function () {
        error404page.searchInput.setValue('');
        error404page.searchBtn.click();

        const pageTitle = browser.getTitle();
        expect(pageTitle).to.equal('Вы искали - WaterSkiWorld.ru');
    });

    it('should redirect to the search page after input non-empty value and submit', function () {
        error404page.searchInput.setValue('василий');
        error404page.searchBtn.click();

        const pageTitle = browser.getTitle();
        expect(pageTitle).to.equal('Вы искали василий - WaterSkiWorld.ru');
    });

    it('should have 5 link to the last articles', function () {
        const links = error404page.lastLinks;
        expect(links).to.have.lengthOf(5);
    });

    it('should have link to the homepage', function () {
        error404page.homepageLink.click();

        const pageTitle = browser.getTitle();
        expect(pageTitle).to.equal('WaterSkiWorld.ru - Воднолыжный Мир');
    });
});