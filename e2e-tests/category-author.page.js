class CategoryAuthor {
    get avatar() {
        return $('[data-qa="authorAvatar"]');
    }
    get name() {
        return $('[data-qa="authorName"]');
    }
    get desription() {
        return $('[data-qa="authorDescription"]');
    }
    get subheading() {
        return $('[data-qa="authorSubheading"]');
    }
}

module.exports = new CategoryAuthor();
