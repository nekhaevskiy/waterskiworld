class Sidebar {
    get searchInput() {
        return $('.sidebar-module:nth-child(1) #sidebar-search');
    }
    get searchBtn() {
        return $('.sidebar-module:nth-child(1) button.btn');
    }
    get commentsHeading() {
        return $('.sidebar-module:nth-child(2) h4');
    }
    get commentsItems() {
        return $$('.sidebar-module:nth-child(2) .hc__mix__message');
    }
    get firstCommentLink() {
        return $('.sidebar-module:nth-child(2) .hc__mix__link a');
    }
    get facebookHeading() {
        return $('.sidebar-module:nth-child(2) h4');
    }
    get facebookBody() {
        return $('.sidebar-module:nth-child(2) iframe');
    }
    get vkHeading() {
        return $('.sidebar-module:nth-child(3) h4');
    }
    get vkBody() {
        return $('.sidebar-module:nth-child(3) #vk_groups');
    }
    get subscribeHeading() {
        return $('.sidebar-module:nth-child(4) h4');
    }
    get subscribeInput() {
        return $('.sidebar-module:nth-child(4) #subscriber-email');
    }
    get subscribeBtn() {
        return $('.sidebar-module:nth-child(4) button[type="submit"]');
    }
}

module.exports = new Sidebar();
