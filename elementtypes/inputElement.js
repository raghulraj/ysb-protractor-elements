let BaseElement = require('./baseElement');

class Input extends BaseElement {
    
    async setText(text){
        let _this=this;
        console.log(`Sending text "${text}" to Input "${_this.elementName}"`);
        await _this.protractorElement.sendKeys(text);
    }

    async isEnabled(){
        let _this=this;
        await _this.protractorElement.isEnabled();
    }
}

module.exports = Input;
