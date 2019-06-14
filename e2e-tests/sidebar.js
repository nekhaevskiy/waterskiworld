const sidebar = require('./sidebar.page');

describe('sidebar.js - Sidebar', function () {
    beforeEach(function () {
        browser.url('./');
    });

    describe(': Search', function () {
        it('should have correct heading', function () {
            const heading = sidebar.searchHeading.getText();
            expect(heading).to.equal('Поиск по сайту');
        });

        it('should not redirect to the search page after submit empty field', function () {
            sidebar.searchBtn.click();
            const inputHasFocus = sidebar.searchInput.hasFocus();
            expect(inputHasFocus).to.be.true;
        });

        it('should redirect to the search page after input and submit', function () {
            sidebar.searchInput.setValue('василий');
            sidebar.searchBtn.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Результаты поиска «василий» — WaterSkiWorld.ru');
        });
    });

    describe(':Facebook', function () {
        it('should have correct heading', function () {
            const heading = sidebar.facebookHeading.getText();
            expect(heading).to.equal('Facebook');
        });

        it('should have body', function () {
            const bodyExist = sidebar.facebookBody.isExisting();
            expect(bodyExist).to.be.true;
        });
    });

    describe(': VK', function () {
        it('should have correct heading', function () {
            const heading = sidebar.vkHeading.getText();
            expect(heading).to.equal('ВКонтакте');
        });

        it('should have body', function () {
            const bodyExist = sidebar.vkBody.isExisting();
            expect(bodyExist).to.be.true;
        });
    });

    describe(': Subscribe', function () {
        it('should have correct heading', function () {
            const heading = sidebar.subscribeHeading.getText();
            expect(heading).to.equal('Подписка');
        });

        it('should not allow enter invalid email', function () {
            sidebar.subscribeInput.setValue('a');
            sidebar.subscribeBtn.click();

            const inputHasFocus = sidebar.subscribeInput.hasFocus();
            expect(inputHasFocus).to.be.true;
        });

        it('should allow enter valid email', function () {
            sidebar.subscribeInput.setValue('email@example.com');
            sidebar.subscribeBtn.click();

            const inputHasFocus = sidebar.subscribeInput.hasFocus();
            expect(inputHasFocus).to.be.false;
        });
    });
});
