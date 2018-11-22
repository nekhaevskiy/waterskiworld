const waterskiersPage = require('./category.page');

describe('Waterskiers Page', function () {
    beforeEach(function () {
        browser.url('./category/vodnolyzhniki');
    });

    it('should have correct heading', function () {
        const titleText = waterskiersPage.categoryHeading.getText();
        expect(titleText).to.equal('Воднолыжники');
    });

    it('should have 70 waterskiers', function () {
        const links = waterskiersPage.waterskiers;
        expect(links).to.have.lengthOf(70);
    });
});