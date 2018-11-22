const sidebar = require('./sidebar.page');

describe('Sidebar', function () {
    beforeEach(function () {
        browser.url('./');
    });

    describe('Search', function () {
        it('should not redirect to the search page after submit empty field', function () {
            sidebar.searchBtn.click();
            const inputHasFocus = sidebar.searchInput.hasFocus();
            expect(inputHasFocus).to.be.true;
        });

        it('should redirect to the search page after input and submit', function () {
            sidebar.searchInput.setValue('василий');
            sidebar.searchBtn.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Вы искали василий - WaterSkiWorld.ru');
        });
    });

    describe('Comments', function () {
        it('should have correct header', function () {
            const headerText = sidebar.commentsHeader.getText();
            expect(headerText).to.equal('Последние комментарии');
        });

        it('should have at least 1 item and at most 5 items', function () {
            const commentsQty = sidebar.commentsItems.length;
            expect(commentsQty).to.be.at.least(1);
            expect(commentsQty).to.be.at.most(5);
        });

        it('should have first item with link that opens new tab with corresponding article after click', function () {
            const linkText = sidebar.firstCommentLink.getText();

            sidebar.firstCommentLink.click();
            const tabIds = browser.getTabIds();
            browser.switchTab(tabIds[1]);

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal(linkText);
        });
    });

    describe('Facebook', function () {
        it('should have correct header', function () {
            const headerText = sidebar.facebookHeader.getText();
            expect(headerText).to.equal('Facebook');
        });

        it('should have body', function () {
            const bodyExist = sidebar.facebookBody.isExisting();
            expect(bodyExist).to.be.true;
        });
    });

    describe('VK', function () {
        it('should have correct header', function () {
            const headerText = sidebar.vkHeader.getText();
            expect(headerText).to.equal('ВКонтакте');
        });

        it('should have body', function () {
            const bodyExist = sidebar.vkBody.isExisting();
            expect(bodyExist).to.be.true;
        });
    });

    describe('Subscribe', function () {
        it('should have correct header', function () {
            const headerText = sidebar.subscribeHeader.getText();
            expect(headerText).to.equal('Подписка');
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