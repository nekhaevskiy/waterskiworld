const logo = require('./logo.page');

describe('Logo', () => {
    describe('Homepage', () => {
        beforeEach(() => {
            browser.url('/');
        });

        it('should have correct title', () => {
            const titleText = logo.title.getText();
            expect(titleText).to.be.equal('WaterSkiWorld.ru');
        });

        it('should have correct subtitle', () => {
            const subtitleText = logo.subtitle.getText();
            expect(subtitleText).to.be.equal('Воднолыжный Мир');
        });

        it('should not have link to homepage', () => {
            const isLinkExist = logo.link.isExisting();
            expect(isLinkExist).to.be.false;
        });
    });

    describe('Another page', () => {
        beforeEach(() => {
            browser.url('/category/tekhnika-kataniya');
        });

        it('should redirect to homepage after click', () => {
            logo.link.click();
            const title = browser.getTitle();
            expect(title).to.be.equal('WaterSkiWorld.ru - Воднолыжный Мир');
        });
    });
});