class Sidebar {
    get searchHeading() {
        return $('[data-qa="sidebarSearchHeading"]');
    }
    get searchInput() {
        return $('[data-qa="sidebarSearchInput"]');
    }
    get searchBtn() {
        return $('[data-qa="sidebarSearchBtn"]');
    }
    get facebookHeading() {
        return $('[data-qa="sidebarFacebookHeading"]');
    }
    get facebookBody() {
        return $('[data-qa="sidebarFacebookBody"]');
    }
    get vkHeading() {
        return $('[data-qa="sidebarVKHeading"]');
    }
    get vkBody() {
        return $('[data-qa="sidebarVKBody"]');
    }
    get subscribeHeading() {
        return $('[data-qa="sidebarSubscribeHeading"]');
    }
    get subscribeInput() {
        return $('[data-qa="sidebarSubscribeInput"]');
    }
    get subscribeBtn() {
        return $('[data-qa="sidebarSubscribeBtn"]');
    }
}

module.exports = new Sidebar();
