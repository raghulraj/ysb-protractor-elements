let BaseElement = require('./baseElement');
class TextElement extends BaseElement {
    async getText() {
        let string = await this.protractorElement.getText();
        console.log(`Getting text "${string}" from text box "${this.elementName}"`);
        return string;
    }
}

module.exports = TextElement;
