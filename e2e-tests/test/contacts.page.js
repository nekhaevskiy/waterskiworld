class Contacts {
    get title() {
        return $('.page-header h1');
    }
    get nameInput() {
        return $('#contacts-name');
    }
    get emailInput() {
        return $('#contacts-email');
    }
    get msgInput() {
        return $('#contacts-msg');
    }
    get submitBtn() {
        return $('form button.btn');
    }
    get successMsg() {
        return $('.article .alert');
    }
}

module.exports = new Contacts();