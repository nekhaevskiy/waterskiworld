class Category {
    get heading() {
        return $('[data-qa="pageHeading"]');
    }
    get links() {
        return $$('[data-qa="linkToWaterskier"]');
    }
}

module.exports = new Category();
