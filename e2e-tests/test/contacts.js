const contactsPage = require('./contacts.page');

describe('Contacts page', function () {
    beforeEach(function () {
        browser.url('./kontaktyi');
    });

    it('should have correct title', function () {
        const titleText = contactsPage.title.getText();
        expect(titleText).to.equal('Контакты');
    });

    it('should not allow leave empty name field', function () {
        contactsPage.submitBtn.click();

        const nameInputHasFocus = contactsPage.nameInput.hasFocus();
        expect(nameInputHasFocus).to.be.true;
    });

    it('should not allow leave empty email field', function () {
        contactsPage.nameInput.setValue('WebdriverIO');
        contactsPage.submitBtn.click();

        const emailInputHasFocus = contactsPage.emailInput.hasFocus();
        expect(emailInputHasFocus).to.be.true;
    });

    it('should not allow send invalid email', function () {
        contactsPage.nameInput.setValue('WebdriverIO');
        contactsPage.emailInput.setValue('webdriverio');
        contactsPage.submitBtn.click();

        const emailInputHasFocus = contactsPage.emailInput.hasFocus();
        expect(emailInputHasFocus).to.be.true;
    });

    it('should not allow leave empty message field', function () {
        contactsPage.nameInput.setValue('WebdriverIO');
        contactsPage.emailInput.setValue('webdriverio@waterskiworld.ru');
        contactsPage.submitBtn.click();

        const msgInputHasFocus = contactsPage.msgInput.hasFocus();
        expect(msgInputHasFocus).to.be.true;
    });

    it('should show success message after submitting form', function () {
        contactsPage.nameInput.setValue('WebdriverIO');
        contactsPage.emailInput.setValue('webdriverio@waterskiworld.ru');
        contactsPage.msgInput.setValue('test');
        contactsPage.submitBtn.click();

        const successMsgText = contactsPage.successMsg.getText();
        expect(successMsgText).to.equal('Спасибо! Ваше сообщение отправлено.');
    });
});