const logo = require('./logo.page');

describe('logo.js - Logo', function () {
    describe(': Logo in Homepage', function () {
        beforeEach(function () {
            browser.url('/');
        });

        it('should have correct heading', function () {
            const titleText = logo.heading.getText();
            expect(titleText).to.be.equal('WaterSkiWorld.ru');
        });

        it('should have correct subheading', function () {
            const subtitleText = logo.subheading.getText();
            expect(subtitleText).to.be.equal('Воднолыжный Мир');
        });

        it('should not have link to homepage', function () {
            const isLinkExist = logo.link.isExisting();
            expect(isLinkExist).to.be.false;
        });
    });

    describe(': Logo in another page', function () {
        beforeEach(function () {
            browser.url('/category/tekhnika-kataniya');
        });

        it('should redirect to homepage after click', function () {
            logo.link.click();
            const title = browser.getTitle();
            expect(title).to.be.equal('WaterSkiWorld.ru — Воднолыжный Мир');
        });
    });
});
