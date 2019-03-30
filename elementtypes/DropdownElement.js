
var BaseElement = require('./baseElement'); 

 class DropdownElement extends BaseElement {
    
    /**
     * returns the no of elements present in dropdown.
     */
    async getSize() {
        let _this=await this;
        var oList = await _this.element.all(by.css("option"));
        await console.log("Total no of elements in dropdown are : " + oList.length);
        return await oList.length;
    }

    /**
     * @param {*} index :select the dropdown element by given index
     */
    async selectByIndex(index) {
        let _this=await this;
        await console.log("Selecting element based index : " + index);
        await _this.element.element(by.css("option:nth-child(" + index + ")")).click();
    }
    /**
     * @param {*} visibleText :select the dropdown element by given visibleText
     */
    async select(visibleText) {
        let _this=await this;
        await console.log("Selecting element based text  : " + visibleText);
        await _this.element.element(by.xpath("//option[text()='" + visibleText + "']")).click();
    }

    /**
     *  returns all visible text from dropdown.
     */
    async getOptions1() {
        let _this=await this;
        await console.log("returning all options  : ");
        var oList = await _this.element.all(by.css("option")).getAttribute('innerText');
        return oList;
    }

    /**
     * returns selected option
     */
    async getSelectedOption() {
        let _this=await this;
        await console.log("returning selected options  : ");
        //TODO 

    }
}

module.exports = DropdownElement;
