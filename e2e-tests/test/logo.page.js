class Logo {
    get heading() {
        return $('.header__title');
    }
    get subheading() {
        return $('.header__description');
    }
    get link() {
        return $('.header__link');
    }
}

module.exports = new Logo();