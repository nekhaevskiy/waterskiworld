const sidebar = require('./sidebar.page');

describe('Sidebar', () => {
    beforeEach(() => {
        browser.url('./');
    });

    describe('Search', () => {
        it('should not redirect to the search page after submit empty field', () => {
            sidebar.searchBtn.click();
            const inputHasFocus = sidebar.searchInput.hasFocus();
            expect(inputHasFocus).to.be.true;
        });

        it('should redirect to the search page after input and submit', () => {
            sidebar.searchInput.setValue('василий');
            sidebar.searchBtn.click();

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal('Вы искали василий - WaterSkiWorld.ru');
        });
    });

    describe('Comments', () => {
        it('should have correct header', () => {
            const headerText = sidebar.commentsHeader.getText();
            expect(headerText).to.equal('Последние комментарии');
        });

        it('should have at least 1 item and at most 5 items', () => {
            const commentsQty = sidebar.commentsItems.length;
            expect(commentsQty).to.be.at.least(1);
            expect(commentsQty).to.be.at.most(5);
        });

        it('should have first item with link that opens new tab with corresponding article after click', () => {
            const linkText = sidebar.firstCommentLink.getText();

            sidebar.firstCommentLink.click();
            const tabIds = browser.getTabIds();
            browser.switchTab(tabIds[1]);

            const pageTitle = browser.getTitle();
            expect(pageTitle).to.equal(linkText);
        });
    });

    describe('Facebook', () => {
        it('should have correct header', () => {
            const headerText = sidebar.facebookHeader.getText();
            expect(headerText).to.equal('Facebook');
        });

        it('should have body', () => {
            const bodyExist = sidebar.facebookBody.isExisting();
            expect(bodyExist).to.be.true;
        });
    });

    describe('VK', () => {
        it('should have correct header', () => {
            const headerText = sidebar.vkHeader.getText();
            expect(headerText).to.equal('ВКонтакте');
        });

        it('should have body', () => {
            const bodyExist = sidebar.vkBody.isExisting();
            expect(bodyExist).to.be.true;
        });
    });

    describe('Subscribe', () => {
        it('should have correct header', () => {
            const headerText = sidebar.subscribeHeader.getText();
            expect(headerText).to.equal('Подписка');
        });

        it('should not allow enter invalid email', () => {
            sidebar.subscribeInput.setValue('a');
            sidebar.subscribeBtn.click();

            const inputHasFocus = sidebar.subscribeInput.hasFocus();
            expect(inputHasFocus).to.be.true;
        });

        it('should allow enter valid email', () => {
            sidebar.subscribeInput.setValue('email@example.com');
            sidebar.subscribeBtn.click();

            const inputHasFocus = sidebar.subscribeInput.hasFocus();
            expect(inputHasFocus).to.be.false;
        });
    });
});