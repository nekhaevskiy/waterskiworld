class Error404 {
    get pageHeading() {
        return $('.page-header h1');
    }
    get articleHeading() {
        return $('.article h2');
    }
    get searchInput() {
        return $('#search');
    }
    get searchBtn() {
        return $('.article form button[type="submit"]');
    }
    get lastLinks() {
        return $$('.article ul > li > a')
    }
    get homepageLink() {
        return $('.article p:last-of-type a');
    }
}

module.exports = new Error404();