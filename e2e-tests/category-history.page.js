class Accordion {
    get items() {
        return $$('[data-qa="accordionItem"]');
    }
    get headings() {
        return $$('[data-qa="accordionItemHeading"]');
    }
    get bodies() {
        return $$('[data-qa="accordionItemBody"]');
    }
}

module.exports = new Accordion();
