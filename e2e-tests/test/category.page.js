class Category {
    get categoryHeading() {
        return $('.page-header h1');
    }
    get description() {
        return $('.description');
    }
    get descriptionHeading() {
        return $('.description__heading');
    }
    get items() {
        return $$('.article');
    }
    get itemsHeadings() {
        return $$('.article__title');
    }
    get metaBlocks() {
        return $$('.article__meta');
    }
    get authorLinks() {
        return $$('.article__meta a');
    }
    get thumbs() {
        return $$('.article__thumb');
    }
    get summaries() {
        return $$('.article__summary');
    }
    get readMoreLinks() {
        return $$('.article a.btn.btn-default');
    }
    get prevLink() {
        return $('.pager .next a');
    }
    get nextLink() {
        return $('.pager .previous a');
    }
    get waterskiers() {
        return $$('main ul>li>a');
    }
    get searchInput() {
        return $('#page-search');
    }
    get searchBtn() {
        return $('.main form button.btn');
    }
}

module.exports = new Category();