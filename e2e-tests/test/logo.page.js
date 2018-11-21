class Logo {
    get title() {
        return $('.header__title');
    }
    get subtitle() {
        return $('.header__description');
    }
    get link() {
        return $('.header__link');
    }
}

module.exports = new Logo();