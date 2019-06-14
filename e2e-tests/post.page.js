class Article {
    get heading() {
        return $('[data-qa="articleHeading"]');
    }
    get mainImage() {
        return $('[data-qa="articleContent"] > figure.wp-caption > img');
    }
    get mainImageCaption() {
        return $('[data-qa="articleContent"] > figure.wp-caption > figcaption.wp-caption-text');
    }
    get paragraphs() {
        return $$('[data-qa="articleContent"] > p');
    }
    get authorInfo() {
        return $('[data-qa="articleAuthorInfo"]');
    }
    get authorInfoRegExp() {
        return /^Автор: [a-zа-я\s]+$/gi;
    }
    get authorLink() {
        return $('[data-qa="articleAuthorLink"]');
    }
    get dateInfo() {
        return $('[data-qa="articleDate"]');
    }
    get dateInfoRegExp() {
        return /^Опубликовано: \d{2}.\d{2}.\d{4}$/gi;
    }
    get facebookContainer() {
        return $('.fb-like');
    }
    get prevLink() {
        return $('[data-qa="paginationPrevLinkWrapper"] > a');
    }
    get nextLink() {
        return $('[data-qa="paginationNextLinkWrapper"] > a');
    }
    get comments() {
        return $('#hypercomments_widget');
    }
}

module.exports = new Article();
