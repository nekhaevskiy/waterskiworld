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
    get linkPrev() {
        return $('[data-qa="articleLinkPrev"]');
    }
    get linkNext() {
        return $('[data-qa="articleLinkNext"]');
    }
    get comments() {
        return $('#hypercomments_widget');
    }
}

module.exports = new Waterskier();
