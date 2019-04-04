class WhereToSki {
    get heading() {
        return $('[data-qa="pageHeading"]');
    }
    get clubsTable() {
        return $('[data-qa="clubsTable"]');
    }
    get clubsMap() {
        return $('[data-qa="clubsMap"]');
    }
    get facebookContainer() {
        return $('.fb-like');
    }
}

module.exports = new WhereToSki();
