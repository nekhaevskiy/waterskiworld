class Records {
    get pageHeading() {
        return $('[data-qa="pageHeading"]');
    }
    get boatWorldRecordsHeading() {
        return $('[data-qa="pageContent"] h2:nth-of-type(1)');
    }
    get boatEuropeRecordsHeading() {
        return $('[data-qa="pageContent"] h2:nth-of-type(2)');
    }
    get boatRussiaRecordsHeading() {
        return $('[data-qa="pageContent"] h2:nth-of-type(3)');
    }
    get cableRussiaRecordsHeading() {
        return $('[data-qa="pageContent"] h2:nth-of-type(4)');
    }
    get dateInfo() {
        return $('[data-qa="pageDate"]');
    }
    get dateInfoRegExp() {
        return /^Обновлено: \d{2}.\d{2}.\d{4}$/gi;
    }
    get facebookContainer() {
        return $('.fb-like');
    }
}

module.exports = new Records();
