class Footer {
    get copyright() {
        return $('[data-qa="footerCopyright"]');
    }
    get linkToTopSelector() {
        return '[data-qa="footerLinkToTop"]';
    }
    get linkToTop() {
        return $(this.linkToTopSelector);
    }
}

module.exports = new Footer();
