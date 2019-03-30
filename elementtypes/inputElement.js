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
    
    async getText(){
        let _this=this;
        console.log(`Reading text from Input "${_this.elementName}"`);
        return _this.element.getText();
    }
}

module.exports = Input;
