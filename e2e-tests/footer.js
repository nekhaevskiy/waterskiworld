const footer = require('./footer.page');
const logo = require('./logo.page');

describe('footer.js - Footer', function () {
    beforeEach(function () {
        browser.url('./')
    });

    it('should have correct copyright', function () {
        const text = footer.copyright.getText();
        expect(text).to.equal('2008-2019 © WaterSkiWorld.ru');
    });

    describe(': Link to top', function () {
        it('should have correct text', function () {
            const text = footer.linkToTop.getText();
            expect(text).to.equal('Наверх');
        });

        it('should scroll to top after click', function () {
            browser.scroll(footer.linkToTopSelector);

            let inViewport = logo.heading.isVisibleWithinViewport();
            expect(inViewport).to.be.false;

            footer.linkToTop.click();

            inViewport = logo.heading.isVisibleWithinViewport();
            expect(inViewport).to.be.true;
        });
    });
});
