class Logo {
    get heading() {
        return $('[data-qa="logoHeading"]');
    }
    get subheading() {
        return $('[data-qa="logoSubheading"]');
    }
    get link() {
        return $('[data-qa="logoLink"]');
    }
}

module.exports = new Logo();
