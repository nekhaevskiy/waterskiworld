const historyPage = require('./category.page');
const accordion = require('./accordion.page');

describe('History articles', function () {
    describe('First page', function () {
        beforeEach(function () {
            browser.url('./category/istoriya');
        });

        it('should have correct page header', function () {
            const pageHeader = historyPage.categoryHeading.getText();
            expect(pageHeader).to.equal('История');
        });

        it('should have 10 items', function () {
            const items = historyPage.items;
            expect(items).to.have.lengthOf(10);
        });

        it('should have 10 article titles', function () {
            const titles = historyPage.itemsHeadings;
            expect(titles).to.have.lengthOf(10);
        });

        it('should have 10 meta blocks', function () {
            const metaBlocks = historyPage.metaBlocks;
            expect(metaBlocks).to.have.lengthOf(10);
        });

        it('should have 10 links to author', function () {
            const authorLinks = historyPage.authorLinks;
            expect(authorLinks).to.have.lengthOf(10);
        });

        it('should have 10 thumbs', function () {
            const thumbs = historyPage.thumbs;
            expect(thumbs).to.have.lengthOf(10);
        });

        it('should have 10 summaries', function () {
            const summmaries = historyPage.summaries;
            expect(summmaries).to.have.lengthOf(10);
        });

        it('should have 10 Read More links', function () {
            const readMoreLinks = historyPage.readMoreLinks;
            expect(readMoreLinks).to.have.lengthOf(10);
        });

        describe('Description', function () {
            it('should have description block with correct heading', function () {
                const descriptionIsExisting = historyPage.description.isExisting();
                expect(descriptionIsExisting).to.be.true;

                const descriptionHeading = historyPage.descriptionHeading.getText();
                expect(descriptionHeading).to.equal('Циклы статей:');
            });

            describe('Accordion', function () {
                it('should have 2 panels with correct headings', function () {
                    const panels = accordion.panels;
                    expect(panels).to.have.lengthOf(2);

                    const firstPanelHeading = accordion.panelHeadings[0].getText();
                    expect(firstPanelHeading).to.equal('Вера Федорова: История побед 1967-2010');

                    const secondPanelHeading = accordion.panelHeadings[1].getText();
                    expect(secondPanelHeading).to.equal('Юрий Жуков: История воднолыжного спорта глазами очевидца 1963-1980');
                });

                it('should open first panel after click on the first heading', function () {
                    let firstPanelIsVisible = accordion.panelBodies[0].isVisible();
                    let secondPanelIsVisible = accordion.panelBodies[1].isVisible();
                    expect(firstPanelIsVisible).to.be.false;
                    expect(secondPanelIsVisible).to.be.false;

                    accordion.panelHeadings[0].click();
                    browser.pause(500);

                    firstPanelIsVisible = accordion.panelBodies[0].isVisible();
                    secondPanelIsVisible = accordion.panelBodies[1].isVisible();
                    expect(firstPanelIsVisible).to.be.true;
                    expect(secondPanelIsVisible).to.be.false;
                });

                it('should close first panel after click on the second heading', function () {
                    accordion.panelHeadings[0].click();
                    browser.pause(500);
                    let firstPanelIsVisible = accordion.panelBodies[0].isVisible();
                    let secondPanelIsVisible = accordion.panelBodies[1].isVisible();
                    expect(firstPanelIsVisible).to.be.true;
                    expect(secondPanelIsVisible).to.be.false;

                    accordion.panelHeadings[1].click();
                    browser.pause(500);
                    firstPanelIsVisible = accordion.panelBodies[0].isVisible();
                    secondPanelIsVisible = accordion.panelBodies[1].isVisible();
                    expect(firstPanelIsVisible).to.be.false;
                    expect(secondPanelIsVisible).to.be.true;
                });
            });
        });

        describe('First item', function () {
            it('should have correct and clickable heading', function () {
                const articleTitle = historyPage.itemsHeadings[0];
                const text = articleTitle.getText();
                articleTitle.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(text);
            });

            it('should have correct and clickable author', function () {
                const authorLink = historyPage.authorLinks[0];
                const text = authorLink.getText();
                authorLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(text);
            });

            it('should have correct and clickable Read More link', function () {
                const articleTitle = historyPage.itemsHeadings[0].getText();
                const readMoreLink = historyPage.readMoreLinks[0];

                const linkText = readMoreLink.getText();
                expect(linkText).to.equal('Читать далее →');

                readMoreLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.include(articleTitle);
            });
        });

        describe('Pagination', function () {
            it('should not have link to the next page', function () {
                const nextLinkExist = historyPage.nextLink.isExisting();
                expect(nextLinkExist).to.be.false;
            });

            it('should have correct link to the previous page', function () {
                const prevLinkText = historyPage.prevLink.getText();
                expect(prevLinkText).to.equal('Пред. →');

                historyPage.prevLink.click();
                const pageTitle = browser.getTitle();
                expect(pageTitle).to.equal('История - Страница 2 из 9 - WaterSkiWorld.ru');
            });
        });
    });

    describe('Second page', function () {
        beforeEach(function () {
            browser.url('./category/istoriya/page/2');
        });

        it('should have correct link to the next page', function () {
            const nextLinkText = historyPage.nextLink.getText();
            expect(nextLinkText).to.equal('← След.');

            historyPage.nextLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('История - WaterSkiWorld.ru');
        });

        it('should have correct link to the previous page', function () {
            const prevLinkText = historyPage.prevLink.getText();
            expect(prevLinkText).to.equal('Пред. →');

            historyPage.prevLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('История - Страница 3 из 9 - WaterSkiWorld.ru');
        });
    });

    describe('Last page', function () {
        beforeEach(function () {
            browser.url('./category/istoriya/page/9');
        });

        it('should have correct link to the next page', function () {
            const nextLinkText = historyPage.nextLink.getText();
            expect(nextLinkText).to.equal('← След.');

            historyPage.nextLink.click();
            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('История - Страница 8 из 9 - WaterSkiWorld.ru');
        });

        it('should not have link to the previous page', function () {
            const prevLinkExist = historyPage.prevLink.isExisting();
            expect(prevLinkExist).to.be.false;
        });
    });
});