/**
 * Class for Button Webelement.
 */
var BaseElement = require('./baseElement');

class RadioButtonElement extends BaseElement {

    async isEnabled(){
        let _this=this;
        await _this.protractorElement.isEnabled();
    }
}


module.exports = RadioButtonElement;
