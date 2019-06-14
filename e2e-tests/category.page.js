class Category {
    get categoryHeading() {
        return $('[data-qa="categoryHeading"]');
    }
    get description() {
        return $('[data-qa="categoryDescription"]');
    }
    get descriptionHeading() {
        return $('[data-qa="categoryDescriptionHeading"]');
    }
    get items() {
        return $$('[data-qa="articleBlock"]');
    }
    get itemsLinks() {
        return $$('[data-qa="articleLink"]');
    }
    get itemsHeadings() {
        return $$('[data-qa="articleHeading"]');
    }
    get thumbs() {
        return $$('[data-qa="articleImageWrapper"] > img');
    }
    get summaries() {
        return $$('[data-qa="articleSummary"]');
    }
    get dates() {
        return $$('[data-qa="articleDate"]');
    }
    get dateRegExp() {
        return /^\d{2}.\d{2}.\d{4}$/gi;
    }
    get prevLink() {
        return $('[data-qa="paginationPrevLinkWrapper"] > a');
    }
    get nextLink() {
        return $('[data-qa="paginationNextLinkWrapper"] > a');
    }
}

module.exports = new Category();
