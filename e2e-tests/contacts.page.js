class Contacts {
    get pageHeader() {
        return $('[data-qa="blockPageHeader"]');
    }
    get pageContent() {
        return $('[data-qa="blockPageContent"]');
    }
    get alertValidationError() {
        return $('[data-qa="alertValidationError"]');
    }
    get alertFailure() {
        return $('[data-qa="alertFailure"]');
    }
    get alertSuccess() {
        return $('[data-qa="alertSuccess"]');
    }
    get form() {
        return $('[data-qa="blockForm"]');
    }
    get nameInput() {
        return $('[data-qa="inputName"]');
    }
    get emailInput() {
        return $('[data-qa="inputEmail"]');
    }
    get msgInput() {
        return $('[data-qa="inputMsg"]');
    }
    get humanInput() {
        return $('[data-qa="inputHuman"]');
    }
    get humanError() {
        return $('[data-qa="textHumanError"]')
    }
    get submitBtn() {
        return $('[data-qa="btnSubmit"]');
    }
}

module.exports = new Contacts();
