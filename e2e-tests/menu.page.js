class Menu {
    get howToSkiLink() {
        return $('.menu > .menu-item:nth-child(1) > a');
    }
    get whereToSkiLink() {
        return $('.menu > .menu-item:nth-child(2) > a');
    }
    get recordsLink() {
        return $('.menu > .menu-item:nth-child(3) > a');
    }
    get waterskiersLink() {
        return $('.menu > .menu-item:nth-child(4) > a');
    }
    get historyLink() {
        return $('.menu > .menu-item:nth-child(5) > a');
    }
    get adsLink() {
        return $('.menu > .menu-item:nth-child(6) > a');
    }
    get contactsLink() {
        return $('.menu > .menu-item:nth-child(7) > a');
    }
}

module.exports = new Menu();
