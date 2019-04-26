class Waterskier {
    get heading() {
        return $('[data-qa="articleHeading"]');
    }
    get photo() {
        return $('[data-qa="articleContent"] > p > img.alignright');
    }
    get paragraphs() {
        return $$('[data-qa="articleContent"] > p');
    }
    get dateInfo() {
        return $('[data-qa="articleDate"]');
    }
    get dateInfoRegExp() {
        return /^Обновлено: \d{2}.\d{2}.\d{4}$/gi;
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

module.exports = new Waterskier();
