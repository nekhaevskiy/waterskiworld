const footer = require('./footer.page');
const logo = require('./logo.page');

describe('Footer', () => {
    beforeEach(() => {
        browser.url('./')
    });

    it('should have correct copyright', () => {
        const copyrightText = footer.copyright.getText();
        expect(copyrightText).to.equal('2008-2017 © WaterSkiWorld.ru');
    });

    describe('Link to top', () => {
        it('should have correct text', () => {
            const linkToTopText = footer.linkToTop.getText();
            expect(linkToTopText).to.equal('Наверх');
        });

        it('should scroll to top after click', () => {
            browser.scroll(footer.linkToTopSelector);

            let logoVisibleWithinViewport = logo.title.isVisibleWithinViewport();
            expect(logoVisibleWithinViewport).to.be.false;

            footer.linkToTop.click();

            logoVisibleWithinViewport = logo.title.isVisibleWithinViewport();
            expect(logoVisibleWithinViewport).to.be.true;
        });
    });
});