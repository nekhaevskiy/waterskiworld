class Accordion {
    get panels() {
        return $$('.panel');
    }
    get panelHeadings() {
        return $$('.panel-heading');
    }
    get panelBodies() {
        return $$('.panel-collapse');
    }
}

module.exports = new Accordion();