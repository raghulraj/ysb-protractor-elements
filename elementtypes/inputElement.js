let BaseElement = require('./baseElement');

class Input extends BaseElement {
    
    async setiPhoneText(locator,text){
        await browser.executeScript(`
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(${locator}, "${text}");
        var event = new Event('input', { bubbles: true});
        ${locator}.dispatchEvent(event);
        `,locator,text)
    }
    
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
    async getValue(){
        let _this=this;
        console.log(`Reading value attribute from Input "${_this.elementName}"`);
        return await _this.protractorElement.getAttribute('value');
    }
}

module.exports = Input;
