class Footer {
    get copyright() {
        return $('.footer p');
    }
    get linkToTop() {
        return $('.footer p a');
    }
    get linkToTopSelector() {
        return '.footer p a';
    }
}

module.exports = new Footer();