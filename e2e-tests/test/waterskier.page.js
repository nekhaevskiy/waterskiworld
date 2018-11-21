class Waterskier {
    get title() {
        return $('.article h2');
    }
    get subtitle() {
        return $('.article h3');
    }
    get photo() {
        return $('.article img.alignright');
    }
    get personalRecordsHeading() {
        return $('.article h3:nth-of-type(2)');
    }
    get metaBlock() {
        return $('.article__meta');
    }
    get prevPageLink() {
        return $('.pager .next a');
    }
    get nextPageLink() {
        return $('.pager .previous a');
    }
    get comments() {
        return $('#hypercomments_widget');
    }
}

module.exports = new Waterskier();