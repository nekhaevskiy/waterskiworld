class WhereToSki {
    get heading() {
        return $('.page-header');
    }
    get clubsTable() {
        return $('.table-responsive');
    }
    get clubsMap() {
        return $('.embed-responsive');
    }
    get metaBlock() {
        return $('.article__meta');
    }
    get commentsBlock() {
        return $('#hypercomments_widget');
    }
}

module.exports = new WhereToSki();