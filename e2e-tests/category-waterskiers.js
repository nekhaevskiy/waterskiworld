const category = require('./category-waterskiers.page');

describe('category-waterskiers.js: Category Waterskiers', function () {
    beforeEach(function () {
        browser.url('./category/vodnolyzhniki');
    });

    it('should have correct heading', function () {
        const heading = category.heading.getText();
        expect(heading).to.equal('Воднолыжники');
    });

    it('should have 70 links to waterskiers', function () {
        const links = category.links;
        expect(links).to.have.lengthOf(70);
    });
});
