const historyCategory = require('./category.page');
const accordion = require('./accordion.page');

describe('category-history.js - History category', function () {
    describe(': First page', function () {
        beforeEach(function () {
            browser.url('./category/istoriya');
        });

        it('should have correct heading', function () {
            const heading = historyCategory.categoryHeading.getText();
            expect(heading).to.equal('История');
        });

        describe(': Description', function () {
            it('should have correct heading', function () {
                const isExisting = historyCategory.description.isExisting();
                expect(isExisting).to.be.true;

                const heading = historyCategory.descriptionHeading.getText();
                expect(heading).to.equal('Циклы статей:');
            });

            it('should have 2 panel items with correct headings', function () {
                const items = accordion.items;
                expect(items).to.have.lengthOf(2);

                const firstHeading = accordion.headings[0].getText();
                expect(firstHeading).to.equal('Вера Федорова: История побед 1967-2010');

                const secondHeading = accordion.headings[1].getText();
                expect(secondHeading).to.equal('Юрий Жуков: История воднолыжного спорта глазами очевидца 1963-1980');
            });

            it('should open first panel body after click on the first panel heading', function () {
                let firstPanelIsVisible = accordion.bodies[0].isVisible();
                let secondPanelIsVisible = accordion.bodies[1].isVisible();
                expect(firstPanelIsVisible).to.be.false;
                expect(secondPanelIsVisible).to.be.false;

                accordion.headings[0].click();
                browser.pause(500);

                firstPanelIsVisible = accordion.bodies[0].isVisible();
                secondPanelIsVisible = accordion.bodies[1].isVisible();
                expect(firstPanelIsVisible).to.be.true;
                expect(secondPanelIsVisible).to.be.false;
            });

            it('should open second panel body after click on the second panel heading', function () {
                let firstPanelIsVisible = accordion.bodies[0].isVisible();
                let secondPanelIsVisible = accordion.bodies[1].isVisible();
                expect(firstPanelIsVisible).to.be.false;
                expect(secondPanelIsVisible).to.be.false;

                accordion.headings[1].click();
                browser.pause(500);

                firstPanelIsVisible = accordion.bodies[0].isVisible();
                secondPanelIsVisible = accordion.bodies[1].isVisible();
                expect(firstPanelIsVisible).to.be.false;
                expect(secondPanelIsVisible).to.be.true;
            });
        });

        it('should have 10 article items', function () {
            const items = historyCategory.items;
            expect(items).to.have.lengthOf(10);
        });

        describe(': First article', function () {
            it('should have correct and clickable link', function () {
                const articleTitle = historyCategory.itemsHeadings[0].getText();
                const link = historyCategory.itemsLinks[0];

                link.click();

                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(articleTitle);
            });

            it('should have a thumb', function () {
                const isExisting = historyCategory.thumbs[0].isExisting();
                expect(isExisting).to.be.true;
            });
    
            it('should have a summary', function () {
                const summmaryHeight = historyCategory.summaries[0].getElementSize('height');
                expect(summmaryHeight).to.be.above(0);
            });
    
            it('should have correct date', function () {
                const date = historyCategory.dates[0].getText();
                const regExpTest = historyCategory.dateRegExp.test(date);
                expect(regExpTest).to.be.true;
            });
        });

        describe(': Pagination', function () {
            it('should not have link to the previous page', function () {
                const isExisting = historyCategory.prevLink.isExisting();
                expect(isExisting).to.be.false;
            });

            it('should have correct link to the next page', function () {
                const text = historyCategory.nextLink.getText();
                expect(text).to.equal('След.');

                historyCategory.nextLink.click();

                const pageTitle = browser.getTitle();
                expect(pageTitle).to.equal('История — Страница 2 — WaterSkiWorld.ru');
            });
        });
    });

    describe(': Second page', function () {
        beforeEach(function () {
            browser.url('./category/istoriya/page/2');
        });

        it('should have correct link to the previous page', function () {
            const text = historyCategory.prevLink.getText();
            expect(text).to.equal('Пред.');

            historyCategory.prevLink.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('История — WaterSkiWorld.ru');
        });

        it('should have correct link to the next page', function () {
            const text = historyCategory.nextLink.getText();
            expect(text).to.equal('След.');

            historyCategory.nextLink.click();
            
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('История — Страница 3 — WaterSkiWorld.ru');
        });
    });

    describe(': Last page', function () {
        beforeEach(function () {
            browser.url('./category/istoriya/page/9');
        });

        it('should have correct link to the previous page', function () {
            const text = historyCategory.prevLink.getText();
            expect(text).to.equal('Пред.');

            historyCategory.prevLink.click();
            
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('История — Страница 8 — WaterSkiWorld.ru');
        });

        it('should not have link to the next page', function () {
            const isExisting = historyCategory.nextLink.isExisting();
            expect(isExisting).to.be.false;
        });
    });
});
