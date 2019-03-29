var BaseElement = require('./baseElement');

class Button extends BaseElement {
    async clickButton(){
        let _this=this;
        console.log(`Clicking on "${_this.elementName}" Button`);
        await _this.protractorElement.click();
    }

    async isEnabled(){
        let _this=this;
        await _this.protractorElement.isEnabled();
    }
}

module.exports = Button;
