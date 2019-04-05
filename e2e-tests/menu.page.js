class Menu {
    get howToSkiLink() {
        return $('.navbar .menu-item:nth-child(1) a');
    }
    get whereToSkiLink() {
        return $('.navbar .menu-item:nth-child(2) a');
    }
    get recordsLink() {
        return $('.navbar .menu-item:nth-child(3) a');
    }
    get waterskiersLink() {
        return $('.navbar .menu-item:nth-child(4) a');
    }
    get historyLink() {
        return $('.navbar .menu-item:nth-child(5) a');
    }
    get adsLink() {
        return $('.navbar .menu-item:nth-child(6) a');
    }
    get contactsLink() {
        return $('.navbar .menu-item:nth-child(7) a');
    }
}

module.exports = new Menu();