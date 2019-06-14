class Error404 {
    get pageHeading() {
        return $('[data-qa="pageHeading"]');
    }
    get image() {
        return $('[data-qa="image"]');
    }
    get textHeading() {
        return $('[data-qa="textHeading"]');
    }
    get searchInput() {
        return $('[data-qa="inputSearch"]');
    }
    get searchBtn() {
        return $('[data-qa="buttonSearch"]');
    }
    get lastArticleLinks() {
        return $$('[data-qa="lastArticleLink"]')
    }
    get homepageLink() {
        return $('[data-qa="homepageLink"]');
    }
}

module.exports = new Error404();
