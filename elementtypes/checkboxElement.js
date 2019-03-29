var BaseElement = require('./baseElement');

class CheckboxElement extends BaseElement {
    
    async check() {
        let _this=this;
        if (await _this.isCheckboxChecked()) {
            await console.log(`checkbox  "${_this.elementName}" is already checked`);
        }
        else {
            await console.log(`checking checkbox  "${_this.elementName}" .`);
            await _this.protractorElement.click();
        }
    }

    async uncheck() {
        let _this=this;
        if (await _this.isCheckboxChecked()) {
            await _this.protractorElement.click();
            await console.log(`unchecking "${_this.elementName}" .`);
        }
        else {
            await console.log(`"${_this.elementName}" is already unchecked `);
        }
    }

    async isCheckboxChecked() {
        let _this=this;
        var selected = await _this.protractorElement.isSelected();
        if (selected) {
            await console.log(`checkbox  "${_this.elementName}" is  checked`);
        }
        else {
            await console.log(`checkbox  "${_this.elementName}" is not checked`);
        }
        return selected;
    }
}
module.exports = CheckboxElement;
