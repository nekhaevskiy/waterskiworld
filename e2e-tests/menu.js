const menu = require('./menu.page');

describe('menu.js - Menu', function () {
    beforeEach(function () {
        browser.url('/');
    });

    it('should have correct and clickable How-To-Ski link', function () {
        const linkText = menu.howToSkiLink.getText();
        expect(linkText).to.equal('Как кататься');

        menu.howToSkiLink.click();
        var title = browser.getTitle();
        expect(title).to.equal('Техника катания — WaterSkiWorld.ru');
    });

    it('should have correct and clickable Where-To-Ski link', function () {
        const linkText = menu.whereToSkiLink.getText();
        expect(linkText).to.equal('Где кататься');

        menu.whereToSkiLink.click();
        var title = browser.getTitle();
        expect(title).to.equal('Где кататься — WaterSkiWorld.ru');
    });

    it('should have correct and clickable Records link', function () {
        const linkText = menu.recordsLink.getText();
        expect(linkText).to.equal('Рекорды');

        menu.recordsLink.click();
        const title = browser.getTitle();
        expect(title).to.equal('Рекорды — WaterSkiWorld.ru');
    });

    it('should have correct and clickable Waterskiers link', function () {
        const linkText = menu.waterskiersLink.getText();
        expect(linkText).to.equal('Воднолыжники');

        menu.waterskiersLink.click();
        const title = browser.getTitle();
        expect(title).to.equal('Воднолыжники — WaterSkiWorld.ru');
    });

    it('should have correct and clickable History link', function () {
        const linkText = menu.historyLink.getText();
        expect(linkText).to.equal('История');

        menu.historyLink.click();
        var title = browser.getTitle();
        expect(title).to.equal('История — WaterSkiWorld.ru');
    });

    it('should have correct and clickable Ads link', function () {
        const linkText = menu.adsLink.getText();
        expect(linkText).to.equal('Объявления');

        menu.adsLink.click();
        var title = browser.getTitle();
        expect(title).to.equal('Объявления — WaterSkiWorld.ru');
    });

    it('should have correct and clickable Contacts link', function () {
        const linkText = menu.contactsLink.getText();
        expect(linkText).to.equal('Контакты');

        menu.contactsLink.click();
        var title = browser.getTitle();
        expect(title).to.equal('Контакты — WaterSkiWorld.ru');
    });
});
