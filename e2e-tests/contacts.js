const contactsPage = require('./contacts.page');

const isLocalServer = process.env.SERVER !== 'st' && process.env.SERVER !== 'prod';

describe('Contacts page', function () {
    beforeEach(function () {
        browser.url('./kontaktyi');
    });

    it('should have page header', function () {
        const titleText = contactsPage.pageHeader.getText();
        expect(titleText).to.equal('Контакты');
    });

    describe('Initial State', function () {
        it('should have page content before form', function () {
            const contentText = contactsPage.pageContent.getText();
            expect(contentText).to.equal('Связаться с командой WaterSkiWorld.ru можно написав нам в социальных сетях:\nFacebook\nВКонтакте\nили воспользовавшись формой ниже:');
        });

        it('should not show any alerts or error hints', function () {
            const alertValidationErrorExisting = contactsPage.alertValidationError.isExisting();
            expect(alertValidationErrorExisting).to.be.false;
            
            const alertFailureExisting = contactsPage.alertFailure.isExisting();
            expect(alertFailureExisting).to.be.false;
            
            const alertSuccessExisting = contactsPage.alertSuccess.isExisting();
            expect(alertSuccessExisting).to.be.false;

            const hintHumanErrorExisting = contactsPage.humanError.isExisting();
            expect(hintHumanErrorExisting).to.be.false;
        });

        it('should show form', function () {
            const formExisting = contactsPage.form.isExisting();
            expect(formExisting).to.be.true;
        });
    });

    describe('Frontend Validation', function () {
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
        
        it('should not allow leave empty human validation field', function () {
            contactsPage.nameInput.setValue('WebdriverIO');
            contactsPage.emailInput.setValue('webdriverio@waterskiworld.ru');
            contactsPage.msgInput.setValue('test');
            contactsPage.submitBtn.click();
    
            const humanInputHasFocus = contactsPage.humanInput.hasFocus();
            expect(humanInputHasFocus).to.be.true;
        });
    });

    describe('Backend Validation', function () {
        it('should not allow send form with invalid human validation field', function () {
            contactsPage.nameInput.setValue('WebdriverIO');
            contactsPage.emailInput.setValue('webdriverio@waterskiworld.ru');
            contactsPage.msgInput.setValue('test');
            contactsPage.humanInput.setValue('random');
            contactsPage.submitBtn.click();
            
            const contentTextExisting = contactsPage.pageContent.isExisting();
            expect(contentTextExisting).to.be.false;

            const alertText = contactsPage.alertValidationError.getText();
            expect(alertText).to.equal('Пожалуйста, введите всю необходимую информацию');
            
            const hintText = contactsPage.humanError.getText();
            expect(hintText).to.equal('Пожалуйста, введите правильное слагаемое');
        });
    });
    
    describe('Successfull Form Sending', function () {
        it('should show success message', function () {
            contactsPage.nameInput.setValue('WebdriverIO');
            contactsPage.emailInput.setValue('webdriverio@waterskiworld.ru');
            contactsPage.msgInput.setValue('test ' + process.env.SERVER);
            contactsPage.humanInput.setValue('2');
            contactsPage.submitBtn.click();

            const contentTextExisting = contactsPage.pageContent.isExisting();
            expect(contentTextExisting).to.be.false;

            if (isLocalServer) {
                const alertFailureText = contactsPage.alertFailure.getText();
                expect(alertFailureText).to.equal('Сообщение не было отправлено. Пожалуйста, попробуйте еще раз');

                const formExisting = contactsPage.form.isExisting();
                expect(formExisting).to.be.true;
            } else {
                const successMsgText = contactsPage.alertSuccess.getText();
                expect(successMsgText).to.equal('Спасибо! Ваше сообщение отправлено');

                const formExisting = contactsPage.form.isExisting();
                expect(formExisting).to.be.false;
            }
        });
    });
});
