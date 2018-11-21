const menu = require('./menu.page');

describe('Menu', () => {
    beforeEach(() => {
        browser.url('/');
    });

    it('should have correct and clickable How-To-Ski link', () => {
        const linkText = menu.howToSkiLink.getText();
        expect(linkText).to.equal('Как кататься');

        menu.howToSkiLink.click();
        var title = browser.getTitle();
        expect(title).to.equal('Техника катания на водных лыжах');
    });

    it('should have correct and clickable Where-To-Ski link', () => {
        const linkText = menu.whereToSkiLink.getText();
        expect(linkText).to.equal('Где кататься');

        menu.whereToSkiLink.click();
        var title = browser.getTitle();
        expect(title).to.equal('Где кататься на водных лыжах в России, Беларуси, Украине');
    });

    it('should have correct and clickable Records link', () => {
        const linkText = menu.recordsLink.getText();
        expect(linkText).to.equal('Рекорды');

        menu.recordsLink.click();
        const title = browser.getTitle();
        expect(title).to.equal('Рекорды в водных лыжах - WaterSkiWorld.ru');
    });

    it('should have correct and clickable Waterskiers link', () => {
        const linkText = menu.waterskiersLink.getText();
        expect(linkText).to.equal('Воднолыжники');

        menu.waterskiersLink.click();
        const title = browser.getTitle();
        expect(title).to.equal('Воднолыжники - WaterSkiWorld.ru');
    });

    it('should have correct and clickable History link', () => {
        const linkText = menu.historyLink.getText();
        expect(linkText).to.equal('История');

        menu.historyLink.click();
        var title = browser.getTitle();
        expect(title).to.equal('История - WaterSkiWorld.ru');
    });

    it('should have correct and clickable Ads link', () => {
        const linkText = menu.adsLink.getText();
        expect(linkText).to.equal('Объявления');

        menu.adsLink.click();
        var title = browser.getTitle();
        expect(title).to.equal('Объявления - WaterSkiWorld.ru');
    });

    it('should have correct and clickable Contacts link', () => {
        const linkText = menu.contactsLink.getText();
        expect(linkText).to.equal('Контакты');

        menu.contactsLink.click();
        var title = browser.getTitle();
        expect(title).to.equal('Контакты - WaterSkiWorld.ru');
    });
});