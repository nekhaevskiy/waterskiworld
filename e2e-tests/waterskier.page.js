class Waterskier {
    get pageHeading() {
        return $('.article h2');
    }
    get pageSubheading() {
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
    get facebookContainer() {
        return $('.fb-like');
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