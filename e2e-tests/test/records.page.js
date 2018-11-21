class Records {
    get pageHeader() {
        return $('.page-header');
    }
    get boatRecordsHeading() {
        return $('.article h2:nth-of-type(1)');
    }
    get boatRecordsBody() {
        return $('.article .table-responsive:nth-of-type(1)');
    }
    get cableRecordsHeading() {
        return $('.article h2:nth-of-type(2)');
    }
    get cableRecordsBody() {
        return $('.article .table-responsive:nth-of-type(2)')
    }
    get metaBlock() {
        return $('.article__meta');
    }
    get commentsBlock() {
        return $('#hypercomments_widget');
    }
}

module.exports = new Records();