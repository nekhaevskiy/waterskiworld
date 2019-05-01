(function () {
    const CLASS_OPENED = 'is-active';
    const SELECTOR_NAVBAR = '[data-js="navbar"]';
    const SELECTOR_HAMBURGER = '[data-js="navbar-hamburger"]';
    const SELECTOR_MENU = '.js-menu';

    const navbar = document.querySelector(SELECTOR_NAVBAR);
    const hamburger = navbar.querySelector(SELECTOR_HAMBURGER);
    const menu = navbar.querySelector(SELECTOR_MENU);
    
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle(CLASS_OPENED);
        menu.classList.toggle(CLASS_OPENED);
    });
})();
