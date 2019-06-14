class CategorySearch {
    get searchInput() {
        return $('[data-qa="inputSearch"]');
    }
    get searchBtn() {
        return $('[data-qa="buttonSearch"]');
    }
}

module.exports = new CategorySearch();
