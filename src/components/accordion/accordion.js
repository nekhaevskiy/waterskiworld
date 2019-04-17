(function () {
    const CLASS_OPENED = 'accordion__item--opened';
    const SELECTOR_ACCORDION = '[data-js="accordion"]';
    const DATA_ATR_BTN = 'accordion-btn';

    const accordion = document.querySelector(SELECTOR_ACCORDION);
    
    accordion.addEventListener('click', function (event) {
        if (event.target.dataset.js === DATA_ATR_BTN) {
            const id = event.target.dataset.jsTarget;
            const element = accordion.querySelector(id);
            element.classList.toggle(CLASS_OPENED);
        }
    });
})();
